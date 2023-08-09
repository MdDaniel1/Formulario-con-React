import "./OptionLists.css"

const OptionLists = (props) =>{

   

    const manejarCambio = (e) => {
        props.updateTeam(e.target.value)
    }

    return <div className="option__list" >
        <label>Equipos</label>
        <select value={props.value} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.teams.map ((team, index) =><option key={index} value={team} >{team}</option>)}
        </select>
    </div>
}

export default OptionLists;