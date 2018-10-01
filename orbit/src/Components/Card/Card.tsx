import * as React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    background-color: #90ECC1;
    border-radius: 14px;
    height: 150px;
    width: 250px;
    margin: 10px 5px 10px 5px;
`

class CardRaw extends React.Component{
    render(){
        return(

            <CardContainer>{this.props.children}</CardContainer>

        )
    }
}

export const Card = CardRaw