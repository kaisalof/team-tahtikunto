import '../styles/yhteydenottostyles.css'
import React from 'react'
import { useState } from 'react'
import Lomake from '../components/Lomake'

// logot
import Instagram from '../images/igsmall.png'
import Facebook from '../images/fbsmall.png'

const Yhteydenotto = () => {
    const [nimi, setNimi] = useState('')
    const [email, setEmail] = useState('')
    const [puhelin, setPuhelin] = useState(0)
    const [viesti, setViesti] = useState('')

    const [tiedot, setTiedot] = useState({
        nimi: '',
        email: '',
        puhelin: 0,
        viesti: ''
    })

    const handleNameChange = (e) => {
        e.preventDefault()
        setNimi(e.target.value)

    }
    const handleEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Nimi on ${nimi}`)

    }
    return (
        <div className="yhteydenotto">
            <h1>Ota yhteyttä</h1>
            <div className="yhteystiedot">
                <p>master.korhonen@kolumbus.fi</p>
                <p>040 591 5178</p>
            </div>
            <div className="some">
                <div className="instagram">
                    <a href="https://www.instagram.com/teamtahtikunto/"  target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="Team Tähtikunto Instagramissa" className="ig" />
                    </a>
                </div>
                <div className="facebook">
                <a href="https://www.facebook.com/teamtahtikunto"  target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="Team Tähtikunto Facebookissa" className="fb" />
                    </a>
                </div>
            </div>

            <Lomake />
            {/*<form onSubmit={handleSubmit}>
                <label>
                    Nimi:
                    <input
                        type='text'
                        name='name'
                        onChange={handleNameChange}
                    />
                    Email:
                    <input
                        type='email'
                        name='email'
                        onChange={handleEmailChange}
                                                
                    />
                    Puhelinnumero:
                    <input 
                    type='number'
                    name=''
                    />
                    <input
                        type='submit'
                        value='Lähetä' />
                </label>
            </form>*/}
        </div>

    )
}

export default Yhteydenotto
