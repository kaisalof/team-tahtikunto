import React from 'react'
import Lomake from '../components/Lomake'

// komponentit
import Yhteystiedot from '../components/Yhteystiedot'
import Some from '../components/Some'

const Yhteydenotto = () => {
    return (
        <div className="yhteydenotto">
            <h1 className="otayhteytta">Ota yhteyttä</h1>
            <Yhteystiedot />
            <Some />        
            <Lomake />
        </div>
    )
}

export default Yhteydenotto
