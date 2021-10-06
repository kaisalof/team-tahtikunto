import '../styles/palvelutstyles.css'
import React from 'react'

import ruoka from '../images/ruoka.jpeg'
import ruoka2 from '../images/ruoka2.jpeg'

const Palvelut = () => {
    return (
        <div>
            <div className="palvelutTop">
                <div className="palvelutHeader">
                    <h1>Palvelut</h1>
                </div>

                <div className="palvelutKuvaus">
                    <p className="palvelutKuvaus1">Team Tähtikunto tarjoaa kaikki PT-palvelut erilaisiin tavoitteisiin lähtötasosta riippumatta.</p>
                    <p className="palvelutKuvaus2">Ammattilaisen avulla pääset kiinni säännölliseen saliharjoitteluun turvallisesti ja tehokkaasti.</p>
                </div>
            </div>

            <div className="erityis" >
                <h4>Tiimiltämme löytyy erityisosaamista muun muassa seuraavista:</h4>
                <ul>
                    <li>kuntoutus ja loukkaantumisen jälkeinen harjoittelu</li>
                    <li>kehon muokkaus, rasvanpoltto, lihasmassan ja voiman hankinta, erilaiset tekniikat, kisavalmennus</li>
                    <li>ravintovalmennus: perusruokavaliosta kilpaurheilijoiden ravintoon ja kaikkea siltä väliltä</li>
                    <li className="erityisAlin">muutosvalmennus</li>
                </ul>
            </div>

            <div className="benefits">
                <div className="benefitsBox">
                    <h4> Salitreenin hyötyjä:</h4>
                    <ul>
                        <li>Nopein ja tehokkain tapa muokata kehoa: kiinteytys, lihasten hankinta, rasvanpoltto.</li>
                        <li>Koko keho vahvistuu lihaksia, luita ja jänteitä myöten.</li>
                        <li>Ehkäisee useita sairauksia kuten tyypin 2 diabetesta sekä sydän- ja verisuonisairauksia.</li>
                        <li>Oikein tehtynä ehkäisee ja vähentää esimerkiksi selkä- ja olkapäävaivoja. Eli hyvä etenkin istumatyöläisille! </li>
                        <li>Hidastaa ikääntymistä, parantaa elämänlaatua, hidastaa lihas- ja luukatoa ja antaa lisää voimaa suoriutua jokapäiväisistä askareista.</li>
                        <li>Lisäksi vaikuttaa mielialaan, hormonitoimintaan ja pitää aineenvaihdunnan aktiivisena.</li>
                        <li>Kehontuntemus ja sitä kautta kehonhallinta paranee, mikä helpottaa kaikenikäisiä ihmisiä sekä arjessa että erilaisissa arjen haasteissa.</li>
                    </ul>
                    <p><b>Erityisesti senioreille on tärkeää lihaskunnon ylläpitäminen tai kasvattaminen, jotta arki sujuu itsenäisesti mahdollisimman hyvin.</b></p>
                </div>
            </div>

            <div className="ohjausKuva"></div>

            <div className="ravinto">
                <h4>Ravintovalmennus</h4>
                <p className="olet">Olet mitä syöt!</p>
                <p>Painonhallinnassa ruokavalion osuus on 80–90 % eli kaikkein suurin. Laadukas ruokavalio sisältää hyviä
                    hiilihydraatteja, rasvoja, proteiineja ja suojaravintoaineita. Tavallisen kuntoilijan ei kuitenkaan
                    tarvitse laskea kaloreita, etenemme perusruoalla ja maalaisjärjellä. Ravinnolla on erittäin tärkeä
                    merkitys urheilussa, etenkin kehon kiinteytymisessä, lihasten kasvattamisessa ja palautumisessa.<br />
                    Laitetaan sinunkin ruokavaliosi yhdessä kuntoon, syödään riittävästi ja monipuolisesti!</p>
            </div>

            <div className="kilpailu">
                <h4>Kilpailuvalmennus</h4>
                <p>Kilpaurheilijoiden hyvinvointi on aina etusijalla, vaikka pyrimmekin optimaaliseen kisakuntoon. Urheilijaksi ei synnytä, vaan siihen kasvetaan oppimisen kautta. Siksi valmennuksen pitää olla johdonmukaista ja määrätietoista.<br />
                    Vastuuvalmentajana toimii Mika Korhonen. Tiimin poseerausvalmentajina toimivat Maija Jouhki ja Enni Sinisalo.</p>
            </div>

            <div className="hieronta">
                <h4>Urheiluhieronta</h4>
                <p>Sijaitsee Etu-Töölössä <a href="http://riitansalonki.com/" target="_blank" rel="noreferrer">Riitan Salongissa</a></p>
                <p>Cygnaeuksenkatu 12, 00100 Helsinki</p>
                <p>hinnasto</p>
            </div>
        </div>
    )
}

export default Palvelut
