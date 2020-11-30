import React, { useState }from 'react';
import {Text, View, Button} from 'react-native'
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Input = styled.TextInput`
  height: 40px;
  width: 200px;
  border: 1px solid #212121;
`

const Quadrado = styled.View`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 3px dashed #212121;
  margin-top: 30px;
`

const Hello = () =>{

  const [ name, setName ] = useState('Greg');
  const [mostrar, setMostrar] = useState(false);

  // function mudarTexto(el){
  //   setName(el);
  // }

  const handleClick = () =>{
    setMostrar(!mostrar)
  }
  return (
    <View>
      <Input value={name} onChangeText={el=>{setName(el)}} />

      <Button title={mostrar ? 'Ocultar Nome' : 'Mostrar Nome'} onPress={handleClick} />

      {mostrar &&
        <Quadrado>
          <Text>Seu nome é:</Text>
          <Text>{name}</Text>
        </Quadrado>
      }
    </View>  
  );
}

export default () =>{
  return (
    <Page>
      <Hello frase="Seja bem vindo" />
    </Page>
  );
}

const Page = styled.SafeAreaView`
    flex: 1;
    display: flex;
    margin: auto;
    width: 300px;  
`
const HeaderText = styled.Text`
    font-size: 25px;
`
const Input = styled.TextInput`
    width: 100%
    height: 50px;
    font-size: 18px;
    background-color: #212121;
    color: #fff;
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
`

const CalcButton = styled.Button`
    margin-top: 30px;
`
const ResultArea = styled.View`
    width: 100%;
    margin-top: 30px;
    background-color: brown;
    padding: 20px;
    justify-content: center;
    align-items: center;
`
const ResultItemTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`
const ResultItem = styled.Text`
    font-size: 15px;
    color: #f7f7f7;
    margin-bottom: 30px;
`
const PctArea = styled.View`
    flex-direction: row;
    justify-content: center;
    margin: 20px;
`
const PctItem = styled.Button`

`

export default () =>{
    const [bill, setBill] = useState("")
    const [tip, setTip] = useState(0)
    const [pct, setPct] = useState(10)


    const calc = () =>{
        let nBill = parseFloat(bill)
        if(nBill){
            setTip((pct/100) * nBill)
        }
    }

    useEffect(()=>{
        calc()
    }, [pct,bill])

    return (
      <Page>
        <HeaderText>
            Calculadora de Gorjetas
        </HeaderText>
        <Input
            placeholder="Quanto deu a conta?"
            placeholderTextColor="#fff"
            keyboardType="numeric"
            value={bill}
            onChangeText={e=>setBill(e)}
        />
        <PctArea>
            <PctItem title="5%" onPress={()=>setPct(5)}/>
            <PctItem title="10%" onPress={()=>setPct(10)}/>
            <PctItem title="15%" onPress={()=>setPct(15)}/>
            <PctItem title="20%" onPress={()=>setPct(20)}/>
        </PctArea>
        {/* <CalcButton title={`Calcular ${pct}%`} onPress={calc} /> */}

        {tip > 0 &&
        <ResultArea>
            <ResultItemTitle>Valor da conta</ResultItemTitle>
            <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>
        <ResultItemTitle>Valor da Gorjeta({pct}%)</ResultItemTitle>
            <ResultItem>R$ {tip.toFixed(2)}</ResultItem>
            <ResultItemTitle>Valor da Total</ResultItemTitle>
            <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
        }
      </Page>
    );
  }


  import React, { useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import { Platform } from 'react-native'
import styled from 'styled-components/native';


const Page = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const KeyBoardArea = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    background-color: ${Platform.OS=='ios'?'#0ff00':'#0000ff'};
    justify-content: center;
    align-items: center;
`

const Logo = styled.View`
    width: 100px;
    height: 100px;
    background-color: #212121;
    margin-bottom: 20px;
`

const Input = styled.TextInput`
    width: 300px;
    height: 50px;
    border: 3px solid #212121;
`
export default () =>{
    return (
        <Page>
            <KeyBoardArea behavior={Platform.OS=='ios'?'padding':null}>
                <Logo/>
                <Input/>
            </KeyBoardArea>
        </Page>
    )
}
  


<Page>
            <Image 
                //source={require('./src/images/logo.png')}
                source={{uri:'https://www.google.com.br/google.jpg'}}
                style={{width: 200, height: 100}} 
                resizeMode="contain"
                defaultSource={require('./src/images/placeholder.png')}
                onLoadStart={()=>setStatus('Carregando...')}
                onLoad={()=>setStatus('Carregou')}
                onError={(e)=>setStatus(e.nativeEvent.error)}
                //onProgress={(e)=>e.nativeEvent.loaded}
            />
            <Text>{status}</Text>
        </Page>