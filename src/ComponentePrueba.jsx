import React from 'react';
import PropTypes from 'prop-types';


//let nombre=prompt('Ingrese su nombre:','');

//let edad=prompt('Ingrese su edad:','');

//let genero=prompt('Ingrese su genero:','');

const ComponentePrueba = ({nombre,edad,genero}) => (
    <>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 class="card-title">Nombre:{nombre}</h5>
                <p className="card-text">Edad: {edad}</p>
                <p className="card-text">Genero: {genero}</p>
            </div>
        </div>
    </>
);

ComponentePrueba.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

ComponentePrueba.defaultProps = {
    nombre: "Nombre no asignado",
    edad: 0
    
}

export default ComponentePrueba;