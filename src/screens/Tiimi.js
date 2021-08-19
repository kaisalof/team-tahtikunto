import '../styles/tiimistyles.css'
import '../styles/App.css'
import React from 'react'
import Henna from '../images/henna.jpeg'
import Jasmin from '../images/jasmin.jpeg'

const Tiimi = () => {
    return (
        <div>
            <div>
                <h3>Tiimi</h3>
            </div>
            <div>
                <img src={Henna} alt="Henna" className="kuvat" />
            </div>
            <div>
                <img src={Jasmin} alt="Jasmin" className="kuvat" />
            </div>
        </div>
    )
}

export default Tiimi
