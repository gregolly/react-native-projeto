import React, { useState, useEffect } from 'react'
import { Modal, View } from 'react-native'
import styled from 'styled-components/native'

const Page = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const Box = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`

const BoxBody = styled.View`
    width: 90%;
    height: 200px;
    background-color: white;
    margin: auto;
`
const Botao = styled.Button`
    width: 90%;
    height: 50px;
    line-height: 30px;
    text-align: center;
    background-color: #bbb;
    color: #fff;
`
export default () =>{
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <Page>
            <Botao title="Abrir modal" onPress={()=>setModalVisible(true)}/>
                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={()=>setModalVisible(false)}
                >
                    <Box onPress={()=>setModalVisible(false)}>
                        <BoxBody>
                            <Botao title="Fechar" onPress={()=>setModalVisible(false)}/>
                        </BoxBody>
                    </Box>
                </Modal>
        </Page>
    )
}