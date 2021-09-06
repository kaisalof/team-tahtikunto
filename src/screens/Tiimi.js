import '../styles/tiimistyles.css'
import React from 'react'

// kuvat 
import Henna from '../images/henna.jpeg'
import Jasmin from '../images/jasmin.jpeg'
import Enni from '../images/enniVapaa.jpeg'
import EnniKisa from '../images/enniKisa.jpeg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Tiimi = () => {
    return (
        <Container fluid className="tiimiPage">
            <Row className="tiimiHeader">
                <Col>
                    <h1>Tiimi</h1>
                </Col>
            </Row>
            <Row className="enni tiimi" >
                <Col xs={4}>
                    <img src={Enni} alt="Enni" className="tiimiKuva" />
                </Col>
                <Col xs={8}>
                    <h4>Enni</h4>
                    <h5>Poseerausvalmentaja</h5>
                    <p>Moi! Oon Enni, 23-vuotias Bikini Fitness -urheilija Vantaalta. Mun arkea rytmittää treenaamisen lisäksi fysioterapeutin opinnot. Olen myös kouluttautunut personal traineriksi. Mikan valmennuksessa oon ollu vuodesta 2017.</p>
                    <p>Oon pienestä pitäen harrastanut liikuntaa. Ennen kun aloin käymään salilla, kilpailin cheerleadingissa. Loukkaantumisen takia jouduin lopettamaan cheerleadingin ja sen jälkeen eksyin salille. Innostuin treenaamisesta ja kilpaurheilutaustan takia kilpailutavoite alkoi pyöriä mielessä aika ajoin ja erityisesti kilpaileminen Bikini Fitnessissä. Kisasin ensimmäistä kertaa vuonna 2019.</p>
                    <p>Bikini Fitness, niin kuin muutkin fysiikkalajit, vaatii todella paljon. Tää laji on kuitenkin antanut mulle ihan valtavasti. Oon oppinut tosi paljon itsestäni ja kehittynyt fysiikan lisäksi vähintään yhtä paljon henkisesti. On ihan mielettömän palkitsevaa nähdä oma kehitys ja etenkin se paketti, minkä saa kovan työn jälkeen tuotua lavalle.</p>
                </Col>
                <Col xs={4}>
                    <img src={EnniKisa} alt="Enni kisoissa" className="tiimiKuva" />
                </Col>
            </Row>
            <Row className="jasmin tiimi">
                <Col xs={4}>
                    <img src={Jasmin} alt="Jasmin" className="tiimiKuva" />
                </Col>
                <Col xs={8}>
                    <h4>Jasmin</h4>
                    <h5>Liikkuvuusharjoittelun valmentaja </h5>
                    <p>Olen Jasmin, 27-vuotias lisensoitu personal trainer ja ravintovalmentaja, sekä farmaseutti. Urheilu on ollut iso osa elämääni koko aikuisikäni ja minulta löytyy monipuolinen liikuntatausta, johon kuuluu mm. kestävyysjuoksua, kuntosaliharjoittelua ja 10 vuotta astangajoogaa. Viimeiset 4 vuotta olen ollut myös mukana fitness -urheilussa ja kilpaillut body fitnessissä 2 kertaa.</p>
                </Col>
                <Col xs={4}>
                    tähän kuva
                </Col>
            </Row>
            <Row className="henna tiimi">
                <Col xs={4}>
                    <img src={Henna} alt="Henna" className="tiimiKuva" />
                </Col>
                <Col xs={8}>
                    <h4>Henna</h4>
                    <h5>?</h5>
                    <p>Moi! Olen Henna ja toimin tiimin meikkaajana ja huoltajana.

                        Valmistuin 2018 meikkaajaksi ja rakastuin silloin välittömästi näyttävien ilta- ja juhlameikkien maailmaan. Kisameikit ovat siis sataprosenttisesti minun heiniäni! Seuraan jatkuvasti uusia meikkitrendejä ja minulta onnistuu luovat ja erikoisemmatkin työt.

                        Myös treenaaminen on iso osa elämääni vaikka kisasuunnitelmia ei lajin parissa olekaan tällä hetkellä.

                        Team Tähtikunnon matkaan lähdin 2019 ja on ollut ihan huippua olla osa tiimin luovaa puolta!</p>
                </Col>
                <Col xs={4}>
                    tähän kuva
                </Col>
            </Row>
            <Row className="satu tiimi">
                <Col>
                    image
                </Col>
                <Col>Satu</Col>
                <Col>Olen koko ikäni taistellut ylipainoa vastaan, joten salitreeni liittyy itselläni vahvasti painonhallintaan.

                    Nyt lähes 50 vuotiaana haluan myös pitää lihaskuntoa yllä ja välttää loukkaantumisia, joten salitreeni on minulle muutenkin kuin ulkonäkösyistä tärkeää.

                    Työ ja kolme lasta pitivät minut kiireisenä pitkään, enkä ehtinyt tai jaksanut juurikaan treenata yli kymmeneen vuoteen. Kun nuorimmaiseni alkoi itsenäisesti kulkemaan omissa harrastuksissaan, päätin, että nyt on minun vuoroni aloittaa omat harrastukseni. Yhtäkkiä huomasin ottaneeni "vahingon takaisin", kun viikon treenitunteja kertyi jopa yli 20.

                    Työskentelen tutkijana ja työaikani ovat joustavat. Tästä johtuen pääsen treenaamaan parhaimmillaan kahdesti päivässä. Tällä hetkellä vapaa-aikaani kuluu pääosin tanssitreeneissä ja salilla, joka nollaa hyvin päässä risteilevät työasiat tai arkiset murheet. Suurin haasteeni on, että malttaisin levätä riittävästi. Onneksi Mika on toiminut järjen äänenä ja jarruna tarvittaessa.</Col>
                <Col></Col>

            </Row>
            <Row className="kia tiimi">
                <Col>
                    image
                </Col>
                <Col>
                    <h4>Kia</h4>
                    <p>
                    Kia Norring
Laji:Bikini fitness
Moikka! Olen 17-vuotias tyttö Karkkilasta. Urheilu on aina ollut osa elämää ja arkea, lukuisissa muodoissa. Olen pienempänä harrastanut vaikka mitä, mutta voimistelulajit ovat olleet niistä mieleenpainuvimpia. 
Kun muutama vuosi sitten lopetin voimistelun. Aloin miettimään itselleni oikeaa lajia koska aloin käydä salilla ja tykästyin siihen ihan todenteolla. Halusin viedä asiaa eteempäin ja kiinnostuin fitneksestä joten liityin tiimiin. Olen käynyt salilla ja kuulunut tiimiin noin vuoden verran. Kisalavalle nouseminen on haaveissa.
Opiskelen tällä hetkellä lukiossa ja tästä on tarkoitus jatkaa vielä ammattikorkeakouluun kun oikea ala löytyy😁🙏. Minulla on koira jonka kanssa tulee lenkkeiltyä jonkun verran+muiden perheenjäsenten sekä kavereiden kanssa treenailtua yhdessä silloin tällöin❤️.
                    </p>
                </Col>
                <Col>
                    image
                </Col>
            </Row>
        </Container>
    )
}

export default Tiimi
