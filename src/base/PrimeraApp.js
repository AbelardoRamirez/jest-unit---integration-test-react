import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, lista, subtitulo = 'Mi Subtitulo' }) => {
    return (
        <div className="row">
            <div className="col">
                <h3 className="h3 font-weight-bold text-center">
                    Experimento Funcional Test
                </h3>
                <h2 className="h2 font-weight-bolder text-center">
                    {saludo}!!!
                </h2>
                <ul>
                    {lista.map((item, index) => {
                        return (
                            <li key={index} >{item} {item % 2 === 0 ? 'OK' : 'Incompleted'}</li>
                        );
                    })}
                </ul>
                <p className="font-weight-lighter text-monospace">
                    <span className="text-success">
                        {subtitulo}
                    </span>
                </p>
            </div>
        </div>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    saludos: 'Empty Text'
}

export default PrimeraApp;