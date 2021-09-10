import React from 'react';
import Estudiantes from './Estudiantes';


const estudiantes = [
    {
        "nombre" : "Tulio",
        "edad" : "30",
        "genero" : "M",
        "foto" : "https://i.pinimg.com/originals/cb/3a/d9/cb3ad9f66d7a15b870851b1445935994.png"
    },
    {
        "nombre" : "Policarpio",
        "edad" : "58",
        "genero" : "M",
        "foto" : "https://pbs.twimg.com/media/BFIIl9xCEAAC-MZ.jpg"
    },
    {
        "nombre" : "Bodoque",
        "edad" : "",
        "genero" : "M",
        "foto" : "https://www.geekmi.news/__export/1622910844895/sites/debate/img/2021/06/05/juan-carlos-bodoque-31-minutos-1.jpg_1443218755.jpg"
    },
    {
        "nombre" : "Juanin",
        "edad" : "",
        "genero" : "M",
        "foto" : "https://64.media.tumblr.com/7086a81af61c1dc2fbbd9e710ff248f4/tumblr_neahxg47Y81tkbqz1o1_500.jpg"
    }
    
   
]

const Contenedor = () =>(
    <>
    {
        estudiantes.map( c => <Estudiantes nombre={c.nombre} edad={c.edad} genero={c.genero} foto={c.foto}/>)
    }

   
    </>
);

export default Contenedor;
