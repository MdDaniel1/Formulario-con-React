import "./teams.css"
import Colaborador from "../colaborador"



const Teams = (props) => {

    const {primaryColor, secondColor, title} = props.datos
    const {colaboradores, eliminarColaborador} = props
    
    const fondo = {
        backgroundColor: secondColor
    }

    const bordeTitulo = {
        borderColor:primaryColor
    }

    return <> 
    { 
        colaboradores.length > 0 &&
        <section className="equipo" style={fondo}>
            <h3 style={bordeTitulo}>{title}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador,index) => <Colaborador  
                    datos = {colaborador} 
                    key={index} 
                    primaryColor={primaryColor}
                    eliminarColaborador={eliminarColaborador}
                    />  )
                }
            </div>
        </section>
    }
    </>
}

export default Teams;