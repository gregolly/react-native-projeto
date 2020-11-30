import React, { useState } from 'react'
import styled from 'styled-components/native'

const AddItemArea = styled.View`
    background-color: #ccc;
    padding: 10px;
`
const AddItemInput = styled.TextInput`
    background-color: #fff;
    font-size: 15px;
    height: 50px;
    border-radius: 5px;
    padding: 10px;
`

export default (props) => {

    const [item,setItem] = useState('')

    const handleSubmit = () =>{
        if(item.trim != ''){
            props.onAdd(item.trim())
            setItem('')
        }
        // if(item.trim() != ''){
        //     let items = [...props.items]
        //     items.push({
        //         id:uuidv4(),
        //         task:item.trim(),
        //         done:false
        //     })
        //     props.setItems(items)
        // }
        // setItem('')
    }


    return (
        <AddItemArea>
            <AddItemInput 
                placeholder="Digite um novo item" 
                value={item}
                onChangeText={e=>setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </AddItemArea>
    )
}