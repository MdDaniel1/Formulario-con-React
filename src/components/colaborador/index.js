import "./colaborador.css"
import {IoCloseCircleOutline} from "react-icons/io5"
const Colaborador = (props) => {

    const {name, position, foto, team, id} = props.datos
    const {primaryColor,eliminarColaborador} = props
    return <div className="colaborador" >
            <IoCloseCircleOutline className="btn__eliminar" onClick={() => eliminarColaborador(id)}/>
            <div className="encabezado" style={{backgroundColor:primaryColor}} >
                <img src={foto} alt= {name}  />
            </div>

            <div className="info">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>


    </div>
}

export default Colaborador