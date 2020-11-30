import React from 'react';
import styled from 'styled-components/native'

const Header = styled.SafeAreaView`
    height: 60px;
    width:60px;
    background-color: #ccc;
    justify-content: center;
    align-items: center;
`
const HeaderText = styled.Text`

`

export default () =>{
    return(
        <Header>
            <HeaderText>
                Texto Qualquer
            </HeaderText>
        </Header>
    )
}