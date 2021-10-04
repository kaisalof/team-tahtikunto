import '../styles/mikastyles.css'
import React from 'react'
import Saavutukset from '../components/Saavutukset'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router, Link } from 'react-router-dom'

//kuvat
import MikanKuva from '../images/mika2.jpeg'
import koira from '../images/dogs.jpeg'
import ohjauskuva from '../images/ohjaus.jpeg'
import Mika1982 from '../images/mika1982.jpeg'
import Mika2001 from '../images/mika2001.jpeg'
import Mika1994 from '../images/mika1994.jpeg'
import Johanna from '../images/johanna1.jpg'
import Robert from '../images/robert.jpeg'
import kisakuva from '../images/kisakuva.jpeg'

const Mika = () => {
    return (
        <Container fluid className="mika">

            <Row className="topRow">
                <Col sm={12}>
                    <h1>Mika Korhonen</h1>
                    <p className="sloganit">"Rakkaudesta rautaan"</p>
                </Col>
            </Row>

            <Row className="aboutMika">
                <Col xl={5} lg={6} md={5} sm={12} className="aboutMikaKuva" >
                    <img src={MikanKuva} alt="Mika" className="mikanKuva" />
                </Col>
                <Col xl={7} lg={6} md={7} sm={12} className="kuvaus">
                    <p>Valmennan asiakkaitani vuosikymmenten kokemuksella ja ammattitaidolla. Asiakaskuntani koostuu sekä tavoitteellisista urheilijoista ja kisaajista että peruskuntoilijoista.<br /><br />
                        Vanhempana valmentajana tiedän myös, kuinka tärkeää on sekä toimintakyvyn säilyttäminen että lihaskunnon ylläpitäminen etenkin vanhemmalla iällä. Seniori-ikäisten valmennus onkin muodostunut minulle sydämen asiaksi.<br /><br />
                        Olen itsekin kilpaillut kehonrakennuksessa, mutta viimeisen kymmenen vuoden ajan olen kuntoillut ja kuntouttanut itseäni muutamista vammoista. Kuntouttamiseen liittyvät haasteet, motivaatio ja tekeminen ovat siis minulle erittäin tuttuja asioita.</p>
                </Col>
            </Row>

            <Row className="aboutMika2">
                <Col xl={true} lg={4} xs={12} className="kuvaus2">
                    <p>Itse rentoudun parhaiten metsässä koirieni kanssa ja teen lenkin lähes joka aamu. Siitä saan voimaa ja energiaa, jota haluan jakaa myös valmennettavilleni.<br /><br />
                        Minulle on tärkeää, että saamme yhdessä asiakkaan toivomia tuloksia aikaan, kuitenkin aina terveys ja hyvinvointi edellä. Tavoitteeni on, että jokainen saisi urheilusta ja kuntoilusta ikuisen ystävän.<br /><br />
                        <Link
                            exact
                            to="/palvelut"
                            className="linkki"
                        >
                            Voit tutustua palveluihini tästä
                        </Link>
                    </p>

                </Col>
                <Col xl={true} lg={8} xs={12} className="kuvaus2kuva">
                    <img src={koira} alt="koirakuva" className="koira" />
                </Col>
            </Row>

            <Row className="slogan" >
                <Col>
                    <p className="sloganit treenataan">”Treenataan tosissaan, mutta ei liian vakavasti”</p>
                </Col>
            </Row>            

            <Row className="tausta">
                <h4>Tausta ja omat saavutukset</h4>
                <Col lg={5} sm={12} className="taustaKuva">
                    <img src={Mika1982} alt="Mika vuonna 1982." className="mika1982" />
                    <img src={Mika1994} alt="Mika vuonna 1994" className="mika1994" />
                </Col>
                <Col lg={7} sm={12} className="taustaTeksti">
                    <p>Nuorempana harrastin yleisurheilua noin 10 vuoden ajan ja samalla judoa, josta viimeiset kaksi vuotta kilpailumielessä.</p>
                    <p>Samoihin aikoihin halusin lisää voimaa, joten isäni osti minulle kotiin Weiderin vinyylisarjan penkkeineen.Vuonna 1975 liityin Lappeenrannan atleettiklubiin ja salitreenit ovat olleet siitä asti mukana elämässäni tavalla tai toisella.</p>
                    <p>Kehonrakennus on ollut harrastuksena kilpailumielessä vuodesta 1979 alkaen reilut 20 vuotta, saavutuksina mm. SM-kultaa ja PM-hopeaa vuonna 1982.</p>
                </Col>
            </Row>

            <Row className="tausta2">
                <Col lg={5} sm={12} className="tausta2Kuva">
                    <img src={Mika2001} alt="Mika vuonna 2001." className="mika2001" />
                </Col>
                <Col lg={7} sm={12} className="tausta2Teksti">
                    <p>Viimeisimpiin kisoihin osallistuin vuonna 2001, tuloksena SM-pronssia masters-sarjassa eli raskaassa sarjassa.</p>
                </Col>
            </Row>

            <Row className="koulutus" >
                <Col>
                    <h4>Koulutus</h4>
                    <p>Personal Trainer, FAF<br /><br />
                        Fitnessvalmentaja, SFU<br /><br />
                        Urheiluhieroja</p>
                </Col>
            </Row>

            <Row className="vahvuudet">
                <Col xxl={7} lg={6} md={12} className="vahvuudetTeksti">
                    <h4>Erityisosaaminen ja vahvuuteni valmentajana</h4>
                    <p>Vahvuutenani on yli 40 vuoden kokemus kehonrakennus- ja kuntosaliharjoittelusta sekä erilaisten ruokavalioiden yksilöllisestä suunnittelusta niin kilpailijoille kuin kuntoilijoillekin.<br /><br />
                        Olen kunnianhimoinen, luotettava, kannustava ja sosiaalinen treenari, joka on aina täysillä mukana ja asiakkaan tukena.<br /><br />
                        Minulle on tärkeää saada tuloksia aikaan, ja asiakas ymmärtämään riittävän urheilun ja monipuolisen ruokavalion vaikutuksen kokonaisvaltaiseen hyvinvointiin.</p>
                    <p className="tahtikunto">Kisatiimini <a href="https://www.instagram.com/teamtahtikunto/" target="_blank" rel="noreferrer">Team Tähtikunnon</a> päävalmentajana olen ollut jo toistakymmentä vuotta, samoin tuomarin tehtävissä body- ja fitnesskisoissa.<br /><br />
                        Kokemusta ja kohtaamisia erilaisten ihmisten ja urheilijoiden kanssa siis löytyy, vaikka tässä työssä oppii koko ajan myös lisää. Se tekee työstäni erittäin mielenkiintoista.</p>
                    <p className="haluatko">Haluatko sinäkin elämäsi kuntoon?</p>
                </Col>
                <Col xxl={5} lg={6} md={12} className="vahvuudetKuva" >
                    <img src={ohjauskuva} alt="Enni ja Mika" className="enniMika" />
                </Col>
            </Row>

            <Row className="saavutukset">
                <Col sm={12} className="saavutuksetOtsikko">
                    <h4>Tiimiläisteni saavutuksia fitness- ja kehonrakennuskilpailuissa: </h4>
                </Col>
                <Col lg={7} md={12} sm={12} className="saavutuksetTaulukko" >
                    <div>
                        <Saavutukset />
                    </div>                    
                </Col>
                <Col lg={5} md={12} sm={12} className="saavutuksetKuvat">
                    <img src={Robert} alt="Robert" className="saavutuksetKuva" />
                    <img src={Johanna} alt="Johanna" className="saavutuksetKuva" />
                    <img src={kisakuva} alt="kisakuva" className="saavutuksetKuva" />
                </Col>
            </Row>

        </Container>
    )
}

export default Mika
