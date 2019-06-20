import React from 'react'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Tabs, TabsRouteView } from './components/Tabs'
import StatusBar from 'components/StatusBar'
import styled from 'styled-components'

const EStop = () => {
  return <div>EStop</div>
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: auto;
`

const View = styled.div`
  overflow: auto;
  display: grid;
  grid-template-areas:
    'v e'
    's e';
  grid-template-columns: auto 70px;
  grid-template-rows: auto 20px;
`

const StatusBarArea = styled.div`
  grid-area: s;
`

const RightSidebarArea = styled.div`
  grid-area: e;
`

const RouteViewArea = styled.div`
  grid-area: v;
`

const App: React.FC = () => {
  return (
    <Router>
      <Grid>
        <Tabs />
        <View>
          <RouteViewArea>
            <TabsRouteView />
          </RouteViewArea>
          <StatusBarArea>
            <StatusBar />
          </StatusBarArea>
          <RightSidebarArea>
            <EStop />
          </RightSidebarArea>
        </View>
      </Grid>
    </Router>
  )
}

export default App
