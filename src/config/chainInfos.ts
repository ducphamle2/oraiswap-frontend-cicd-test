import { Bech32Config, ChainInfo, Currency, FeeCurrency } from '@keplr-wallet/types';
import {
  TokenItemType,
  tokens,
  chainInfos as customChainInfos,
  OsmoToken,
  AtomToken,
  InjectiveToken,
  ChainIdEnum
} from '@oraichain/oraidex-common';
import { ReactComponent as AiriIcon } from 'assets/icons/airi.svg';
import { ReactComponent as AtomIcon } from 'assets/icons/atom_cosmos.svg';
import { ReactComponent as BnbIcon } from 'assets/icons/bnb.svg';
import { ReactComponent as EthIcon } from 'assets/icons/ethereum.svg';
import { ReactComponent as KwtIcon } from 'assets/icons/kwt.svg';
import { ReactComponent as MilkyIcon } from 'assets/icons/milky-token.svg';
import { ReactComponent as OraiIcon } from 'assets/icons/oraichain.svg';

import { ReactComponent as BTCIcon } from 'assets/icons/btc-icon.svg';
import { ReactComponent as OraiLightIcon } from 'assets/icons/oraichain_light.svg';
import { ReactComponent as OraixIcon } from 'assets/icons/oraix.svg';
import { ReactComponent as OraixLightIcon } from 'assets/icons/oraix_light.svg';
import { ReactComponent as OsmoLightIcon } from 'assets/icons/osmosis_light.svg';
import { ReactComponent as ScOraiIcon } from 'assets/icons/orchai.svg';
import { ReactComponent as OsmoIcon } from 'assets/icons/osmosis.svg';
import { ReactComponent as UsdtIcon } from 'assets/icons/tether.svg';
import { ReactComponent as TronIcon } from 'assets/icons/tron.svg';
import { ReactComponent as UsdcIcon } from 'assets/icons/usd_coin.svg';
import { ReactComponent as ScAtomIcon } from 'assets/icons/scatom.svg';
import { ReactComponent as InjIcon } from 'assets/icons/inj.svg';
import { ReactComponent as NobleIcon } from 'assets/icons/noble.svg';

import {
  AIRI_BSC_CONTRACT,
  AIRI_CONTRACT,
  ATOM_ORAICHAIN_DENOM,
  INJECTIVE_CONTRACT,
  INJECTIVE_ORAICHAIN_DENOM,
  KWTBSC_ORAICHAIN_DENOM,
  KWT_BSC_CONTRACT,
  KWT_CONTRACT,
  KWT_DENOM,
  KWT_SUB_NETWORK_DENOM,
  MILKYBSC_ORAICHAIN_DENOM,
  MILKY_BSC_CONTRACT,
  MILKY_CONTRACT,
  MILKY_DENOM,
  MILKY_ERC_CONTRACT,
  MILKY_SUB_NETWORK_DENOM,
  ORAIIBC_INJECTIVE_DENOM,
  ORAIX_CONTRACT,
  ORAI_BRIDGE_EVM_DENOM_PREFIX,
  ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX,
  ORAI_BRIDGE_EVM_TRON_DENOM_PREFIX,
  ORAI_BSC_CONTRACT,
  ORAI_ETH_CONTRACT,
  OSMOSIS_ORAICHAIN_DENOM,
  SCATOM_CONTRACT,
  SCORAI_CONTRACT,
  TRX_CONTRACT,
  USDC_CONTRACT,
  USDC_ETH_CONTRACT,
  USDT_BSC_CONTRACT,
  USDT_CONTRACT,
  USDT_TRON_CONTRACT,
  WRAP_BNB_CONTRACT,
  WRAP_ETH_CONTRACT,
  WRAP_TRON_TRX_CONTRACT,
  WETH_CONTRACT
} from '@oraichain/oraidex-common';
import { BridgeAppCurrency, CustomChainInfo, defaultBech32Config } from '@oraichain/oraidex-common';
import { flatten } from 'lodash';

const [otherChainTokens, oraichainTokens] = tokens;
type TokenIcon = Pick<TokenItemType, 'coinGeckoId' | 'Icon' | 'IconLight'>;
type ChainIcon = Pick<CustomChainInfo, 'chainId' | 'Icon' | 'IconLight'>;

export const tokensIcon: TokenIcon[] = [
  {
    coinGeckoId: 'oraichain-token',
    Icon: OraiIcon,
    IconLight: OraiLightIcon
  },
  {
    coinGeckoId: 'usd-coin',
    Icon: UsdcIcon,
    IconLight: UsdcIcon
  },
  {
    coinGeckoId: 'bitcoin' as any,
    Icon: BTCIcon,
    IconLight: BTCIcon
  },
  {
    coinGeckoId: 'airight',
    Icon: AiriIcon,
    IconLight: AiriIcon
  },
  {
    coinGeckoId: 'tether',
    Icon: UsdtIcon,
    IconLight: UsdtIcon
  },
  {
    coinGeckoId: 'tron',
    Icon: TronIcon,
    IconLight: TronIcon
  },
  {
    coinGeckoId: 'kawaii-islands',
    Icon: KwtIcon,
    IconLight: KwtIcon
  },
  {
    coinGeckoId: 'milky-token',
    Icon: MilkyIcon,
    IconLight: MilkyIcon
  },
  {
    coinGeckoId: 'osmosis',
    Icon: OsmoIcon,
    IconLight: OsmoLightIcon
  },
  {
    coinGeckoId: 'injective-protocol',
    Icon: InjIcon,
    IconLight: InjIcon
  },
  {
    coinGeckoId: 'cosmos',
    Icon: AtomIcon,
    IconLight: AtomIcon
  },
  {
    coinGeckoId: 'weth',
    Icon: EthIcon,
    IconLight: EthIcon
  },
  {
    coinGeckoId: 'ethereum',
    Icon: EthIcon,
    IconLight: EthIcon
  },
  {
    coinGeckoId: 'wbnb',
    Icon: BnbIcon,
    IconLight: BnbIcon
  },
  {
    coinGeckoId: 'binancecoin',
    Icon: BnbIcon,
    IconLight: BnbIcon
  },
  {
    coinGeckoId: 'oraidex',
    Icon: OraixIcon,
    IconLight: OraixLightIcon
  },
  {
    coinGeckoId: 'scorai',
    Icon: ScOraiIcon,
    IconLight: ScOraiIcon
  },
  {
    coinGeckoId: 'scatom',
    Icon: ScAtomIcon,
    IconLight: ScAtomIcon
  }
];

export const chainIcons: ChainIcon[] = [
  {
    chainId: 'Oraichain',
    Icon: OraiIcon,
    IconLight: OraiLightIcon
  },
  {
    chainId: 'bitcoinTestnet' as any,
    Icon: BTCIcon,
    IconLight: BTCIcon
  },
  {
    chainId: 'kawaii_6886-1',
    Icon: KwtIcon,
    IconLight: KwtIcon
  },
  {
    chainId: 'osmosis-1',
    Icon: OsmoIcon,
    IconLight: OsmoLightIcon
  },
  {
    chainId: 'injective-1',
    Icon: InjIcon,
    IconLight: InjIcon
  },
  {
    chainId: 'cosmoshub-4',
    Icon: AtomIcon,
    IconLight: AtomIcon
  },
  {
    chainId: '0x01',
    Icon: EthIcon,
    IconLight: EthIcon
  },
  {
    chainId: '0x2b6653dc',
    Icon: TronIcon,
    IconLight: TronIcon
  },
  {
    chainId: '0x38',
    Icon: BnbIcon,
    IconLight: BnbIcon
  },
  {
    chainId: '0x1ae6',
    Icon: KwtIcon,
    IconLight: KwtIcon
  },
  {
    chainId: 'noble-1',
    Icon: NobleIcon,
    IconLight: NobleIcon
  }
];
export const mapListWithIcon = (list: any[], listIcon: ChainIcon[] | TokenIcon[], key: 'chainId' | 'coinGeckoId') => {
  return list.map((item) => {
    let Icon = OraiIcon;
    let IconLight = OraiLightIcon;

    const findedItem = listIcon.find((icon) => icon[key] === item[key]);
    if (findedItem) {
      Icon = findedItem.Icon;
      IconLight = findedItem.IconLight;
    }

    return {
      ...item,
      Icon,
      IconLight
    };
  });
};

// mapped chain info with icon
export const chainInfosWithIcon = mapListWithIcon(customChainInfos, chainIcons, 'chainId');

// mapped token with icon
export const oraichainTokensWithIcon = mapListWithIcon(oraichainTokens, tokensIcon, 'coinGeckoId');
export const otherTokensWithIcon = mapListWithIcon(otherChainTokens, tokensIcon, 'coinGeckoId');

export const tokensWithIcon = [otherTokensWithIcon, oraichainTokensWithIcon];
export const flattenTokensWithIcon = flatten(tokensWithIcon);

export const OraiToken: BridgeAppCurrency = {
  coinDenom: 'ORAI',
  coinMinimalDenom: 'orai',
  coinDecimals: 6,
  coinGeckoId: 'oraichain-token',
  Icon: OraiIcon,
  IconLight: OraiLightIcon,
  bridgeTo: ['0x38', '0x01', 'injective-1'],
  gasPriceStep: {
    low: 0.003,
    average: 0.005,
    high: 0.007
  }
};

const OraiBToken: BridgeAppCurrency = {
  coinDenom: 'ORAIB',
  coinMinimalDenom: 'uoraib',
  coinDecimals: 6,
  gasPriceStep: {
    low: 0,
    average: 0,
    high: 0
  }
};

const KawaiiToken: BridgeAppCurrency = {
  coinDenom: 'ORAIE',
  coinMinimalDenom: 'oraie',
  coinDecimals: 18,
  coinGeckoId: 'kawaii-islands',
  Icon: KwtIcon,
  gasPriceStep: {
    low: 0,
    average: 0.000025,
    high: 0.00004
  }
};

export const oraichainNetwork: CustomChainInfo = {
  rpc: 'https://rpc.orai.io',
  rest: 'https://lcd.orai.io',
  chainId: 'Oraichain',
  chainName: 'Oraichain',
  networkType: 'cosmos',
  stakeCurrency: OraiToken,
  bip44: {
    coinType: 118
  },
  bech32Config: defaultBech32Config('orai'),
  feeCurrencies: [OraiToken],

  Icon: OraiIcon,
  IconLight: OraiLightIcon,
  features: ['ibc-transfer', 'cosmwasm', 'wasmd_0.24+'],
  currencies: [
    OraiToken,
    {
      coinDenom: 'ATOM',
      coinGeckoId: 'cosmos',
      coinMinimalDenom: ATOM_ORAICHAIN_DENOM,
      bridgeTo: ['cosmoshub-4'],
      coinDecimals: 6,
      Icon: AtomIcon,
      IconLight: AtomIcon
    },
    // {
    //   coinDenom: 'BEP20 AIRI',
    //   coinGeckoId: 'airight',
    //   coinMinimalDenom:  AIRIBSC_ORAICHAIN_DENOM,
    //   coinDecimals: 18,
    //   Icon: AiriIcon
    // },
    {
      coinDenom: 'AIRI',
      coinGeckoId: 'airight',
      coinMinimalDenom: 'airi',
      type: 'cw20',
      contractAddress: AIRI_CONTRACT,
      bridgeTo: ['0x38'],
      coinDecimals: 6,
      Icon: AiriIcon
    },
    {
      coinDenom: 'USDT',
      coinGeckoId: 'tether',
      coinMinimalDenom: 'usdt',
      type: 'cw20',
      contractAddress: USDT_CONTRACT,
      bridgeTo: ['0x38', '0x2b6653dc'],
      coinDecimals: 6,
      Icon: UsdtIcon
    },
    {
      coinDenom: 'USDC',
      coinGeckoId: 'usd-coin',
      coinMinimalDenom: 'usdc',
      type: 'cw20',
      contractAddress: USDC_CONTRACT,
      bridgeTo: ['0x01', 'noble-1'],
      coinDecimals: 6,
      Icon: UsdcIcon
    },
    {
      coinDenom: 'OSMO',
      coinMinimalDenom: OSMOSIS_ORAICHAIN_DENOM,
      coinDecimals: 6,
      coinGeckoId: 'osmosis',
      bridgeTo: ['osmosis-1'],
      Icon: OsmoIcon,
      IconLight: OsmoLightIcon
    },
    {
      coinDenom: 'BEP20 KWT',
      coinGeckoId: 'kawaii-islands',
      coinMinimalDenom: KWTBSC_ORAICHAIN_DENOM,
      coinDecimals: 18,
      Icon: KwtIcon
    },
    {
      coinDenom: 'KWT',
      coinGeckoId: 'kawaii-islands',
      coinMinimalDenom: 'kwt',
      type: 'cw20',
      contractAddress: KWT_CONTRACT,
      bridgeTo: ['kawaii_6886-1', '0x38'],
      coinDecimals: 6,
      Icon: KwtIcon
    },
    {
      coinDenom: 'BTC',
      coinGeckoId: 'bitcoin' as any,
      coinMinimalDenom: 'orai1d2hq8pzf0nswlqhhng95hkfnmgutpmz6g8hd8q7ec9q9pj6t3r2q7vc646',
      type: 'cw20',
      contractAddress: 'orai1d2hq8pzf0nswlqhhng95hkfnmgutpmz6g8hd8q7ec9q9pj6t3r2q7vc646',
      bridgeTo: ['bitcoinTestnet'] as any,
      coinDecimals: 6,
      Icon: BTCIcon,
      IconLight: BTCIcon
    },
    {
      coinDenom: 'BEP20 MILKY',
      coinGeckoId: 'milky-token',
      coinMinimalDenom: MILKYBSC_ORAICHAIN_DENOM,
      coinDecimals: 18,
      Icon: MilkyIcon
    },
    {
      coinDenom: 'MILKY',
      coinGeckoId: 'milky-token',
      coinMinimalDenom: 'milky',
      type: 'cw20',
      contractAddress: MILKY_CONTRACT,
      bridgeTo: ['kawaii_6886-1', '0x38'],
      coinDecimals: 6,
      Icon: MilkyIcon
    },
    {
      coinDenom: 'ORAIX',
      coinMinimalDenom: 'oraix',
      type: 'cw20',
      contractAddress: ORAIX_CONTRACT,
      coinGeckoId: 'oraidex',
      coinDecimals: 6,
      Icon: OraixIcon,
      IconLight: OraixLightIcon
    },
    {
      coinDenom: 'scORAI',
      coinMinimalDenom: 'scorai',
      type: 'cw20',
      contractAddress: SCORAI_CONTRACT,
      coinGeckoId: 'scorai',
      coinDecimals: 6,
      Icon: ScOraiIcon
    },
    {
      coinDenom: 'wTRX',
      coinGeckoId: 'tron',
      coinMinimalDenom: 'trx',
      type: 'cw20',
      contractAddress: TRX_CONTRACT,
      bridgeTo: ['0x2b6653dc'],
      coinDecimals: 6,
      Icon: TronIcon
    },
    {
      coinDenom: 'scATOM',
      coinMinimalDenom: 'scatom',
      type: 'cw20',
      contractAddress: SCATOM_CONTRACT,
      coinGeckoId: 'scatom',
      coinDecimals: 6,
      Icon: ScAtomIcon
    },
    {
      coinDenom: 'IBC INJ',
      coinGeckoId: 'injective-protocol',
      coinMinimalDenom: INJECTIVE_ORAICHAIN_DENOM,
      coinDecimals: 18,
      Icon: InjIcon,
      IconLight: InjIcon
    },
    {
      coinDenom: 'INJ',
      coinGeckoId: 'injective-protocol',
      coinMinimalDenom: 'injective',
      contractAddress: INJECTIVE_CONTRACT,
      bridgeTo: ['injective-1'],
      type: 'cw20',
      coinDecimals: 6,
      Icon: InjIcon,
      IconLight: InjIcon
    },
    {
      coinDenom: 'WETH',
      coinGeckoId: 'weth',
      coinMinimalDenom: 'weth',
      type: 'cw20',
      contractAddress: WETH_CONTRACT,
      bridgeTo: ['0x01'],
      coinDecimals: 6,
      coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      Icon: EthIcon,
      IconLight: EthIcon
    }
    // {
    //   coinDenom: 'ATOM-CW20',
    //   coinGeckoId: 'cosmos',
    //   coinMinimalDenom: 'uatom',
    //   type: 'cw20',
    //   contractAddress: 'orai17l2zk3arrx0a0fyuneyx8raln68622a2lrsz8ph75u7gw9tgz3esayqryf',
    //   bridgeTo: ['cosmoshub-4'],
    //   coinDecimals: 6,
    //   Icon: AtomIcon
    // }
  ]
};

export const chainInfos: CustomChainInfo[] = [
  // networks to add on keplr
  oraichainNetwork,
  {
    rest: 'https://blockstream.info/testnet/api',
    rpc: 'https://blockstream.info/testnet/api',
    chainId: ChainIdEnum.BitcoinTestnet as any,
    chainName: 'Bitcoin Testnet' as any,
    bip44: {
      coinType: 1 as any
    },
    coinType: 1,
    Icon: BTCIcon,
    IconLight: BTCIcon,
    stakeCurrency: {
      coinDenom: 'BTC',
      coinMinimalDenom: 'btc',
      coinDecimals: 8,
      coinGeckoId: 'bitcoin',
      coinImageUrl: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png'
    },
    bech32Config: defaultBech32Config('tb'),
    networkType: 'bitcoin' as any,
    currencies: [
      {
        coinDenom: 'BTC',
        coinMinimalDenom: 'btc',
        coinDecimals: 8 as any,
        bridgeTo: ['Oraichain'],
        Icon: BTCIcon,
        coinGeckoId: 'bitcoin' as any,
        coinImageUrl: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0
        }
      }
    ],
    get feeCurrencies() {
      return this.currencies;
    },

    features: ['isBtc'],
    txExplorer: {
      name: 'BlockStream',
      txUrl: 'https://blockstream.info/testnet/tx/{txHash}',
      accountUrl: 'https://blockstream.info/testnet/address/{address}'
    }
  },
  {
    rpc: 'https://bridge-v2.rpc.orai.io',
    rest: 'https://bridge-v2.lcd.orai.io',
    chainId: 'oraibridge-subnet-2',
    chainName: 'OraiBridge',
    networkType: 'cosmos',
    bip44: {
      coinType: 118
    },
    bech32Config: defaultBech32Config('oraib'),

    features: ['ibc-transfer'],
    stakeCurrency: OraiBToken,
    feeCurrencies: [OraiBToken],
    // not use oraib as currency
    currencies: [
      OraiBToken,
      {
        coinDenom: 'ORAI',
        coinMinimalDenom: ORAI_BRIDGE_EVM_DENOM_PREFIX + ORAI_BSC_CONTRACT,
        bridgeNetworkIdentifier: '0x38',
        coinDecimals: 18,
        coinGeckoId: 'oraichain-token',
        IconLight: OraiLightIcon,
        Icon: OraiIcon
      },
      {
        coinDenom: 'ORAI',
        coinMinimalDenom: ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX + ORAI_ETH_CONTRACT,
        bridgeNetworkIdentifier: '0x01',
        coinDecimals: 18,
        coinGeckoId: 'oraichain-token',
        IconLight: OraiLightIcon,
        prefixToken: ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX,
        Icon: OraiIcon
      },
      {
        coinDenom: 'USDC',
        coinMinimalDenom: ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX + USDC_ETH_CONTRACT,
        bridgeNetworkIdentifier: '0x01',
        coinDecimals: 6,
        coinGeckoId: 'usd-coin',
        prefixToken: ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX,
        Icon: UsdcIcon
      },
      {
        coinDenom: 'WETH',
        coinMinimalDenom: ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX + WRAP_ETH_CONTRACT,
        bridgeNetworkIdentifier: '0x01',
        coinDecimals: 6,
        coinGeckoId: 'weth',
        prefixToken: ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX,
        Icon: EthIcon
      },
      {
        coinDenom: 'AIRI',
        coinMinimalDenom: ORAI_BRIDGE_EVM_DENOM_PREFIX + AIRI_BSC_CONTRACT,
        bridgeNetworkIdentifier: '0x38',
        coinDecimals: 18,
        coinGeckoId: 'airight',
        Icon: AiriIcon
      },
      {
        coinDenom: 'USDT',
        coinMinimalDenom: ORAI_BRIDGE_EVM_DENOM_PREFIX + USDT_BSC_CONTRACT,
        bridgeNetworkIdentifier: '0x38',
        coinDecimals: 18,
        coinGeckoId: 'tether',
        Icon: UsdtIcon
      },
      {
        coinDenom: 'USDT',
        coinMinimalDenom: ORAI_BRIDGE_EVM_TRON_DENOM_PREFIX + USDT_TRON_CONTRACT,
        bridgeNetworkIdentifier: '0x2b6653dc',
        prefixToken: ORAI_BRIDGE_EVM_TRON_DENOM_PREFIX,
        coinDecimals: 6,
        coinGeckoId: 'tether',
        Icon: UsdtIcon
      },
      {
        coinDenom: 'wTRX',
        coinMinimalDenom: ORAI_BRIDGE_EVM_TRON_DENOM_PREFIX + WRAP_TRON_TRX_CONTRACT,
        bridgeNetworkIdentifier: '0x2b6653dc',
        coinDecimals: 6,
        coinGeckoId: 'tron',
        prefixToken: ORAI_BRIDGE_EVM_TRON_DENOM_PREFIX,
        Icon: TronIcon
      },
      {
        coinDenom: 'KWT',
        bridgeNetworkIdentifier: '0x38',
        coinMinimalDenom: KWT_DENOM,
        coinDecimals: 18,
        coinGeckoId: 'kawaii-islands',
        Icon: KwtIcon
      },
      {
        coinDenom: 'MILKY',
        bridgeNetworkIdentifier: '0x38',
        coinMinimalDenom: MILKY_DENOM,
        coinDecimals: 18,
        coinGeckoId: 'milky-token',
        Icon: MilkyIcon
      }
    ]
  },
  {
    rpc: 'https://tendermint1.kawaii.global',
    rest: 'https://cosmos1.kawaii.global',
    chainId: 'kawaii_6886-1',
    chainName: 'Kawaiiverse',
    networkType: 'cosmos',
    stakeCurrency: KawaiiToken,
    bip44: {
      coinType: 60
    },
    bech32Config: defaultBech32Config('oraie'),
    feeCurrencies: [KawaiiToken],

    Icon: KwtIcon,
    // features: ['ibc-transfer'],
    features: ['ibc-transfer', 'ibc-go', 'stargate', 'eth-address-gen', 'eth-key-sign'],
    currencies: [
      KawaiiToken,
      {
        coinDenom: 'MILKY',
        coinGeckoId: 'milky-token',
        coinMinimalDenom: MILKY_SUB_NETWORK_DENOM,
        coinDecimals: 18,
        bridgeTo: ['Oraichain', 'kawaii_6886-1'],
        Icon: MilkyIcon
      },
      {
        coinDenom: 'ERC20 MILKY',
        coinMinimalDenom: 'erc20_milky',
        bridgeTo: ['Oraichain', 'kawaii_6886-1'],
        contractAddress: MILKY_ERC_CONTRACT,
        coinDecimals: 18,
        coinGeckoId: 'milky-token',
        Icon: MilkyIcon
      },
      {
        coinDenom: 'KWT',
        coinMinimalDenom: KWT_SUB_NETWORK_DENOM,
        coinDecimals: 18,
        bridgeTo: ['Oraichain', 'kawaii_6886-1'],
        coinGeckoId: 'kawaii-islands',
        Icon: KwtIcon
      },
      {
        coinDenom: 'ERC20 KWT',
        bridgeTo: ['Oraichain', 'kawaii_6886-1'],
        coinMinimalDenom: 'erc20_kwt',
        contractAddress: '0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd',
        coinDecimals: 18,
        coinGeckoId: 'kawaii-islands',
        Icon: KwtIcon
      }
    ]
  },

  /// popular networks already included
  {
    rpc: 'https://osmosis.rpc.orai.io/',
    rest: 'https://osmosis.lcd.orai.io/',
    chainId: 'osmosis-1',
    chainName: 'Osmosis',
    networkType: 'cosmos',
    bip44: {
      coinType: 118
    },
    Icon: OsmoIcon,
    IconLight: OsmoLightIcon,
    bech32Config: defaultBech32Config('osmo'),
    feeCurrencies: [OsmoToken],
    currencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis',
        bridgeTo: ['Oraichain'],
        Icon: OsmoIcon,
        IconLight: OsmoLightIcon
      }
    ]
  },
  /// popular networks already included
  {
    rpc: 'https://injective.rpc.orai.io',
    rest: 'https://injective.lcd.orai.io',
    chainId: 'injective-1',
    chainName: 'Injective',
    networkType: 'cosmos',
    bip44: {
      coinType: 60
    },
    Icon: InjIcon,
    IconLight: InjIcon,
    bech32Config: defaultBech32Config('inj'),
    feeCurrencies: [InjectiveToken],
    currencies: [
      {
        coinDenom: 'INJ',
        coinMinimalDenom: 'inj',
        coinDecimals: 18,
        coinGeckoId: 'injective-protocol',
        bridgeTo: ['Oraichain'],
        Icon: InjIcon,
        IconLight: InjIcon
      },
      {
        coinDenom: 'ORAI',
        coinMinimalDenom: ORAIIBC_INJECTIVE_DENOM,
        coinDecimals: 6,
        coinGeckoId: 'oraichain-token',
        bridgeTo: ['Oraichain'],
        Icon: OraiIcon,
        IconLight: OraiLightIcon
      }
    ]
  },
  {
    rpc: 'https://rpc.mainnet.noble.strange.love/',
    rest: 'https://noble-api.polkachu.com',
    chainId: 'noble-1',
    chainName: 'Noble',
    networkType: 'cosmos',
    bip44: {
      coinType: 118
    },
    bech32Config: defaultBech32Config('noble'),
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    Icon: NobleIcon,
    IconLight: NobleIcon,
    currencies: [
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'uusdc',
        coinDecimals: 6,
        coinGeckoId: 'usd-coin',
        coinImageUrl: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        gasPriceStep: {
          low: 0,
          average: 0.025,
          high: 0.03
        },
        bridgeTo: ['Oraichain'],
        Icon: UsdcIcon,
        IconLight: UsdcIcon
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'uusdc',
        coinDecimals: 6,
        coinGeckoId: 'usd-coin',
        coinImageUrl: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        gasPriceStep: {
          low: 0,
          average: 0.025,
          high: 0.03
        }
      }
    ],
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: 'STAKE',
      coinMinimalDenom: 'ustake',
      coinImageUrl: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png'
    },
    chainSymbolImageUrl: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
    txExplorer: {
      name: 'Mintscan',
      txUrl: 'https://www.mintscan.io/noble/txs/{txHash}'
    }
  },
  {
    rpc: 'https://rpc-cosmos.oraidex.io',
    rest: 'https://lcd-cosmos.oraidex.io',
    chainId: 'cosmoshub-4',
    chainName: 'Cosmos Hub',
    networkType: 'cosmos',
    bip44: {
      coinType: 118
    },
    Icon: AtomIcon,
    IconLight: AtomIcon,
    bech32Config: defaultBech32Config('cosmos'),
    feeCurrencies: [AtomToken],
    currencies: [
      {
        coinDenom: 'ATOM',
        coinGeckoId: 'cosmos',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        bridgeTo: ['Oraichain'],
        Icon: AtomIcon,
        IconLight: AtomIcon
      }
    ]
  },

  /// evm chain info
  {
    rpc: 'https://rpc.ankr.com/eth',
    chainId: '0x01',
    chainName: 'Ethereum',
    bip44: {
      coinType: 60
    },
    Icon: EthIcon,
    networkType: 'evm',
    currencies: [
      {
        coinDenom: 'ORAI',
        coinMinimalDenom: 'erc20_orai',
        contractAddress: ORAI_ETH_CONTRACT,
        coinDecimals: 18,
        bridgeTo: ['Oraichain'],
        coinGeckoId: 'oraichain-token',
        IconLight: OraiLightIcon,
        prefixToken: ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX,
        Icon: OraiIcon
      },
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'erc20_usdc',
        contractAddress: USDC_ETH_CONTRACT,
        coinDecimals: 6,
        bridgeTo: ['Oraichain'],
        coinGeckoId: 'usd-coin',
        prefixToken: ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX,
        Icon: UsdcIcon
      },
      {
        coinDenom: 'WETH',
        coinMinimalDenom: 'erc20_eth',
        contractAddress: WRAP_ETH_CONTRACT,
        coinDecimals: 18,
        bridgeTo: ['Oraichain'],
        coinGeckoId: 'weth',
        prefixToken: ORAI_BRIDGE_EVM_ETH_DENOM_PREFIX,
        Icon: EthIcon
      },
      {
        coinDenom: 'ETH',
        coinMinimalDenom: 'eth',
        contractAddress: '',
        coinDecimals: 18,
        bridgeTo: ['Oraichain'],
        coinGeckoId: 'ethereum',
        Icon: EthIcon
      }
    ]
  },
  {
    rpc: 'https://api.trongrid.io/jsonrpc',
    rest: 'https://api.trongrid.io',
    chainId: '0x2b6653dc',
    networkType: 'evm',
    chainName: 'Tron Network',
    Icon: TronIcon,
    currencies: [
      {
        coinDenom: 'USDT',
        coinMinimalDenom: 'trx20_usdt',
        contractAddress: USDT_TRON_CONTRACT,
        bridgeTo: ['Oraichain'],
        coinDecimals: 6,
        coinGeckoId: 'tether',
        prefixToken: ORAI_BRIDGE_EVM_TRON_DENOM_PREFIX,
        Icon: UsdtIcon
      },
      {
        coinDenom: 'wTRX',
        coinMinimalDenom: 'trx20_trx',
        contractAddress: WRAP_TRON_TRX_CONTRACT,
        bridgeTo: ['Oraichain'],
        coinDecimals: 6,
        coinGeckoId: 'tron',
        prefixToken: ORAI_BRIDGE_EVM_TRON_DENOM_PREFIX,
        Icon: TronIcon
      }
    ],
    bip44: {
      coinType: 195
    }
  },
  {
    rpc: 'https://bsc-dataseed1.binance.org',
    networkType: 'evm',
    Icon: BnbIcon,
    chainId: '0x38',
    chainName: 'BNB Chain',
    bip44: {
      coinType: 60
    },
    currencies: [
      {
        coinDenom: 'ORAI',
        coinMinimalDenom: 'bep20_orai',
        contractAddress: ORAI_BSC_CONTRACT,
        bridgeTo: ['Oraichain'],
        coinDecimals: 18,
        coinGeckoId: 'oraichain-token',
        prefixToken: ORAI_BRIDGE_EVM_DENOM_PREFIX,
        Icon: OraiIcon,
        IconLight: OraiLightIcon
      },
      {
        coinDenom: 'AIRI',
        coinMinimalDenom: 'bep20_airi',
        contractAddress: AIRI_BSC_CONTRACT,
        bridgeTo: ['Oraichain'],
        coinDecimals: 18,
        coinGeckoId: 'airight',
        prefixToken: ORAI_BRIDGE_EVM_DENOM_PREFIX,
        Icon: AiriIcon
      },
      {
        coinDenom: 'USDT',
        coinMinimalDenom: 'bep20_usdt',
        contractAddress: USDT_BSC_CONTRACT,
        bridgeTo: ['Oraichain'],
        coinDecimals: 18,
        coinGeckoId: 'tether',
        prefixToken: ORAI_BRIDGE_EVM_DENOM_PREFIX,
        Icon: UsdtIcon
      },
      {
        coinDenom: 'KWT',
        coinMinimalDenom: 'bep20_kwt',
        contractAddress: KWT_BSC_CONTRACT,
        bridgeTo: ['Oraichain'],
        coinDecimals: 18,
        coinGeckoId: 'kawaii-islands',
        Icon: KwtIcon
      },
      {
        coinDenom: 'MILKY',
        coinMinimalDenom: 'bep20_milky',
        contractAddress: MILKY_BSC_CONTRACT,
        coinDecimals: 18,
        coinGeckoId: 'milky-token',
        bridgeTo: ['Oraichain'],
        Icon: MilkyIcon
      },
      {
        coinDenom: 'WBNB',
        coinMinimalDenom: 'bep20_wbnb',
        contractAddress: WRAP_BNB_CONTRACT,
        coinDecimals: 18,
        coinGeckoId: 'wbnb',
        bridgeTo: ['Oraichain'],
        Icon: BnbIcon
      },
      {
        coinDenom: 'BNB',
        coinMinimalDenom: 'bnb',
        contractAddress: '',
        coinDecimals: 18,
        coinGeckoId: 'binancecoin',
        bridgeTo: ['Oraichain'],
        Icon: BnbIcon
      }
    ]
  },
  {
    rpc: 'https://endpoint1.kawaii.global',
    chainId: '0x1ae6',
    networkType: 'evm',
    chainName: 'Kawaiiverse EVM',
    Icon: KwtIcon,
    bip44: {
      coinType: 60
    },
    currencies: [
      {
        coinDenom: 'ERC20 MILKY',
        coinMinimalDenom: 'erc20_milky',
        bridgeTo: ['Oraichain', 'kawaii_6886-1'],
        contractAddress: MILKY_ERC_CONTRACT,
        coinDecimals: 18,
        coinGeckoId: 'milky-token',
        Icon: MilkyIcon
      },
      {
        coinDenom: 'ERC20 KWT',
        bridgeTo: ['Oraichain', 'kawaii_6886-1'],
        coinMinimalDenom: 'erc20_kwt',
        contractAddress: '0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd',
        coinDecimals: 18,
        coinGeckoId: 'kawaii-islands',
        Icon: KwtIcon
      }
    ]
  }
];

// exclude kawaiverse subnet and other special evm that has different cointype
export const evmChains = chainInfos.filter(
  (c) => c.networkType === 'evm' && c.bip44.coinType === 60 && c.chainId !== '0x1ae6'
);

export const btcChains = chainInfos.filter((c) => c.networkType === ('bitcoin' as any));
