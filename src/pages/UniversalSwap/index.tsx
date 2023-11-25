import { isMobile } from '@walletconnect/browser-utils';
import cn from 'classnames/bind';
import { TVChartContainer } from '@oraichain/oraidex-common-ui';
import Content from 'layouts/Content';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AssetsTab, HeaderTab, HistoryTab, TabsTxs } from './Component';
import { TransactionProcess } from './Modals';
import SwapComponent from './SwapV3';
import { NetworkFilter, TYPE_TAB_HISTORY, initNetworkFilter } from './helpers';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import { selectChartDataLength, selectCurrentToken } from 'reducer/tradingSlice';
import { DuckDb } from 'libs/duckdb';
import useTheme from 'hooks/useTheme';
import { PAIRS_CHART } from 'config/pools';
const cx = cn.bind(styles);

const Swap: React.FC = () => {
  const [[fromTokenDenom, toTokenDenom], setSwapTokens] = useState<[string, string]>(['orai', 'usdt']);
  const [hideChart, setHideChart] = useState<boolean>(false);
  const [isTxsProcess, setIsTxsProcress] = useState<boolean>(false);
  const [networkFilter, setNetworkFilter] = useState<NetworkFilter>(initNetworkFilter);
  const mobileMode = isMobile();
  const chartDataLength = useSelector(selectChartDataLength);
  const theme = useTheme();
  const currentPair = useSelector(selectCurrentToken);
  const [searchParams] = useSearchParams();
  let tab = searchParams.get('type');

  const initDuckdb = async () => {
    window.duckDb = await DuckDb.create();
  };

  useEffect(() => {
    if (!window.duckDb) initDuckdb();
  }, [window.duckDb]);

  return (
    <Content nonBackground>
      <div className={cx('swap-container')}>
        <div className={cx('swap-col', 'w60')}>
          <div>
            {!mobileMode && (
              <>
                {chartDataLength > 0 && (
                  <HeaderTab setHideChart={setHideChart} hideChart={hideChart} toTokenDenom={toTokenDenom} />
                )}
                <div className={cx('tv-chart', hideChart || chartDataLength === 0 ? 'hidden' : '')}>
                  {isTxsProcess && <TransactionProcess close={() => setIsTxsProcress(!isTxsProcess)} />}
                  <TVChartContainer theme={theme} currentPair={currentPair} pairsChart={PAIRS_CHART} />
                </div>
              </>
            )}

            {/* <RoutingSection /> */}
            <TabsTxs setNetworkFilter={setNetworkFilter} networkFilter={networkFilter} />
            {tab === TYPE_TAB_HISTORY.HISTORY ? (
              <HistoryTab networkFilter={networkFilter.value} />
            ) : (
              <AssetsTab networkFilter={networkFilter.value} />
            )}
          </div>
        </div>
        <div className={cx('swap-col', 'w40')}>
          <SwapComponent fromTokenDenom={fromTokenDenom} toTokenDenom={toTokenDenom} setSwapTokens={setSwapTokens} />
        </div>
      </div>
    </Content>
  );
};

export default Swap;
