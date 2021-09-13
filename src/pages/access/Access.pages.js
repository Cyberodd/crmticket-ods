import React, { useState }from 'react';
import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import "./Access.style.css";

export const Access = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');

    const handleOnChange = (e) =>{
        const {name, value} = e.target;

        switch(name){
            case 'email': 
            setEmail(value); 
            break;
            case 'password': 
            setPassword(value); 
            break;
            default:
                break;

        };
    };
    
    const handleOnSubmit = (e) =>{
        e.preventDefault()

        if(!email || !password){
         return alert("Kindly fill the form as indicated");
        }
        //TODO call API to submit form
        console.log(email, password);
    };

    const handleOnResetSubmit = (e) =>{
        e.preventDefault()

        if(!email){
         return alert("Kindly enter email");
        }
        //TODO call API to send email wih reset instructions
        console.log(email);
    };

    const formSwitcher = frmType =>{
        setFrmLoad(frmType);
    };
    
    return (
    <div className ="access-page bg-info">
        <Jumbotron className="form box">
            {frmLoad === 'login' && 
            <LoginForm 
            handleOnChange= {handleOnChange} 
            handleOnSubmit= {handleOnSubmit}
            formSwitcher= {formSwitcher}
            email = {email}
            pass = {password}/>}

            {frmLoad === 'reset' &&
            <ResetPassword 
            handleOnChange= {handleOnChange} 
            handleOnResetSubmit= {handleOnResetSubmit}
            formSwitcher= {formSwitcher}
            email = {email}/>}
        </Jumbotron>
    </div>);
};


