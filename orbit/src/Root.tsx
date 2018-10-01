import * as React from 'react'
import styled from 'styled-components'
import { Card } from './Components/Card'
import { Col } from './Components/Col'
import { Row } from './Components/Row'

const RootContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`





export default class Root extends React.Component {
    
    render(){
        const col = [0,0,0]
        const row = [0,0]
        return(
            <RootContainer>
                {col.map(() => (
                    <Col>
                        {row.map(() => (
                            <Row>
                                <Card>
                                    Hola Mundo
                                </Card>
                            </Row>
                        ))}
                    </Col>
                ))}
            </RootContainer>
        )
    }
}