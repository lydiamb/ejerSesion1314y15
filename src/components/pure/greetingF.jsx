import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //introduccion a useState - metodo hook
    const [age, setage] = useState(37);

    const birthday = () => {
        //metodo encargado de actualizar
        setage(age+1)
    }

    return (
        <div>
            <h1>HOLA {props.name}! desde componente funcional </h1>
           
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
