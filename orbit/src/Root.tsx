import * as React from 'react'
import styled from 'styled-components'
import { Card } from './Components/Card'
const RootContainer = styled.div`
    margin: 0px;
    padding: 0px;
    font-family: 'Mali', cursive;
    background-color: #5BA4CF;
    height: 100vh;
    

`

export default class Root extends React.Component {
    render(){
        return(
            <RootContainer>
                <Card>Nueva tarejta</Card>
            </RootContainer>
        )
    }
}