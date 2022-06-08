import React from 'react';

const Mesaj = ({msj,ss}) =>{
    return(
        <div className='message well'>
            <p>{ss} se escribe</p>
            <h2>{msj}</h2>

        </div>
    );
}

export default Mesaj;