import React, { useState } from 'react'
import { useForm } from "react-hook-form";

function CrearUsuarioRHF() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
    <>
        <h1>Crear Usuario</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="inputUsername" className="form-label">Username</label>
                <input type="text"
                {...register("username", {
                    required: true,
                    minLength: 6,
                    maxLength: 25,
                    pattern: /^[a-zA-Z\-]+$/,
                })}
                className="form-control" id="inputUsername" aria-describedby="emailHelp"/>
                {errors.username && errors.username.type === "required" && <span>Campo requerido</span>}
                {errors.username && errors.username.type === "minLength" && <span>Debe tener al menos 6 caracteres</span>}
                {errors.username && errors.username.type === "maxLength" && <span>Debe tener menos de 26 caracteres</span>}
                {errors.username && errors.username.type === "pattern" && <span>Campo invalido</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="text"
                {...register("email", {
                    required: true
                })}
                className="form-control" id="inputEmail"/>
                {errors.email && <span>Problema con el email</span>}
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </>
    )
}

export default CrearUsuarioRHF