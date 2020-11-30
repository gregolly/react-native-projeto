import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-community/async-storage'


const Page = styled.View`
    flex: 1;
`
const Input = styled.TextInput`
    font-size: 15px;
    border: 1px solid #000;
    height: 40px;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
`
const Save = styled.Button`

`
const NameArea = styled.View`
    padding: 20px;
    background: #ccc;
    width: 100%;
`
const Nome = styled.Text`
    font-size: 18px;
    color: #000;
`

export default () =>{

    const [nome, setNome] = useState('')
    const [novoNome, setNovoNome] = useState('')


    const handleSave = async () =>{
        if(novoNome != ''){
            await AsyncStorage.setItem('@nome', novoNome);
            setNome(novoNome)
            setNovoNome('')
        }
    }

    const getNome = async() =>{
        const n = await AsyncStorage.getItem('@nome')
        setNome(n)
    }

    useEffect(() =>{
        getNome()
    }, [])

    return(
        <Page>
            <Input 
                placeholder="Qual seu nome?" 
                value={novoNome} 
                onChangeText={e=>setNovoNome(e)} 
            />
            <Save title="Salvar" onPress={handleSave}/>

            <NameArea>
                <Nome>{nome}</Nome>
            </NameArea>
        </Page>
    )
}