import { useState } from 'react';
import {v4 as uuid} from "uuid";
import './App.css';
import Header from "./components/Header/Cabecera";
import Form from './components/Form/Formulario';
import AddOrg from './components/addOrg';
import Teams from './components/Teams';
import Footer from './components/footer';

function App() {
  const [mostrarForm,actualizarForm] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState ([{
    id: uuid(),
    team:"Programación",
    foto:"https://github.com/MdDaniel1.png",
    name: "Daniel",
    position:"Estudiante"
  },{
    id: uuid(),
    team:"Front End",
    foto:"https://github.com/MdDaniel1.png",
    name: "Daniel",
    position:"Estudiante"
  },
  {
    id: uuid(),
    team:"Programación",
    foto:"https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    position:"Desarrolladora de software e instructor"
  },
  {
    id: uuid(),
    team:"Programación",
    foto:"https://github.com/genesysrm.png",
    name: "Genesys Rondón",
    position:"Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    team:"Data Science",
    foto:"https://github.com/genesysrm.png",
    name: "Genesys Rondón",
    position:"Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    team:"Data Science",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    position:"Instructora en Alura Latam"
  },
  {
    id: uuid(),
    team:"Innovación y Gestión",
    foto:"https://github.com/christianpva.png",
    name: "Christian Velasco",
    position:"Head de Alura e instructor"
  },



  ])
  const [teams, actualizarEquipos] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278 ",
      secondColor: "#D9F7E9"

    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondColor: "#E8F8FF"

    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondColor: "#F0F8E2"

    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondColor: "#FDE7E8"

    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondColor: "#FAE9F5"

    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondColor: "#FFF5D9"

    }, 
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondColor: "#FFEEDF"

    }
  ])
  
  const cambiarForm = () =>{
    actualizarForm(!mostrarForm)
  }

  const registrarColaborador = (colaborador,) => {
    console.log("nuevo cola" , colaborador)
    actualizarColaboradores([...colaboradores,colaborador])
  }

  const eliminarColaborador = (id) =>{
    console.log("eliminar cola", id);  
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...teams, {...nuevoEquipo, id: uuid() }])
  }

  


  return (
    <div className="App">
      <Header/>

      {mostrarForm && <Form 
        teams ={teams.map((team) => team.title )}
        registrarColaborador= {registrarColaborador}
        crearEquipo={crearEquipo}
      /> }

      <AddOrg cambiarForm={cambiarForm}/>

      {teams.map((team)=> <Teams 
        datos={team} 
        key={team.title} 
        colaboradores={colaboradores.filter(colaborador=>colaborador.team === team.title)}
        eliminarColaborador={eliminarColaborador}
        /> 
        )}

      <Footer/>
    </div>
  );
}

export default App;
