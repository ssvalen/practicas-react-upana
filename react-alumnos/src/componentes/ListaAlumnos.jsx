function ListaAlumnos(
    { 
        alumnos, 
        onEliminar, 
        onModificar 

    }) {
    return (
        <div className="lista">
            <h2>Alumnos Registrados</h2>
            <ul>
                {
                    alumnos.length === 0 ? (<p>No hay alumnos registrados.</p>)
                        : (
                            <ul>
                                {
                                    alumnos.map((alumno, i) => (
                                        <li key={alumno.id}>
                                            <span><strong>Id alumno: </strong> {alumno.id}</span>
                                            <span><strong>Nombre: </strong> {alumno.nombre}</span>
                                            <span><strong>Apellidos: </strong> {alumno.apellido}</span>
                                            <span><strong>Edad: </strong> {alumno.edad}</span>
                                            <span><strong>Correo electronico: </strong> {alumno.correo}</span>

                                            <button
                                                className="btn-borrar"
                                                onClick={() => onEliminar(alumno.id)}>
                                                Eliminar
                                            </button>

                                            <button
                                                className="btn-modificar"
                                                onClick={() => onModificar(alumno)}>
                                                Modificar
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                }
            </ul>
        </div>
    )
}

export default ListaAlumnos;