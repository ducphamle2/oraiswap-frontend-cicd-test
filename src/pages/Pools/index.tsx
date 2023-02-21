import React, { FC, memo, useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Content from 'layouts/Content';
import { getPair, Pair, pairs } from 'config/pools';
import {
  fetchAllPoolApr,
  fetchPairInfo,
  fetchPoolInfoAmount,
  fetchTokenInfo,
} from 'rest/api';
import { getUsd } from 'libs/utils';
import TokenBalance from 'components/TokenBalance';
import _ from 'lodash';
import NewPoolModal from './NewPoolModal/NewPoolModal';
import { Fraction } from '@saberhq/token-utils';
import { filteredTokens, TokenItemType } from 'config/bridgeTokens';
import { MILKY, STABLE_DENOM } from 'config/constants';
import { useQuery } from '@tanstack/react-query';
import DropdownCustom from 'components/DropdownCustom';
import FilterSvg from 'assets/icons/icon-filter.svg';
import SearchSvg from 'assets/icons/search-svg.svg';
import NoDataSvg from 'assets/icons/NoDataPool.svg';
import useLocalStorage from 'hooks/useLocalStorage';

const { Search } = Input;
const useQueryConfig = {
  retry: 3,
  retryDelay: 3000,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
};
interface PoolsProps {}

enum KeyFilter {
  my_pool,
  all_pool,
}

const LIST_FILTER = [
  {
    key: KeyFilter.my_pool,
    text: 'My Pools',
  },
  {
    key: KeyFilter.all_pool,
    text: 'All Pools',
  },
];

const Header: FC<{ amount: number; oraiPrice: number }> = ({
  amount,
  oraiPrice,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_title}>Pools</div>
      <div className={styles.header_data}>
        <div className={styles.header_data_item}>
          <span className={styles.header_data_name}>ORAI Price</span>
          <span className={styles.header_data_value}>
            <TokenBalance
              balance={oraiPrice}
              className={styles.header_data_value}
              decimalScale={2}
            />
          </span>
        </div>
        <div className={styles.header_data_item}>
          <span className={styles.header_data_name}>Total Liquidity</span>
          <TokenBalance
            balance={amount}
            className={styles.header_data_value}
            decimalScale={2}
          />
        </div>
      </div>
    </div>
  );
};

const PairBox = memo<PairInfoData & { apr: number }>(
  ({ pair, amount, commissionRate, apr }) => {
    const navigate = useNavigate();
    const [token1, token2] = pair.asset_denoms.map((denom) =>
      filteredTokens.find((token) => token.denom === denom)
    );

    if (!token1 || !token2) return null;

    return (
      <div
        className={styles.pairbox}
        onClick={() =>
          navigate(
            `/pool/${encodeURIComponent(token1.denom)}_${encodeURIComponent(
              token2.denom
            )}`
            // { replace: true }
          )
        }
      >
        <div className={styles.pairbox_header}>
          <div className={styles.pairbox_logos}>
            <token1.Icon className={styles.pairbox_logo1} />
            <token2.Icon className={styles.pairbox_logo2} />
          </div>
          <div className={styles.pairbox_pair}>
            <div className={styles.pairbox_pair_name}>
              {token1.name}/{token2.name}
            </div>
            <div className={styles.pairbox_pair_rate}>
              {/* {token1.name} (50%)/{token2.name} (50%) */}
            </div>
            <span className={styles.pairbox_pair_apr}>ORAIX Bonus</span>
          </div>
        </div>
        <div className={styles.pairbox_content}>
          {!!apr && (
            <div className={styles.pairbox_data}>
              <span className={styles.pairbox_data_name}>APR</span>
              <span className={styles.pairbox_data_value}>
                {apr.toFixed(2)}%
              </span>
            </div>
          )}
          <div className={styles.pairbox_data}>
            <span className={styles.pairbox_data_name}>Swap Fee</span>
            <span className={styles.pairbox_data_value}>
              {100 * parseFloat(commissionRate)}%
            </span>
          </div>
          <div className={styles.pairbox_data}>
            <span className={styles.pairbox_data_name}>Liquidity</span>
            <TokenBalance
              balance={amount}
              className={styles.pairbox_data_value}
              decimalScale={2}
            />
          </div>
        </div>
      </div>
    );
  }
);

const WatchList = memo(() => {
  return (
    <div className={styles.watchlist}>
      <div className={styles.watchlist_title}></div>
    </div>
  );
});

const ListPools = memo<{
  pairInfos: PairInfoData[];
  allPoolApr: any;
  setIsOpenNewPoolModal: any;
}>(({ pairInfos, setIsOpenNewPoolModal, allPoolApr }) => {
  const [filteredPairInfos, setFilteredPairInfos] = useState<PairInfoData[]>(
    []
  );
  const [amounts] = useLocalStorage<AmountDetails>('amounts', {});
  const [typeFilter, setTypeFilter] = useState(KeyFilter.all_pool);

  const listMyPool = useMemo(() => {
    return pairs
      .map((item) => {
        return {
          asset_denoms: item.asset_denoms,
          amount: amounts[item.liquidity_token]?.amount ?? 0,
        };
      })
      .filter((item) => item.amount > 0);
  }, [amounts]);

  console.log('LIST', listMyPool);
  console.log('LIST amount', amounts);
  console.log('LIST pair', filteredPairInfos);

  useEffect(() => {
    if (typeFilter === KeyFilter.my_pool) {
      if (listMyPool.length === 0) return setFilteredPairInfos([]);
      const myPools = pairInfos.filter((pairInfo) =>
        listMyPool.some((pool) =>
          _.isEqual(pool.asset_denoms, pairInfo.pair.asset_denoms)
        )
      );
      setFilteredPairInfos(myPools);
    } else {
      setFilteredPairInfos(pairInfos);
    }
  }, [listMyPool, typeFilter, pairInfos]);

  const filterPairs = (text: string) => {
    if (!text) {
      return setFilteredPairInfos(pairInfos);
    }
    const searchReg = new RegExp(text, 'i');
    const ret = pairInfos.filter((pairInfo) =>
      pairInfo.pair.asset_denoms.some((denom) =>
        filteredTokens.find(
          (token) =>
            token.denom === denom && token.name.search(searchReg) !== -1
        )
      )
    );

    setFilteredPairInfos(ret);
  };

  const contentDropdown = useMemo(() => {
    return (
      <div className={styles.content_dropdown}>
        {LIST_FILTER.map((item) => (
          <div
            key={item.key}
            style={{ color: item.key === typeFilter ? '#a871df' : '#ebebeb' }}
            className={styles.item_dropdown}
            onClick={() => setTypeFilter(item.key)}
          >
            {item.text}
          </div>
        ))}
      </div>
    );
  }, [typeFilter]);

  const triggerDropdown = useMemo(() => {
    return (
      <div className={styles.trigger_dropdown}>
        <img src={FilterSvg} alt="filter_icon" /> Sort by
      </div>
    );
  }, []);

  return (
    <div className={styles.listpools}>
      <div className={styles.listpools_header}>
        <div className={styles.listpools_filter}>
          <DropdownCustom
            triggerElement={triggerDropdown}
            content={contentDropdown}
            styles={{ top: 'calc(100% + 4px)' }}
          />
        </div>
        <div className={styles.listpools_search}>
          <Input
            placeholder="Search by pools or tokens name"
            prefix={<img src={SearchSvg} alt="icon-search" />}
            onChange={_.debounce((e) => {
              filterPairs(e.target.value);
            }, 500)}
            onPressEnter={(e: any) => filterPairs(e.target.value)}
          />
          {/* <div
            className={styles.listpools_btn}
            onClick={() => setIsOpenNewPoolModal(true)}
          >
            Create new pool
          </div> */}
        </div>
      </div>
      <div className={styles.listpools_list}>
        {filteredPairInfos.length > 0 ? (
          filteredPairInfos.map((info) => (
            <PairBox
              {...info}
              apr={!!allPoolApr ? allPoolApr[info.pair.contract_addr] : 0}
              key={info.pair.contract_addr}
            />
          ))
        ) : (
          <div className={styles.no_data}>
            <img src={NoDataSvg} alt="nodata" />
            <span>No data</span>
          </div>
        )}
      </div>
    </div>
  );
});

type PairInfoData = {
  pair: Pair;
  amount: number;
  commissionRate: string;
  fromToken: any;
  toToken: any;
} & PoolInfo;

const Pools: React.FC<PoolsProps> = () => {
  const [pairInfos, setPairInfos] = useState<PairInfoData[]>([]);
  const [isOpenNewPoolModal, setIsOpenNewPoolModal] = useState(false);
  const [oraiPrice, setOraiPrice] = useState(Fraction.ZERO);

  const fetchPairInfoData = async (pair: Pair): Promise<PairInfoData> => {
    const [fromToken, toToken] = pair.asset_denoms.map((denom) =>
      filteredTokens.find((token) => token.denom === denom)
    );

    try {
      const [fromTokenInfoData, toTokenInfoData] = await Promise.all([
        fetchTokenInfo(fromToken!),
        fetchTokenInfo(toToken!),
      ]);

      const [poolData, infoData] = await Promise.all([
        fetchPoolInfoAmount(fromTokenInfoData, toTokenInfoData),
        fetchPairInfo([fromTokenInfoData, toTokenInfoData]),
      ]);

      return {
        ...poolData,
        amount: 0,
        pair,
        commissionRate: infoData.commission_rate,
        fromToken,
        toToken,
      };
    } catch (ex) {
      console.log(ex);
    }
  };

  const fetchPairInfoDataList = async () => {
    const poolList = _.compact(
      await Promise.all(pairs.map((p) => fetchPairInfoData(p)))
    );
    const oraiUsdtPool = poolList.find(
      (pool) => pool.pair.asset_denoms[1] === STABLE_DENOM
    );
    const oraiUsdtPoolMilky = poolList.find(
      (pool) => pool.pair.asset_denoms[0] === MILKY
    );
    if (!oraiUsdtPoolMilky || !oraiUsdtPool) {
      console.warn('pool not found');
      // retry after
      return setTimeout(fetchPairInfoDataList, 5000);
    }

    const oraiPrice = new Fraction(
      oraiUsdtPool.askPoolAmount,
      oraiUsdtPool.offerPoolAmount
    );

    const milkyPrice = new Fraction(
      oraiUsdtPoolMilky.askPoolAmount,
      oraiUsdtPoolMilky.offerPoolAmount
    );
    poolList.forEach((pool) => {
      pool.amount = getUsd(
        2 * pool.offerPoolAmount,
        pool.fromToken?.denom === MILKY ? milkyPrice : oraiPrice,
        pool.fromToken.decimals
      );
    });

    setPairInfos(poolList);
    setOraiPrice(oraiPrice);
  };

  const { data: allPoolApr } = useQuery(
    ['fetchAllPoolApr'],
    () => fetchAllPoolApr(),
    useQueryConfig
  );
  // useQuery(
  //   ['fetchPairInfoDataList'],
  //   () => fetchPairInfoDataList(),
  //   useQueryConfig
  // );

  useEffect(() => {
    fetchPairInfoDataList();
    return () => {};
  }, []);

  const totalAmount = _.sumBy(pairInfos, (c) => c.amount);

  return (
    <Content nonBackground>
      <div className={styles.pools}>
        <Header amount={totalAmount} oraiPrice={oraiPrice?.asNumber ?? 0} />
        <WatchList />
        <ListPools
          pairInfos={pairInfos}
          allPoolApr={allPoolApr}
          setIsOpenNewPoolModal={setIsOpenNewPoolModal}
        />
        <NewPoolModal
          isOpen={isOpenNewPoolModal}
          open={() => setIsOpenNewPoolModal(true)}
          close={() => setIsOpenNewPoolModal(false)}
        />
      </div>
    </Content>
  );
};

export default Pools;
