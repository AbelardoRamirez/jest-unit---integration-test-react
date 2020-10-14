import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    const aumentar = () => setCounter(counter + 1);
    const disminuir = () => setCounter(counter - 1);
    const resetearContador = () => setCounter(value);

    return (
        <div className="row">
            <div className="col">
                <h3 className="h3 font-weight-lighter text-monospace">{counter}</h3>
                <button className="btn btn-block btn-primary" onClick={aumentar} >
                    Aumentar +
                </button>
                <button className="btn btn-block btn-secondary" onClick={resetearContador} >
                    Reset
                </button>
                <button className="btn btn-block btn-secondary" onClick={disminuir} >
                    Aumentar -
                </button>
            </div>
        </div>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
};

CounterApp.defaultProps = {
    value: 10
};

export default CounterApp;
