import { useState } from 'react'

function Knjige() {

    const [pretraga, setPretraga] = useState('');

    function handlePretraga(e) {
        setPretraga(e.target.value)
    }


    return (
        <div>
            <h1 className='mt-4'>Pretrazi knjige</h1>
            <div className="pretrazi">
                <input type="text" className="form-control" onChange={handlePretraga} value={pretraga} />
                <button className="btn btn-primary mt-2">Pretraga</button>
            </div>
        </div>
    )
}

export default Knjige;