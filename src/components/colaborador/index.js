import "./colaborador.css"

const Colaborador = (props) => {

    const {name, position, foto, team} = props.datos
    const {primaryColor} = props
    return <div className="colaborador" >
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