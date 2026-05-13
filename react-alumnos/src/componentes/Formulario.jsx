import { useEffect, useState } from "react";

function Formulario(
    { 
        onGuardar, 
        onEditar, 
        editar 

    }) {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [correo, setCorreo] = useState("");

    useEffect(() => {

        if (editar) {
            setNombre(editar.nombre)
            setApellido(editar.apellido)
            setEdad(editar.edad)
            setCorreo(editar.correo)
        }

    }, [editar])

    const manejarSubmit = (e) => {
        e.preventDefault()

        if (nombre.trim() === "" || edad.trim() === "" || apellido.trim() === "" || correo.trim() === "") {
            alert("Todos los campos son obligatorios");
            return
        }

        const nuevoAlumno = {
            id: editar ? editar.id : Date.now(),
            nombre,
            apellido,
            correo,
            edad
        }
        
        if (editar) {
            onEditar(nuevoAlumno)
        }

        else {
            onGuardar(nuevoAlumno)
        }

        setNombre("")
        setEdad("")
        setApellido("")
        setCorreo("")
    }

    return (
        <form className="formulario" onSubmit={manejarSubmit}>

            <label htmlFor="nombres">Ingrese sus nombres</label>
            <input
                id="nombres"
                type="text"
                placeholder="Nombres"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="apellidos">Apellidos del alumno</label>
            <input
                id="apellidos"
                type="text"
                placeholder="Ingrese sus apellidos"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <label htmlFor="correo">Correo electronico</label>
            <input 
                id="correo"
                type="text"
                placeholder="Ingrese su correo electronico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />

            <label htmlFor="edad">Edad alumno</label>
            <input
                id="edad"
                type="number"
                placeholder="Ingrese su edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />

            <button type="submit">{ editar ? "Aplicar cambios" : "Crear nuevo alumno" }</button>

        </form>
    )
}

export default Formulario;