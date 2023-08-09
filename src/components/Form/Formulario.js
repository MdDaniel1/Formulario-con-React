import { useState } from "react";
import "./Formulario.css"
import CampoText from "../campoTexto";
import OptionLists from "../OptionLists";
import Button from "../button";

const Form = (props) =>{

    const [name,updateName] = useState("")
    const [position,updatePosition] = useState("")
    const [foto,updateFoto] = useState("")
    const [team,updateTeam] = useState("")

    const {registrarColaborador} = props

    const crearEvento = (e) =>{
        e.preventDefault();
        let datosEnviados = {
            name,
            position,
            foto,
            team
        }
        registrarColaborador(datosEnviados);
    }

    return <section className="formulario" > 
            <form onSubmit={crearEvento} >
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoText
                    title="Nombre" 
                    placeholder="Ingresar nombre" 
                    required 
                    value={name}
                    updateValue={updateName}
                 />
                <CampoText 
                    title="Puesto" 
                    placeholder="Ingresar puesto" 
                    required
                    value={position}
                    updateValue={updatePosition}

                />
                <CampoText 
                    title="Foto" 
                    placeholder="Ingresar enlace de foto" 
                    required
                    value={foto}
                    updateValue={updateFoto}                
                />
                <OptionLists
                    value = {team}
                    updateTeam = {updateTeam}
                    teams = {props.teams}
                />
                <Button text="Crear"/>
            
            </form>
        
         </section>
}

export default Form;