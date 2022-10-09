import React from 'react';
import '../style_1/Qbano.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import img_qbano from '../../assets/img/qbano.png';

const Qbano = () => {
    return(
        <>
            <div className='Qbano'>
                <h1>Qbano</h1>
                <div className='container'>
                    <div className='row mt-5'>

                        <div className='col-4'>
                            <div 
                            id='uno'
                            className='card'>
                                <img 
                                    className="Card image cap"
                                    src={img_qbano}
                                    alt=""
                                />
                            </div>
                            <div className='restaurante'>
                                <h1 className='tituloRest'>Sandwich Qbano</h1>
                            </div>
                        </div>

                        <div 
                        className='col-6 offset-md-1'
                        id='dos'
                        >
                            <h2> <font color="#FF8351">Sándwiches</font> </h2>
                            <div className='productos'>
                                columna compras
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Qbano
