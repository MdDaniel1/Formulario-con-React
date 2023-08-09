import "./campoTexto.css"

const CampoText = (props) =>{
    //const [valor,actualizarValor] = useState("")
    const placeholderModificado = `${props.placeholder}`

    const manejarCambio = (e) =>{
        props.updateValue(e.target.value)
    }
    return <div className="campo__text" >
        <label> {props.title}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoText;
