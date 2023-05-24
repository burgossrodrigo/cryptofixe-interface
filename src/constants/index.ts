import { ethers } from "ethers"

export const stakingAddress = '0x760ba221003D609C1D72c3e0A2861865bfD4D08B'
export const fixeAddress = '0x7cD03Fb340aC0638B41aA3aE22f467f008dAf3Ee'
export const arbitrumProvider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/L54zAOu4OqTo3k4ZIFvSI83n11TzBTfR')
export const wssArbitrumProvider = new ethers.WebSocketProvider('wss://eth-sepolia.g.alchemy.com/v2/L54zAOu4OqTo3k4ZIFvSI83n11TzBTfR')