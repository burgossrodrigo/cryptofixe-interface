// Sets if the example should run locally or on chain
export enum Chain {
    POLYGON,
    MAINNET,
  }
  
  // Inputs that configure this example to run
  interface ExampleConfig {
    chain: Chain
    rpc: {
      sepolia: string
    }
  }
  
  // Example Configuration
  export const CurrentConfig: ExampleConfig = {
    chain: Chain.MAINNET,
    rpc: {
      sepolia: 'https://eth-sepolia.g.alchemy.com/v2/L54zAOu4OqTo3k4ZIFvSI83n11TzBTfR',
    },
  }