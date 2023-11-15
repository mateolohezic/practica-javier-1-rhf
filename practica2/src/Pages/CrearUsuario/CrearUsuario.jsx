import React, { useState } from 'react'
import './crearUsuario.css'

function CrearUsuario() {

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setErrorUsername(false)
        setErrorEmail(false)
        const username = document.getElementById('inputUsername')

        if (username.value === ""){
            setErrorUsername(true)
            return
        }
        const email = document.getElementById('inputEmail')
        
        if (email.value === ""){
            setErrorEmail(true)
            return
        }
        console.log('Username:', username.value);
        console.log('Email:', email.value);
        console.log('enviado');
    }

    return (
    <>
        <h1>Crear Usuario</h1>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="inputUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp"/>
                { errorUsername && <p>Usuario incompleto</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="text" className="form-control" id="inputEmail"/>
                { errorEmail && <p>Correo incompleto</p>}
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </>
    )
}

export default CrearUsuario