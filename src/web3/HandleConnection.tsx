import { useWeb3React } from '@web3-react/core'
import  { useEffect, useState } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

import { ConnectionOptions } from './ConnectionOptions'
import { ConnectionType, switchNetwork } from './connections'
import { CHAIN_INFO, INPUT_CHAIN_URL } from './constants'
import { Button, Typography } from '@mui/material'

const FallbackComponent = ({ error }: FallbackProps) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <p>Please reload the application</p>
    </div>
  )
}
// Listen for new blocks and update the wallet
const useOnBlockUpdated = (callback: (blockNumber: number) => void) => {
  const { provider } = useWeb3React()
  useEffect(() => {
    if (!provider) {
      return
    }
    const subscription = provider.on('block', callback)
    return () => {
      subscription.removeAllListeners()
    }
  })
}

const Example = () => {
  const { chainId, account, isActive } = useWeb3React()
  const [blockNumber, setBlockNumber] = useState<number>(0)
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(null)

  // Listen for new blocks and update the wallet
  useOnBlockUpdated((blockNumber: number) => {
    setBlockNumber(blockNumber)
  })

  return (
    <div className="App">
        <Typography variant='h5'>{isActive ? `Connected Account: ${account?.substring(0, 5) + "..." + account?.substring(account?.length - 4)}` : ''}</Typography>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        {INPUT_CHAIN_URL === '' && <h2 className="error">Please set your RPC URL in config.ts</h2>}
        <h3>{`Block Number: ${blockNumber + 1}`}</h3>
        <ConnectionOptions
          activeConnectionType={connectionType}
          isConnectionActive={isActive}
          onActivate={setConnectionType}
          onDeactivate={setConnectionType}
        />
        {Object.keys(CHAIN_INFO).map((chainId) => (
          <div key={chainId}>
            <Button variant='outlined' onClick={() => switchNetwork(parseInt(chainId), connectionType)}>
              {`Switch to ${CHAIN_INFO[chainId].label}`}
            </Button>
          </div>
        ))}
      </ErrorBoundary>
    </div>
  )
}

export default Example