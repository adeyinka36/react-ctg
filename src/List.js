import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import add from './store/actions/add.js'
import {useDispatch} from "react-redux";
import {useState} from "react";
import {flexLayout, buttonStyles} from "./sass/mixins";

const Con = styled.div`
  text-align: center;
  .con {
    ${flexLayout()}
    flex-wrap: wrap;
    width: 100%;
    background-color: white;
  
    button {
      ${buttonStyles()}
      &:hover {
        background-color: darkmagenta;
        cursor: pointer;
      }
    }
  }
  .addition{
    ${flexLayout('column')}
    width: 50%;
    width: 300px;
    margin: 1rem auto;
    @media (max-width: 375px) {
      width: 200px;
    }
    input,button {
      color: black;
      font-size: 2rem;
      margin-top: .5rem;
      width: 100%;
      @media (max-width: 375px) {
        font-size: 1.5rem;
      }
    }
    button{
      background-color: darkgray;
      border: none;
      border-radius: 4px;
      &:hover{
        cursor: pointer;
        background-color: lightskyblue;
      }
    }
    .add{
      padding: 1rem;
    }
  }
`
const List = ({numbers, setSelected, selected}) => {

    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const addItem = ()=>{
        if(!name || !phone){
            alert("Please fill name and number fields")
            return;
        }
        if(isNaN(Number(phone))) {
            alert('Please enter numeric value for number');
            return
        }
         dispatch(add({
             name,
             number: phone,
             id: Math.floor(1000 + Math.random() * 9000)
         }))
    }

    return (

        <Con>
            <h3>Please select contact to view number</h3>
            <div className="con">
                {numbers.map(num => <button key={num.name} style={{backgroundColor: num.id === selected.id ? 'green' : 'indigo'}} onClick={()=> setSelected(num)}>{num.name}</button>)}
            </div>
            { !Object.keys(selected).length ?
                <div className="addition">
                    <input onChange={ e=>setName(e.target.value)} placeholder="Name"/>
                    <input onChange={ e=>setPhone(e.target.value)} placeholder="Number"/>
                    <button className="add" onClick={addItem}>Add</button>
                </div>
                :
                null
            }
        </Con>
    );
};

List.propTypes = {
    numbers: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired,
    selected: PropTypes.object.isRequired,
}
export default List;
