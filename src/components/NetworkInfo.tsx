import React, { useState } from 'react'
import Icon from '@material-ui/core/Icon'
import useInterval from 'utils/hooks/useInterval'

const NetworkInfo = () => {
  //@ts-ignore
  const { connection } = navigator

  const [networkRTT, setNetworkRTT] = useState(connection.rtt)
  const [connectionType, setConnectionType] = useState(connection.type)
  const [connectionEffectiveType, setConnectionEffectiveType] = useState(
    connection.effectiveType
  )

  useInterval(() => {
    //@ts-ignore
    const { connection } = navigator

    setNetworkRTT(connection.rtt)
    setConnectionType(connection.type)
    setConnectionEffectiveType(connection.effectiveType)
  }, 1000)

  const networkIcon = () => {
    switch (connectionType) {
      case 'bluetooth':
        switch (connectionEffectiveType) {
          case 'slow-2g':
          case '2g':
          case '3g':
          case '4g':
            return 'bluetooth_connected'
          default:
            return 'bluetooth_disabled'
        }
      case 'cellular':
        switch (connectionEffectiveType) {
          case 'slow-2g':
            return 'signal_cellular_1_bar'
          case '2g':
            return 'signal_cellular_2_bar'
          case '3g':
            return 'signal_cellular_3_bar'
          case '4g':
            return 'signal_cellular_4_bar'
          default:
            return 'signal_cellular_off'
        }
      case 'ethernet':
        return 'settings_ethernet'
      case 'wifi':
      default:
        switch (connectionEffectiveType) {
          case 'slow-2g':
            return 'signal_wifi_1_bar'
          case '2g':
            return 'signal_wifi_2_bar'
          case '3g':
            return 'signal_wifi_3_bar'
          case '4g':
            return 'signal_wifi_4_bar'
          default:
            return 'signal_wifi_off'
        }
    }
  }

  return (
    <>
      {networkRTT}ms
      <Icon children={`${networkIcon()}`} style={{ fontSize: 16 }}></Icon>
    </>
  )
}

export default NetworkInfo
