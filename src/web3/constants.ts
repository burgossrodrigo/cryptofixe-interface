import { CurrentConfig } from './config'

// Chains
const SEPOLIA_CHAIN_ID = 11155111 

export const INPUT_CHAIN_ID = SEPOLIA_CHAIN_ID
export const INPUT_CHAIN_URL = CurrentConfig.rpc.sepolia

export const CHAIN_TO_URL_MAP = {
  [SEPOLIA_CHAIN_ID]: CurrentConfig.rpc.sepolia,
}

type ChainInfo = {
  explorer: string
  label: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: 18
  }
  rpcUrl: string
}

export const CHAIN_INFO: { [key: string]: ChainInfo } = {
  [SEPOLIA_CHAIN_ID]: {
    explorer: 'https://sepolia.etherscan.io/',
    label: 'Sepolia',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: CurrentConfig.rpc.sepolia,
  }
}

// URLs
export const METAMASK_URL = 'https://metamask.io/'