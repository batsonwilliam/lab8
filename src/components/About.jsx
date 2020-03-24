import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/lab08-b58ea.appspot.com/o/04D3FE65-BF69-4507-9E5C-ED08156AE88A.jpeg?alt=media&token=4d319b1b-6cdd-4423-986c-6f20fdab0c48'} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Sapol Kosawang (610610619)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
