import { ethers } from "ethers"

export const stakingAddress = '0x3a74dcc58D3237C894C87c7A9086d3705C26c23C'
export const fixeAddress = '0xaD225D6F0DE78B26485FF6590D3e456083cC4682'
export const arbitrumProvider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/L54zAOu4OqTo3k4ZIFvSI83n11TzBTfR')
export const wssArbitrumProvider = new ethers.WebSocketProvider('wss://eth-sepolia.g.alchemy.com/v2/L54zAOu4OqTo3k4ZIFvSI83n11TzBTfR')