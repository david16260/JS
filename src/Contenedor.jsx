import React from 'react';
import Estudiantes from './Estudiantes';


const estudiantes = [
    {
        "id": 1,
        "nombre" : "Tulio",
        "serie" : "31 Minutos",
        "genero" : "M",
       
        "foto" : "https://i.pinimg.com/originals/cb/3a/d9/cb3ad9f66d7a15b870851b1445935994.png"
    },
    {
        "id": 2,
        "nombre" : "Policarpio",
        "serie" : "31 Minutos",
        "genero" : "M",
       
        "foto" : "https://pbs.twimg.com/media/BFIIl9xCEAAC-MZ.jpg"
    },
    {
        "id": 3,
        "nombre" : "Bodoque",
        "serie" : "31 Minutos",
        "genero" : "M",
     
        "foto" : "https://www.geekmi.news/__export/1622910844895/sites/debate/img/2021/06/05/juan-carlos-bodoque-31-minutos-1.jpg_1443218755.jpg"
    },
    {
        "id": 4,
        "nombre" : "Juanin",
        "serie" : "31 Minutos",
        "genero" : "M",
        
        "foto" : "https://64.media.tumblr.com/7086a81af61c1dc2fbbd9e710ff248f4/tumblr_neahxg47Y81tkbqz1o1_500.jpg"
    }
    
   
]

const Contenedor = () =>(
    <>
    {
        estudiantes.map( c => <Estudiantes nombre={c.nombre} serie={c.serie} genero={c.genero} foto={c.foto} id={c.id}/>)
    }

   
    </>
);

export default Contenedor;
