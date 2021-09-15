import '../styles/mikastyles.css'
import React from 'react'
import Saavutukset from '../components/Saavutukset'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//kuvat
import MikanKuva from '../images/mika2.jpeg'
import koira from '../images/dogs.jpeg'
import ohjauskuva from '../images/ohjaus.jpeg'
import Mika1982 from '../images/mika1982.jpeg'
import Mika2001 from '../images/mika2001.jpeg'
import MikaVanha from '../images/mikaVanha.jpeg'

const Mika = () => {
    return (
        <Container fluid className="mika">

            <Row className="topRow rows">
                <Col sm={12}>
                    <h1>Mika Korhonen</h1>
                    <p className="sloganit">"Rakkaudesta rautaan"</p>
                </Col>
            </Row>

            <Row className="aboutMika rows">
                <Col lg={4} className="aboutMikaKuva" >
                    <img src={MikanKuva} alt="Mika" className="mikanKuva" />
                </Col>
                <Col lg={8} className="kuvaus">
                    <p>Valmennan asiakkaitani vuosikymmenien kokemuksella ja ammattitaidolla. Asiakaskuntani koostuu sekä tavoitteellisista urheilijoista ja kisaajista että peruskuntoilijoista.<br /><br />
                        Vanhempana valmentajana tiedän myös, kuinka tärkeää on sekä toimintakyvyn säilyttäminen että lihaskunnon ylläpitäminen etenkin vanhemmalla iällä. Seniori-ikäisten valmennus onkin muodostunut minulle sydämen asiaksi.<br /><br />
                        Olen itsekin kilpaillut kehonrakennuksessa, mutta viimeisen kymmenen vuoden ajan olen kuntoillut ja kuntouttanut itseäni muutamista vammoista. Kuntouttamiseen liittyvät haasteet, motivaatio ja tekeminen ovat siis minulle erittäin tuttuja asioita.</p>
                </Col>
            </Row>

            <Row className="aboutMika2 rows">
                <Col className="kuvaus2">
                    <p>Itse rentoudun parhaiten metsässä koirieni kanssa ja teen lenkin lähes joka aamu. Siitä saan voimaa ja energiaa, jota haluan jakaa myös valmennettavilleni.</p>
                    <p>Minulle on tärkeää, että saamme yhdessä asiakkaan toivomia tuloksia aikaan, kuitenkin aina terveys ja hyvinvointi edellä. Tavoitteeni on, että jokainen saisi urheilusta ja kuntoilusta ikuisen ystävän.</p>
                </Col>
                <Col>
                    <img src={koira} alt="koirakuva" className="kuvat koira" />
                </Col>
            </Row>

            <Row className="sloganLinkki rows" >
                <Col>
                    <p>”Treenataan tosissaan, mutta ei liian vakavasti”</p>
                    {/*Linkki yhteydenottoon*/}
                    <p>Voit tutustua palveluihini tästä{/* linkki */}</p>
                </Col>
            </Row>

            <Row className="koulutus rows" >
                <Col>
                    <h4>Koulutus:</h4>

                    <p>Personal Trainer, FAF</p>
                    <p>Fitnessvalmentaja, SFU</p>
                    <p>Urheiluhieroja</p>
                </Col>
                <Col>
                    <img src={ohjauskuva} alt="Enni ja Mika" className="kuvat" />
                </Col>
            </Row>

            <Row className="tausta rows">
                <Col>
                    <h4>Tausta ja omat saavutukset</h4>

                    <p>Nuorempana harrastin yleisurheilua noin 10 vuoden ajan ja samalla judoa, josta viimeiset kaksi vuotta kilpailumielessä. </p>
                    <p>Samoihin aikoihin halusin lisää voimaa, joten isäni osti minulle kotiin Weiderin vinyylisarjan penkkeineen. Vuonna 1975 liityin Lappeenrannan atleettiklubiin ja salitreenit ovat olleet siitä asti mukana elämässäni tavalla tai toisella.</p>
                </Col>
                <Col>
                    <img src={Mika1982} alt="Mika vuonna 1982." className="kuvat" />
                </Col>
            </Row>

            <Row className="tausta2 rows">
                <Col>
                    <p>Kehonrakennus on ollut harrastuksena kilpailumielessä vuodesta 1979 alkaen reilut 20 vuotta, saavutuksina mm. SM-kultaa ja PM-hopeaa vuonna 1982.</p>
                    <p>Viimeisimpiin kisoihin osallistuin vuonna 2001, tuloksena SM-pronssia masters-sarjassa eli raskaassa sarjassa.</p>
                </Col>
                <Col>
                    <img src={Mika2001} alt="Mika vuonna 2001." className="kuvat" />
                </Col>
            </Row>

            <Row className="vahvuudet rows">
                <Col>
                    <h4>Erityisosaaminen ja vahvuuteni valmentajana</h4>

                    <p>Vahvuutenani on yli 40 vuoden kokemus kehonrakennus- ja kuntosaliharjoittelusta sekä erilaisten ruokavalioiden yksilöllisestä suunnittelusta niin kilpailijoille kuin kuntoilijoillekin.</p>
                    <p>Olen kunnianhimoinen, luotettava, kannustava ja sosiaalinen treenari, joka on aina täysillä mukana ja asiakkaan tukena.</p>
                    <p>Minulle on tärkeää saada tuloksia aikaan, ja asiakas ymmärtämään riittävän urheilun ja monipuolisen ruokavalion vaikutuksen kokonaisvaltaiseen hyvinvointiin.</p>
                </Col>
                <Col></Col>
            </Row>

            <Row className="tahtikunto rows">
                <Col>
                    <h4>Team Tähtikunto ja kisat</h4>

                    <p>Kisatiimini Team Tähtikunnon {/* tähän linkki @teamtahtikunto instaan*/}päävalmentajana olen ollut jo toistakymmentä vuotta, samoin tuomarin tehtävissä body- ja fitnesskisoissa.</p>
                    <p>Kokemusta ja kohtaamisia erilaisten ihmisten ja urheilijoiden kanssa siis löytyy, vaikka tässä työssä oppii koko ajan myös lisää. Se tekee työstäni erittäin mielenkiintoisen.</p>


                    <p>Haluatko sinäkin elämäsi kuntoon?</p>
                </Col>
                <Col></Col>
            </Row>

            <Row className="saavutukset rows">
                <p>Valmentamieni urheilijoiden saavutuksia fitness- ja kehonrakennuskilpailuissa: </p>
                <Col>
                    <Saavutukset />
                </Col>
                <Col>
                    tähän kuvia, ainakin Johanna ja Robert
                </Col>
            </Row>

        </Container>

    )
}

export default Mika
