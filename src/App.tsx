import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { Tabs, TabsRouteView } from './components/Tabs'

const StatusBar = (props: { className: string }) => {
  return (<div className={props.className}>Status bar</div>)
}

const EStop = () => {
  return <div>EStop</div>
}


const App: React.FC = () => {
  return (
    <Router>
      <div id="container">
        <Tabs />
        <div id="view">
          <TabsRouteView />
          <StatusBar className="status-bar" />
          <div className="right-sidebar">
            <EStop />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
