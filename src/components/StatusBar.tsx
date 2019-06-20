import React, { useState } from 'react'
import styled from 'styled-components'
import useInterval from 'utils/hooks/useInterval'
import NetworkInfo from 'components/NetworkInfo'

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  )

  useInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString())
  }, 1000)

  return <div>{currentTime}</div>
}

const StatusBar = () => {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const paddingOffset = 0.5

  const rosStatus = () => {
    if (isConnecting) return 'trying to connect to : ' + 'ROBOTIP'
    else if (isConnected) return 'connected to ' + 'URL'
    return 'disconnected'
  }

  const backgroundColour = () => {
    if (isConnecting) return 'has-background-warning has-text-black'
    return isConnected ? 'has-background-success' : 'has-background-danger'
  }

  const Wrapper = styled.div`
    height: 100%;
    font-size: 0.75em;
    background-color: purple;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-left: ${paddingOffset}%;
    padding-right: ${paddingOffset}%;
  `
  return (
    <Wrapper className={backgroundColour()}>
      <div>{rosStatus()}</div>
      <div></div>
      <div>
        <NetworkInfo />
      </div>
      <div>
        <CurrentTime />
      </div>
    </Wrapper>
  )
}

export default StatusBar
