import React from 'react';
import PropTypes from 'prop-types';

const Estudiantes = ({nombre,genero,serie,aficiones,foto,id}) =>(
    <>
    <div className="card d-flex justify-Content-center mt-5 m-auto text-primary" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 class="card-title">Nombre:{nombre}</h5>
            <p className="card-text">Genero: {genero}</p>
            <p className="card-text">Serie: {serie}</p>
          
            <img src={foto} alt=""  style={{width: '210px'}}/>
            <p><a href={`/estudiantes/${id}`}>Detalle</a></p>
        </div>
    </div>
</>
);
Estudiantes.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Estudiantes.defaultProps = {
    nombre: "Nombre no asisgando",
    edad: 0,
    genero: "Genero no definido"
}

export default Estudiantes;