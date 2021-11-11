import '../styles/palvelutstyles.css'
import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import ruoka from '../images/ruoka.jpeg'
import EnniMika from '../images/ennimikaNFE1.jpeg'

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
                <div className="kuvaTeksti">
                    <div className="kuvaTekstiDiv">
                        <p className="ravintoTeksti">Painonhallinnassa ruokavalion osuus on 80–90 % eli kaikkein suurin. Laadukas ruokavalio sisältää hyviä
                            hiilihydraatteja, rasvoja, proteiineja ja suojaravintoaineita. Tavallisen kuntoilijan ei kuitenkaan
                            tarvitse laskea kaloreita, etenemme perusruoalla ja maalaisjärjellä. Ravinnolla on erittäin tärkeä
                            merkitys urheilussa, etenkin kehon kiinteytymisessä, lihasten kasvattamisessa ja palautumisessa.<br /><br />
                            Laitetaan sinunkin ruokavaliosi yhdessä kuntoon, syödään riittävästi ja monipuolisesti!</p>
                        <p className="olet">Olet mitä syöt!</p>
                    </div>
                    <img src={ruoka} alt="ruokakuva" className="ruokakuva" />
                </div>

            </div>

            <div className="kilpailu">
                <h4>Kilpailuvalmennus</h4>
                <div className="kilpailuDiv">
                    <img src={EnniMika} alt="Enni ja Mika, NFE 2021" className="enni" />
                    <p>Kilpaurheilijoiden hyvinvointi on aina etusijalla, vaikka pyrimmekin optimaaliseen kisakuntoon. Urheilijaksi ei synnytä, vaan siihen kasvetaan oppimisen kautta. Siksi valmennuksen pitää olla johdonmukaista ja määrätietoista.<br /><br />
                        Vastuuvalmentajana toimii <Link exact to="/mika" className="nimiLinkki">Mika Korhonen</Link>. Tiimin poseerausvalmentajina toimivat <a href="https://www.instagram.com/posingbymaija/" target="_blank" rel="noreferrer" className="nimiLinkki">Maija Jouhki</a> ja <Link exact to="/tiimi" className="nimiLinkki">Enni Sinisalo</Link>.</p>
                </div>
            </div>

            <div className="hinnat">
                <h4>Hinnasto</h4>
                <p className="hinnatKuvaus">Valmennuskokonaisuutta suunnitellessa huomioidaan aina asiakkaan toiveet ja tavoitteet. Lopullinen hinta määräytyy yhteisten tapaamisten määrästä ja suunnitelmasta.</p>
                <div className="hinnatDiv">
                    <p className="hinnatSis">Jokainen valmennus sisältää:</p>
                    <ul>
                        <li>ohjattu tapaaminen valmentajan kanssa <a href="https://www.mayors.fi/" target="_blank" rel="noreferrer" className="mayors">Mayor's Gymilla</a></li>
                        <li>treeniohjeet</li>
                        <li>ravintovalmennus</li>
                    </ul>
                    <p></p>
                    <p className="alkaen">hinnat alkaen 111,60 € / kk (sis. alv 24%)</p>
                    <div className="linkkiDiv">
                        <Link exact to="/yhteydenotto" className="yhteydenottoLinkki">Ota yhteyttä</Link>
                    </div>
                </div>
            </div>

            <div className="hieronta">
                <h4>Urheiluhieronta</h4>
                <p>Hierontapöytä sijaitsee Etu-Töölössä <a href="http://riitansalonki.com/" target="_blank" rel="noreferrer">Riitan Salongissa</a></p>
                <p>Yhteydenotot puhelimitse Mikalle 040 591 5178</p>
                <p>Cygnaeuksenkatu 12,<br />
                    00100 Helsinki</p>
                {/* <p>hinnasto</p>*/}
            </div>
        </div>
    )
}

export default Palvelut
