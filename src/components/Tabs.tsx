import React from 'react'
import { Route, Link } from "react-router-dom";
import styled from 'styled-components'
import './Tabs.scss'
import logo from '../assets/static/images/logo.png'

const Tab = (props: { label: string, to: string, activeOnlyWhenExact?: boolean }) => {
    return (
        <Route
            path={props.to}
            exact={props.activeOnlyWhenExact}
            children={({ match }) => (
                <li className={match ? "is-active" : ""}>
                    <Link to={props.to}>{props.label}</Link>
                </li>
            )}
        />
    );
}

const LogoCapra = styled.div`
    border-bottom: 1px solid white;
    padding-top: 3px;
    padding-right: 3px;
`

const TabsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 120px;
`

const ToBeNamed = styled.div`
    margin-bottom: 0px !important;
`

export const Tabs = () => {
    return (
        <TabsWrapper>
            <ToBeNamed className="tabs">
                <ul>
                    <Tab to="/teleop" label="Teleop"></Tab>
                    <Tab to="/victim" label="Victim"></Tab>
                    <Tab to="/config" label="Config"></Tab>
                </ul>
            </ToBeNamed>
            <LogoCapra>
                <img src={logo} alt="capra logo" />
            </LogoCapra>
        </TabsWrapper>
    )
}

export const TabsRouteView = () => {
    return <>
        <Route path="/teleop" component={() => <div>Teleop</div>} />
        <Route path="/victim" component={() => <div>Victim</div>} />
        <Route path="/config" component={() => <div>Config</div>} />
    </>
}
