import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Cabecera";
import Form from './components/Form/Formulario';
import AddOrg from './components/addOrg';
import Teams from './components/Teams';
import Footer from './components/footer';

function App() {
  const [mostrarForm,actualizarForm] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState ([{
    team:"Programación",
    foto:"https://github.com/MdDaniel1.png",
    name: "Daniel",
    position:"Estudiante"
  },{
    team:"Front End",
    foto:"https://github.com/MdDaniel1.png",
    name: "Daniel",
    position:"Estudiante"
  },
  {
    team:"Programación",
    foto:"https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    position:"Desarrolladora de software e instructor"
  },
  {
    team:"Programación",
    foto:"https://github.com/genesysrm.png",
    name: "Genesys Rondón",
    position:"Desarrolladora de software e instructora"
  },
  {
    team:"Data Science",
    foto:"https://github.com/genesysrm.png",
    name: "Genesys Rondón",
    position:"Desarrolladora de software e instructora"
  },
  {
    team:"Data Science",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    position:"Instructora en Alura Latam"
  },
  {
    team:"Innovación y Gestión",
    foto:"https://github.com/christianpva.png",
    name: "Christian Velasco",
    position:"Head de Alura e instructor"
  },



  ])
  
  const cambiarForm = () =>{
    actualizarForm(!mostrarForm)
  }

  const registrarColaborador = (colaborador) => {
    console.log("nuevo cola" , colaborador)
    actualizarColaboradores([...colaboradores,colaborador])
  }


  const teams = [
    {
      title: "Programación",
      primaryColor: "#57C278 ",
      secondColor: "#D9F7E9"

    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      secondColor: "#E8F8FF"

    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondColor: "#F0F8E2"

    },
    {
      title: "Devops",
      primaryColor: "#E06B69",
      secondColor: "#FDE7E8"

    },
    {
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondColor: "#FAE9F5"

    },
    {
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondColor: "#FFF5D9"

    }, 
    {
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondColor: "#FFEEDF"

    }
  ]


  return (
    <div className="App">
      <Header/>

      {mostrarForm && <Form 
        teams ={teams.map((team) => team.title )}
        registrarColaborador= {registrarColaborador}
      /> }

      <AddOrg cambiarForm={cambiarForm}/>

      {teams.map((team)=> <Teams 
        datos={team} 
        key={team.title} 
        colaboradores={colaboradores.filter(colaborador=>colaborador.team === team.title)}
        /> 
        )}

      <Footer/>
    </div>
  );
}

export default App;
