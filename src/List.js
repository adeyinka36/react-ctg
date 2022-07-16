import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import add from './store/actions/add.js'
import {useDispatch} from "react-redux";
import {useState} from "react";

const Con = styled.div`
  text-align: center;

  .con {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: white;

    button {
      height: 3rem;
      min-width: 7rem;
      color: white;
      border-radius: 4px;
      box-shadow: none;
      margin: .5rem;
      border: 1px solid white;

      &:hover {
        background-color: darkmagenta;
        cursor: pointer;
      }
    }
  }

  .addition {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 300px;
    margin: 1rem auto;

    input, button {
      color: black;
      font-size: 2rem;
      @media (max-width: 375px) {
        font-size: 1.5rem;
      }
    }

    button {
      background-color: darkgray;
      border: none;
      border-radius: 4px;

      &:hover {
        cursor: pointer;
        background-color: lightskyblue;
      }
    }
  }
`
const List = ({numbers, setSelected, selected}) => {

    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const addItem = () => {
        if (!name || !phone) {
            alert("Please fill name and number fields")
            return;
        }
        dispatch(add({
            name,
            number: phone,
            id: Number(selected.id) + 1
        }))
    }

    return (

        <Con>
            <h3>Please select contact to view number</h3>
            <div className="con">
                {numbers.map(num => <button key={num.name}
                                            style={{backgroundColor: num.id === selected.id ? 'green' : 'indigo'}}
                                            onClick={() => setSelected(num)}>{num.name}</button>)}
            </div>
            {!Object.keys(selected).length ?
                <div className="addition">
                    <input onChange={e => setName(e.target.value)} placeholder="Name"/>
                    <input onChange={e => setPhone(e.target.value)} placeholder="Number"/>
                    <button onClick={addItem}>Add</button>
                </div>
                :
                null
            }
        </Con>
    );
};

List.propTypes = {
    numbers: PropTypes.array.isRequired,
}
export default List;
