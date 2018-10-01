import * as React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    background-color: #90ECC1;
    border-radius: 14px;
    min-height: 100px;
    max-width: 250px;
`

class CardRaw extends React.Component{
    render(){
        return(

            <CardContainer>{this.props.children}</CardContainer>

        )
    }
}

export const Card = CardRaw