import * as React from 'react'
import styled from 'styled-components'

const RowStyle = styled.div`
    margin-top: 10px;
    margin-left: 5px;
    width: 100%;
    height: 150px;
`

export const Row = (props: any) => {
    return(
        <RowStyle>
            {props.children}
        </RowStyle>
    )
}
