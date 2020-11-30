import React, { useState, useEffect } from 'react'
import { Modal, View } from 'react-native'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

const Page = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #393939;
`
const Botao = styled.Button`
    width: 90%;
    height: 40px;
    border: 2px solid #aaa;
    background-color: #393939;
`
export default () =>{

    const [statusBar, setStatusBar] = useState(false);

    return (
        <Page>
            <StatusBar 
                barStyle="dark-content" 
                backgroundColor="#eee"
                hidden={statusBar}
                animated={true}
            />
            <Botao title="Esconder" onPress={()=>setStatusBar(!statusBar)}/>
        </Page>
    )
}