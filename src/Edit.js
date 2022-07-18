import styled from 'styled-components';
import PropTypes from "prop-types";
import {useState} from "react";
import {useDispatch} from "react-redux";
import deleteItem from './store/actions/del.js';
import editItem from "./store/actions/edit";
import {flexLayout, buttonStyles} from "./sass/mixins";

const Con = styled.div`
  position: fixed;
  height: 50vh;
  background-color: lightsteelblue;
  bottom: ${props => props.styles.bottom};
  transition: bottom 1s ease-out;
  ${flexLayout('column')}
  width: 100%;

  button {
    ${buttonStyles()}
    background-color: indigo;

    &:hover {
      background-color: darkmagenta;
      cursor: pointer;
    }
  }

  .delete {
    background-color: red;
  }

  p, input {
    color: black;
    font-size: 2rem;
    @media (max-width: 375px) {
      font-size: 1.5rem;
      max-width: 200px;
    }

  }
`
const Edit = props => {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();

    const submit = () => {
        if (!name || !phone) {
            alert("Please fill name and number fields")
            return;
        }
        if(isNaN(Number(phone))) {
            alert('Please enter numeric value for number');
            return
        }
        let edited = {
            name,
            number: phone,
            id: props.selected.id,
        }
        dispatch(editItem(edited))
        props.setSelected({})
    }
    const del = () => {
        dispatch(deleteItem(props.selected))
        props.setSelected({})
    }
    const close = () => {
        setEditMode(false)
        props.setSelected({})
    }
    return (
        <Con styles={props.clickedColor}>
            {!editMode ?
                <>
                    <p>Name: {props.selected.name}</p>
                    <p>Number: {props.selected.number}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </>
                :
                <>
                    <p>Edit Details Below:</p>
                    <input onChange={e => setName(e.target.value)} placeholder={props.selected.name}/>
                    <br/>
                    <input onChange={e => setPhone(e.target.value)} placeholder={props.selected.number}/>
                    <button onClick={submit}>Submit</button>
                    <button onClick={del} className="delete">Remove</button>
                </>
            }
            <button onClick={close}>Cancel</button>
        </Con>
    )
}

Edit.propTypes = {
    selected: PropTypes.object.isRequired,
    setSelected: PropTypes.func.isRequired,
    clickedColor: PropTypes.object.isRequired,
}

export default Edit;