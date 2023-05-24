import React from 'react'

import { ConnectionType, getHasMetaMaskExtensionInstalled } from './connections'
import { METAMASK_URL } from './constants'
import { Option } from './Options'
import { Button } from '@mui/material'
import styled from 'styled-components'

type ConnectOptionsParams = {
  activeConnectionType: ConnectionType | null
  isConnectionActive: boolean
  onActivate: (connectionType: ConnectionType) => void
  onDeactivate: (connectionType: null) => void
}

const StyledWalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`

export const ConnectionOptions = ({
  activeConnectionType,
  isConnectionActive,
  onActivate,
  onDeactivate,
}: ConnectOptionsParams) => {
  function getOptions(isActive: boolean) {
    const hasMetaMaskExtension = getHasMetaMaskExtensionInstalled()

    const isNoOptionActive = !isActive || (isActive && activeConnectionType === null)

    const metaMaskOption = hasMetaMaskExtension ? (
      <Option
        isEnabled={isNoOptionActive || activeConnectionType === ConnectionType.INJECTED}
        isConnected={activeConnectionType === ConnectionType.INJECTED}
        connectionType={ConnectionType.INJECTED}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    ) : (
      <a href={METAMASK_URL}>
        <Button>Install Metamask</Button>
      </a>
    )

    const coinbaseWalletOption = (
      <Option
        isEnabled={isNoOptionActive || activeConnectionType === ConnectionType.COINBASE_WALLET}
        isConnected={activeConnectionType === ConnectionType.COINBASE_WALLET}
        connectionType={ConnectionType.COINBASE_WALLET}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    )

    const walletConnectOption = (
      <Option
        isEnabled={isNoOptionActive || activeConnectionType === ConnectionType.WALLET_CONNECT}
        isConnected={activeConnectionType === ConnectionType.WALLET_CONNECT}
        connectionType={ConnectionType.WALLET_CONNECT}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    )

    return (
      <StyledWalletWrapper>
        {metaMaskOption}
        {coinbaseWalletOption}
        {walletConnectOption}
      </StyledWalletWrapper>
    )
  }

  return <div className="connectors">{getOptions(isConnectionActive)}</div>
}