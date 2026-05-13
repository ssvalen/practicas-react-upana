import Formulario from "./componentes/Formulario";
import "./App.css"
import ListaAlumnos from "./componentes/ListaAlumnos";
import { useEffect, useState } from "react";

function App() {
  const [alumnos, setAlumnos] = useState([])
  const [editar, setEditar] = useState()

  useEffect(() => {
    const datosGuardados = localStorage.getItem("alumnos")

    if (datosGuardados) {
      setAlumnos(JSON.parse(datosGuardados))
    }
  }, [])

  const guardarAlumno = (alumno) => {

    const nuevaLista = [...alumnos, alumno]
    setAlumnos(nuevaLista)

    localStorage.setItem("alumnos", JSON.stringify(nuevaLista))
  }

  const eliminarAlumno = (id) => {
    const nuevaLista = alumnos.filter(
      (alumno) => alumno.id !== id
    )
    setAlumnos(nuevaLista)
    localStorage.setItem("alumnos", JSON.stringify(nuevaLista))
  }

  const editarAlumno = (alumno) => {

    const nuevaLista = alumnos.map((a) =>
      a.id === alumno.id ? alumno : a
    )

    setAlumnos(nuevaLista)

    localStorage.setItem("alumnos", JSON.stringify(nuevaLista))

    setEditar()
  }

  return (
    <div className="contenedor">
      <h1>Registro de Alumnos</h1>

      <Formulario
        onGuardar={guardarAlumno}
        onEditar={editarAlumno}
        editar={editar}
      />

      <ListaAlumnos
        alumnos={alumnos}
        onEliminar={eliminarAlumno}
        onModificar={setEditar}
      />
    </div>
  )
}
export default App;