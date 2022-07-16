import styled from 'styled-components';
import PropTypes from "prop-types";
import {useState} from "react";
import {useDispatch} from "react-redux";
import deleteItem from './store/actions/del.js';
import editItem from "./store/actions/edit";

const Con = styled.div`
  position: fixed;
  height: 50vh;
  background-color: lightsteelblue;
  bottom: ${props => props.styles.bottom};
  transition: bottom 1s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    height: 3rem;
    min-width: 7rem;
    background-color: indigo;
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

  .delete {
    background-color: red;
  }

  p, input {
    color: black;
    font-size: 2rem;
    @media (max-width: 375px) {
      font-size: 1.5rem;
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
        <Con styles={props.allStyles}>
            {!editMode ?
                <>
                    <p>Name: {props.selected.name}</p>
                    <p>Number: {props.selected.number}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </>
                :
                <>
                    <p>Edit Details Below:</p>
                    <input onChange={e => setName(e.target.value)} defaultValue={props.selected.name}/>
                    <br/>
                    <input onChange={e => setPhone(e.target.value)} defaultValue={props.selected.number}/>
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
    allStyles: PropTypes.object.isRequired,
}

export default Edit;