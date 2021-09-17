import React from 'react';
import {Link} from "react-router-dom";

const estudiantes = [
    {
        "id": 1,
        "nombre" : "Tulio",
        "serie" : "31 minutos",
        "genero" : "M",
        "aficiones" : "coleccionar corbatas,Comprar cosas caras, el dinero, tocar la armónica",
        "foto" : "https://i.pinimg.com/originals/cb/3a/d9/cb3ad9f66d7a15b870851b1445935994.png"
    },
    {
        "id": 2,
        "nombre" : "Policarpio",
        "serie" : "31 minutos",
        "genero" : "M",
        "aficiones" : "Música, el hundimiento del Titanic",
        "foto" : "https://pbs.twimg.com/media/BFIIl9xCEAAC-MZ.jpg"
    },
    {
        "id": 3,
        "nombre" : "Bodoque",
        "serie" : "31 minutos",
        "genero" : "M",
        "aficiones" : "Apuestas y juegos de azar",
        "foto" : "https://www.geekmi.news/__export/1622910844895/sites/debate/img/2021/06/05/juan-carlos-bodoque-31-minutos-1.jpg_1443218755.jpg"
    },
    {
        "id": 4,
        "nombre" : "Juanin",
        "serie" : "31 minutos",
        "genero" : "M",
        "aficiones" : "Coleccionar estampillas",
        "foto" : "https://64.media.tumblr.com/7086a81af61c1dc2fbbd9e710ff248f4/tumblr_neahxg47Y81tkbqz1o1_500.jpg"
    }
    
   
]



const DetalleEstudiante= ({match}) => {

    let estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0]

    return(

    <>
    {
        estudiante ? (
    <div className="card d-flex justify-Content-center mt-5 m-auto text-primary" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 class="card-title">Nombre:{estudiante.nombre}</h5>
            <p className="card-text">Genero: {estudiante.genero}</p>
            <p className="card-text">Serie: {estudiante.serie}</p>
            <p className="card-text">Aficiones: {estudiante.aficiones}</p>
            <img src={estudiante.foto} alt=""  style={{width: '210px'}}/>
        </div>
    </div>
        ):
        <h1>Estudiante no encontrado</h1>
    }
        <center>
        <Link to={`/estudiantes`}>Ver todos</Link>
        </center>
    </>

)
};

export default DetalleEstudiante;