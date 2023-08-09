import "./add.css"

const AddOrg = (props) =>{

    return <section className="orgSection" >
        <h3 className="title__org">Mi Organización</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarForm}/>
    </section>
}

export default AddOrg;