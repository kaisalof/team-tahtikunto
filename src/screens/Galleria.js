import '../styles/kuviastyles.css'
import React from 'react'
import GalleriaKuvat from '../components/GalleriaKuvat'
/*import auto from '../images/photos/auto.jpeg' //1 1
import Conan from '../images/photos/conan.jpeg' // 16 9
import Enni from '../images/photos/enniEtu.jpeg' //3 2
import EnniHauis from '../images/photos/enniHauis.jpeg' //3 2
import EnniKehitys from '../images/photos/enniKehitys.jpeg' //1 1
import EnniTakaa from '../images/photos/enniTakaa.jpeg' // 3 2
import Henna from '../images/photos/henna.jpeg'//4 3
import HennaSoutu from '../images/photos/hennasoutu.jpeg'//4 3
import IngaKehitys from '../images/photos/ingaKehitys.jpeg'//1 1
import IngaTalja from '../images/photos/ingaTalja.jpeg'//10 8
import JasminKehitys from '../images/photos/jasminKehitys.jpeg'//1 1
import Johanna from '../images/photos/johanna.jpeg'//3 2
import JohannaKehitys from '../images/photos/johannaKehitys.jpeg'// 1 1
import Juha from '../images/photos/juha2011.jpeg' //1 1 
import Juha3 from '../images/photos/juha20113.jpeg' //1 1
import Kaisa from '../images/photos/kaisa.jpeg'//4 3
import koira from '../images/photos/koira.jpeg' //4 3
import Maria from '../images/photos/mariajuvas.jpeg' //4 3 
import Marjo from '../images/photos/marjo.jpeg' //3 2
import MikajaEnni from '../images/photos/mikaEnni.jpeg' //10 8
import MikajaEnni2 from '../images/photos/mikaEnni2.jpeg' //3 2
import MikajaHenna from '../images/photos/mikaHenna.jpeg' //3 2
import MikajaHenna2 from '../images/photos/mikaHennaOjentaja.jpeg' //10 8
import MikajaHenna3 from '../images/photos/mikaHennaSoutu.jpeg' //3 2
import MikajaInga from '../images/photos/mikaInga.jpeg'//1 1
import MikaNuorempi from '../images/photos/mikaNuorempi.jpeg' //16 9
import MikaNuori from '../images/photos/mikaNuori.jpeg'// 10 8
import Robert from '../images/photos/robert.jpeg' //16 9
import ruoka from '../images/photos/ruoka.jpeg' //4 3
import ruoka1 from '../images/photos/ruoka1.jpeg' //4 3
import ruoka2 from '../images/photos/ruoka2.jpeg'//4 3
import tuomari from '../images/photos/tuomari.jpeg'//3 2 */

const Kuvia = () => {
    return (
        <div className="galleria">
            <GalleriaKuvat />
        </div>
    )
}
/*
const Kuvia = () => {
    return (
        <div className="galleria">
            <div className="kuvat">
                <div className="kuvaJaTeksti">
                    <img src={MikajaHenna3} alt="Mika ja Henna, alatalja" className="kuva wide" />
                    <div>Mika ja Henna, alatalja</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={MikajaEnni} alt="Mika ja Enni" className="kuva narrow" />
                    <div>Mika ja Enni</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Johanna} alt="Johanna" className="kuva  narrow" />
                    <div>Johanna</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={EnniKehitys} alt="Ennin kehityskuva" className="kuva square" />
                    <div>Ennin kehityskuva</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Robert} alt="Robert" className="kuva narrow " />
                    <div>Robert</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={ruoka1} alt="Ruokakuva" className="kuva  wide" />
                </div>
                <div className="kuvaJaTeksti">
                    <img src={HennaSoutu} alt="Henna, yhden käden soutu" className="kuva  wide" />
                    <div>Henna, yhden käden soutu</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={EnniHauis} alt="Enni, hauiskääntö" className="kuva  narrow" />
                    <div>Enni, hauiskääntö</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={IngaTalja} alt="Inga, ylätalja" className="kuva narrow " />
                    <div>Inga, ylätalja</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Marjo} alt="Marjo" className="kuva narrow " />
                    <div>Marjo</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Juha} alt="Juha, Classic Bodybuilding 2011" className="kuva  square" />
                    <div>Juha, Classic Bodybuilding 2011</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={JohannaKehitys} alt="Johannan kehityskuva" className="kuva square" />
                    <div>Johannan kehityskuva</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={tuomari} alt="Mika tuomaritehtävissä" className="kuva wide" />
                    <div>Mika tuomaritehtävissä</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={MikajaInga} alt="Mika ja Inga" className="kuva square" />
                    <div>Mika ja Inga</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Henna} alt="Henna" className="kuva narrow" />
                    <div>Henna</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={MikaNuorempi} alt="Mika nuorempana" className="kuva narrow" />
                    <div>Mika nuorempana</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={JasminKehitys} alt="Jasminin kehityskuva" className="kuva square" />
                    <div>Jasminin kehityskuva</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Enni} alt="Enni" className="kuva narrow" />
                    <div>Enni</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Maria} alt="Maria" className="kuva narrow" />
                    <div>Maria</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={auto} alt="Mika" className="kuva square" />
                    <div>Mika</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={MikajaHenna} alt="Mika ja Henna" className="kuva narrow" />
                    <div>Mika ja Henna</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={ruoka} alt="Ruokakuva" className="kuva wide" />
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Juha3} alt="Juha, Classic Bodybuilding 2011" className="kuva square" />
                    <div>Juha, Classic Bodybuilding 2011</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={EnniTakaa} alt="Enni" className="kuva narrow" />
                    <div>Enni</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={IngaKehitys} alt="Ingan kehityskuva" className="kuva square" />
                    <div>Ingan kehityskuva</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={MikajaEnni2} alt="Mika ja Enni" className="kuva wide" />
                    <div>Mika ja Enni</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Conan} alt="Conan" className="kuva wide" />
                    <div>Conan</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={Kaisa} alt="Kaisa" className="kuva narrow" />
                    <div>Kaisa</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={MikajaHenna2} alt="Mika ja Henna" className="kuva narrow" />
                    <div>Mika ja Henna</div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={ruoka2} alt="Ruokakuva" className="kuva wide" />
                </div>
                <div className="kuvaJaTeksti">
                    <img src={koira} alt="koira" className="kuva narrow" />
                    <div></div>
                </div>
                <div className="kuvaJaTeksti">
                    <img src={MikaNuori} alt="Mika nuorena" className="kuva narrow" />
                    <div>Mika nuorena</div>
                </div>

            </div>
        </div>
    )
}*/

export default Kuvia
