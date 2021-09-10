import React, {Component} from "react";

class Formulario extends Component{

    constructor(props){
        super(props)

        this.state={
            nombre: "nombre state",
            apellido: "Apelldos state",
            edad:"Edad state"
        }

        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarApellido = this.cambiarApellido.bind(this);
        this.cambiarEdad = this.cambiarEdad.bind(this);

        let elemento = document.getElementById("contenedor");
        console.log(elemento);
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
            
        });
    }

    cambiarApellido(o){
        this.setState({
            apellido: o.target.value
        });
    }
    cambiarEdad(u){
        this.setState({
            edad: u.target.value
        });
    }

    render(){
        return(
            <div id="contenedor">
                <h1>
                    <center>
                    <form action="">
                        <label htmlFor="">Nombres</label><br />
                        <input type="text" 
                            onChange={
                                this.cambiarNombre
                            } 
                        /><br />
                          <label htmlFor="">Apellidos</label><br />
                          <input type="text" 
                            onChange={
                                this.cambiarApellido
                            } 
                        /><br />
                         <label htmlFor="">Edad</label><br />
                          <input type="number" 
                            onChange={
                                this.cambiarEdad
                            } 
                        /><br />
                        <input type="submit" value="Enviar"/>
                    </form>
                    </center>
                </h1>
                <h3>{`Hola ${this.state.nombre}`}</h3>
                <h3>{`Los ${this.state.apellido}`}</h3>
                <h3>{`La ${this.state.edad}`}</h3>
            </div>

        )
    }

    componentDidMount(){
        let elemento = document.getElementById("contenedor");
        console.log(elemento);

    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(prevState);
        console.log("-------------");
    }
}


export default Formulario;