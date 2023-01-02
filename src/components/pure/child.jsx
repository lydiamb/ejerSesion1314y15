import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault(); //para que no recargue la página
        update(nameRef.current.value);
    }

    return (
        <div>
            <p onMouseOver={ () => console.log('On mouse over')}>
                Hello, {name}</p>
            <button onClick={ ()=> console.groupCollapsed('Botón 1 pulsado')}>
                Boton 1</button> 
            <button onClick={ pressButton }>
                Boton 2</button>
            <button onClick={ () => pressButtonParams('Hello')}>
                Boton 3</button>
            <button onClick={ () => send(messageRef.current.value)}>Send message</button>
            <input placeholder='send a text to your father'
                onFocus={() => console.log("input focus")}
                onChange={(e) => console.log("Input changed: ", e.target.value)}
                onCopy={() => console.log('Copied text from input')}
                ref = {messageRef}
                ></input>
            <div style={{marginTop: "20px"}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='new name'/>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
