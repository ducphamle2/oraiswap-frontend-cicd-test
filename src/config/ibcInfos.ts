import { IBCInfo } from 'types/ibc';
import {
  COSMOS_CHAIN_ID,
  IBC_TRANSFER_TIMEOUT,
  KWT_SUBNETWORK_CHAIN_ID,
  ORAI_BRIDGE_CHAIN_ID,
  OSMOSIS_CHAIN_ID
} from './constants';

export const [atom2oraichain, oraicbain2atom] = process.env.REACT_APP_ATOM_ORAICHAIN_CHANNELS.split(/\s+/);
const [osmosis2oraichain, oraicbain2osmosis] = process.env.REACT_APP_OSMOSIS_ORAICHAIN_CHANNELS.split(/\s+/);
export const [oraib2oraichain, oraichain2oraib] = process.env.REACT_APP_ORAIB_ORAICHAIN_CHANNELS.split(/\s+/);
const [oraib2oraichain_old, oraichain2oraib_old] = process.env.REACT_APP_ORAIB_ORAICHAIN_CHANNELS_OLD.split(/\s+/);
const [kwt2oraichain, oraichain2kwt] = process.env.REACT_APP_KWT_ORAICHAIN_CHANNELS.split(/\s+/);

export interface IBCInfoMap {
  [key: string]: { [key: string]: IBCInfo };
}

export const ibcInfos: IBCInfoMap = {
  [COSMOS_CHAIN_ID]: {
    Oraichain: {
      source: 'transfer',
      channel: atom2oraichain,
      timeout: IBC_TRANSFER_TIMEOUT
    }
  },
  [OSMOSIS_CHAIN_ID]: {
    Oraichain: {
      source: 'transfer',
      channel: osmosis2oraichain,
      timeout: IBC_TRANSFER_TIMEOUT
    }
  },
  [KWT_SUBNETWORK_CHAIN_ID]: {
    Oraichain: {
      source: 'transfer',
      channel: kwt2oraichain,
      timeout: IBC_TRANSFER_TIMEOUT
    }
  },
  Oraichain: {
    [COSMOS_CHAIN_ID]: {
      source: 'transfer',
      channel: oraicbain2atom,
      timeout: IBC_TRANSFER_TIMEOUT
    },
    [OSMOSIS_CHAIN_ID]: {
      source: 'transfer',
      channel: oraicbain2osmosis,
      timeout: IBC_TRANSFER_TIMEOUT
    },
    [ORAI_BRIDGE_CHAIN_ID]: {
      source: `wasm.${process.env.REACT_APP_IBC_WASM_CONTRACT}`,
      channel: oraichain2oraib,
      timeout: IBC_TRANSFER_TIMEOUT
    },
    [KWT_SUBNETWORK_CHAIN_ID]: {
      source: 'transfer',
      channel: oraichain2kwt,
      timeout: IBC_TRANSFER_TIMEOUT
    }
  },
  [ORAI_BRIDGE_CHAIN_ID]: {
    Oraichain: {
      source: 'transfer',
      channel: oraib2oraichain,
      timeout: IBC_TRANSFER_TIMEOUT
    }
  }
};

export const ibcInfosOld: IBCInfoMap = {
  Oraichain: {
    [ORAI_BRIDGE_CHAIN_ID]: {
      source: 'transfer',
      channel: oraichain2oraib_old,
      timeout: IBC_TRANSFER_TIMEOUT
    },
    [KWT_SUBNETWORK_CHAIN_ID]: {
      source: 'transfer',
      channel: oraichain2kwt,
      timeout: IBC_TRANSFER_TIMEOUT
    }
  },
  [ORAI_BRIDGE_CHAIN_ID]: {
    Oraichain: {
      source: 'transfer',
      channel: oraib2oraichain_old,
      timeout: IBC_TRANSFER_TIMEOUT
    }
  },
  [KWT_SUBNETWORK_CHAIN_ID]: {
    Oraichain: {
      source: 'transfer',
      channel: kwt2oraichain,
      timeout: IBC_TRANSFER_TIMEOUT
    }
  }
};
