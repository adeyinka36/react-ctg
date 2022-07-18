import List from './List';
import Edit from './Edit';
import {useState} from "react";
import {useSelector} from "react-redux";

const App = () => {
    const [selected, setSelected] = useState({})
    const numbers  = useSelector(state => state);

    return (
        <>
            <List numbers={numbers} setSelected={setSelected} selected={selected}/>
            <Edit clickedColor={{bottom: Object.keys(selected).length ? '0': '-100%'}} selected={selected} setSelected={setSelected}/>
        </>
    );
};

export default App;
