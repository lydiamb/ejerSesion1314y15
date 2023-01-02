import React, { useState } from 'react';
import Child from '../pure/child'

const Father = () => {

    const [name, setName] = useState('Lydia');

    function showMessage(text){
        alert(`Message received: ${text}`);
    }

    function updateName(newName){
        setName(newName)
    }
    return (
        <div>
            <p>Father component</p>
            <Child name={"lydia"} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
