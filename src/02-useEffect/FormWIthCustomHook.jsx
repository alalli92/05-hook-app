import { useState, useEffect } from 'react';
import { useForm} from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onInputChange,onResetForm,username,email,password } = useForm({
        username: '',
        email: '',
        password: ''
    });
   
   
    useEffect(() => {
    }, [formState]);


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="text"
                className="form-control mt-3"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}

            />
            <button onClick = {onResetForm} className = "btn btn-primary mt2">Borrar</button>
        </>

    )
}
