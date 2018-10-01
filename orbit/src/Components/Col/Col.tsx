import * as React from 'react'
import styled from 'styled-components'

const ColStyle = styled.div`
    margin: 20px 20px;
    width: 300px;
    height: 100%;
    align-content: center;
    align-items: center;
`

export const Col = (props :any) => {
    return(
        <ColStyle>
            {props.children}
        </ColStyle>
    )
}