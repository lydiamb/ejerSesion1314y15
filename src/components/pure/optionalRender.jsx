import React, { useState } from 'react';

//Login logout buttons
//estilo para usuario logeado
let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
};


const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
};

const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}


// ? (expresion true) && expresion => se renderiza la expresion
// ? (expresion false) && expresion => no se renderiza la expresion


const OptionalRender = () => {


    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    /*
    const updateAccess = () => {
        setAccess(!access);
    }*/

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    // Unread messages
    let addMessages = () =>{
        setNMessages(nMessages + 1)
    }


    let optionalButton;

    /*
    if(access){
        optionalButton = <button onClick={updateAccess}>Logout</button>
    }else{
        optionalButton = <button onClick={updateAccess}>Login</button>
    }*/

    if(access){      
        optionalButton = <LogoutButton propStyle={ unloggedStyle  } logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}></LoginButton>
    }

    return (
        <div>
        {/*Optinal Button */}
        
            { optionalButton }
     
        {/* N Messages unread */}
        {access ? (<div>
            { nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p>}
            { nMessages > 0 && nMessages !== 1 && <p>You have {nMessages} new messages...</p>}
            { nMessages === 0 && <p>There are no new {nMessages}</p>}
            <button onClick={addMessages}> Add new messages</button> 
        </div>): null}


        {/* Ternary operator */}
        {/*
        { nMessages > 0 && nMessages === 1 ? 
            <p>You have {nMessages} new message...</p> :
            <p>There are no new {nMessages}</p>
        }
        */}
        </div>
    );
}

export default OptionalRender;
