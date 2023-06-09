import React from 'react'

import { ConnectionType, getConnection, tryActivateConnector, tryDeactivateConnector } from './connections'
import { Button } from '@mui/material'

export const Option = ({
  isEnabled,
  isConnected,
  connectionType,
  onActivate,
  onDeactivate,
}: {
  isEnabled: boolean
  isConnected: boolean
  connectionType: ConnectionType
  onActivate: (connectionType: ConnectionType) => void
  onDeactivate: (connectionType: null) => void
}) => {
  const onClick = async () => {
    if (isConnected) {
      const deactivation = await tryDeactivateConnector(getConnection(connectionType).connector)
      // undefined means the deactivation failed
      if (deactivation === undefined) {
        return
      }
      onDeactivate(deactivation)
      return
    }

    const activation = await tryActivateConnector(getConnection(connectionType).connector)
    if (!activation) {
      return
    }
    onActivate(activation)
    return
  }

  return (
    <div>
      <Button variant='contained' onClick={onClick} disabled={!isEnabled}>{`${
        isConnected ? 'Disconnect' : 'Connect'
      } ${connectionType}`}</Button>
    </div>
  )
}