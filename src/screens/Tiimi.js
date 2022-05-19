import '../styles/tiimistyles.css'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom'

// kuvat 
import tiimi from '../images/tiimikuva.jpeg'
import Enni from '../images/enniVapaa.jpeg'
import EnniLava from '../images/enniLava.jpeg' 
import Henna2 from '../images/henna2.jpeg'
import Henna3 from '../images/henna3.jpeg'
import Inga from '../images/inga.jpeg'
import Inga2 from '../images/inga2.jpeg'
import Kia3 from '../images/kia3.jpeg'
import Kia4 from '../images/kia4.jpeg'
import Nea from '../images/nea.jpeg'
import Nea2 from '../images/nea2.jpeg'
import Satu from '../images/satu1.jpeg'
import Satu2 from '../images/satu22.jpeg'

const Tiimi = () => {
    return (
        <Container fluid className="tiimiPage">
            <Row className="tiimiHeader">
                <Col className="headerColumn">
                    <h1>Team Tähtikunto</h1>
                    {/*<img alt="Team Tähtikunto" />*/}
                    <p>
                        Team Tähtikunto on alunperin fitness-, fysiikka- ja kehonrakennuskilpailuja varten perustettu kisatiimi. Tähtikunnon valmennuksessa olevat kilpailijat edustavat tiimiä valitsemassaan lajissa ja lisäksi tiimiin kuuluu tavallisia kuntoilijoita.<br />
                        Tiimille järjestetään yhteisiä treenejä, tapaamisia, poseerausharjoituksia ja leirejä, joissa hiotaan asentoja ja esiintymistä. Kilpailuihin urheilijoille järjestetään huolto ja stailaus eri alojen ammattilaisista koostuvasta yhteistyöverkostostamme.<br />
                    </p>
                    <p><Link exact to="/yhteydenotto" className="haluatko">Haluatko sinäkin Tähtikuntoon?</Link></p>
                </Col>
            </Row>

            <Row className="enni tiimi" >
                <Col sm={12}>
                    <h4>Enni</h4>
                    <h5>Urheilija / poseerausvalmentaja</h5>
                </Col>
                <Col sm={12}>
                    <img src={Enni} alt="Enni" className="tiimiKuva kuvaYksi" />
                    <img src={EnniLava} alt="Enni, NFE 2021" className="tiimiKuva kuvaKaksi" />
                </Col>
                <Col className="teksti" sm={12}>
                    <p>
                        Moi! Oon Enni, 23-vuotias Bikini Fitness -urheilija Vantaalta. Mun arkea rytmittää treenaamisen lisäksi fysioterapeutin opinnot. Olen myös kouluttautunut personal traineriksi. Mikan valmennuksessa oon ollu vuodesta 2017.<br />
                        Oon pienestä pitäen harrastanut liikuntaa. Ennen kun aloin käymään salilla, kilpailin cheerleadingissa. Loukkaantumisen takia jouduin lopettamaan cheerleadingin ja sen jälkeen eksyin salille. Innostuin treenaamisesta ja kilpaurheilutaustan takia kilpailutavoite alkoi pyöriä mielessä aika ajoin ja erityisesti kilpaileminen Bikini Fitnessissä. Kisasin ensimmäistä kertaa vuonna 2019.<br />
                        Bikini Fitness, niin kuin muutkin fysiikkalajit, vaatii todella paljon. Tää laji on kuitenkin antanut mulle ihan valtavasti. Oon oppinut tosi paljon itsestäni ja kehittynyt fysiikan lisäksi vähintään yhtä paljon henkisesti. On ihan mielettömän palkitsevaa nähdä oma kehitys ja etenkin se paketti, minkä saa kovan työn jälkeen tuotua lavalle.
                    </p>
                </Col>
            </Row>

            <Row className="henna tiimi2">
                <Col sm={12}>
                    <h4>Henna</h4>
                    <h5>Huoltaja / meikkaaja</h5>
                </Col>
                <Col sm={12}>
                    <img src={Henna2} alt="Henna" className="tiimiKuva kuvaYksi" />
                    <img src={Henna3} alt="Henna" className="tiimiKuva kuvaKaksi" />
                </Col>
                <Col className="teksti" sm={12}>
                    <p>
                        Moi! Olen Henna ja toimin tiimin meikkaajana ja huoltajana.<br />
                        Valmistuin 2018 meikkaajaksi ja rakastuin silloin välittömästi näyttävien ilta- ja juhlameikkien maailmaan. Kisameikit ovat siis sataprosenttisesti minun heiniäni! Seuraan jatkuvasti uusia meikkitrendejä ja minulta onnistuu luovat ja erikoisemmatkin työt.<br />
                        Myös treenaaminen on iso osa elämääni vaikka kisasuunnitelmia ei lajin parissa olekaan tällä hetkellä.<br />
                        Team Tähtikunnon matkaan lähdin 2019 ja on ollut ihan huippua olla osa tiimin luovaa puolta!
                    </p>
                </Col>
            </Row>

            <Row className="nea tiimi">
                <Col sm={12}>
                    <h4>Nea</h4>
                </Col>
                <Col sm={12}>
                    <img src={Nea} alt="Nea" className="tiimiKuva kuvaYksi" />
                    <img src={Nea2} alt="Nea ja Mika" className="tiimiKuva kuvaKaksi" />
                </Col>
                <Col className="teksti" sm={12}>
                    <p>
                        Mika, ja sitä kautta säännöllinen voimaharjoittelu on ollut elämässäni yli kahdeksan vuotta. Ulkokuorikin on muuttunut: Olkapäät ovat pyöristyneet kauniisti, rinta kiristynyt ja vyötärö kaventunut. Voimaa on tullut rutkasti lisää. Olen kolmekymppiseksi vallan hyvässä kunnossa, vaikka en katukuvassa kiinnittäkään juuri huomioita kropallani. Suurin muutos on kuitenkin tapahtunut sisäisesti.<br />
                        Salille ja Mikan hoiviin minut toi niin sanotut pinnalliset syyt. Aloin treenata, koska halusin, että kehoni näyttää hyvältä, että se on ihailun kohde. Kun jatkoin treenaamista, kehoni alkoi olla vähemmän kohde, objekti, jota arvioidaan, ja siitä tuli subjekti, tekijä, itse toimija. Tämä voimaantumisen tunne vie minut salille vuosi toisensa jälkeen säännöllisesti.<br />
                        Treeni ei koskaan ole ikävää, vaikka aina ei niin hirveästi huvittaisikaan treenata. Vuosien treenaaminen ammattilaisen kanssa on opettanut minulle erittäin hyvän tekniikan, joten minun on helppo treenata missä vain. Tiedän aina, miltä lihaksessa pitää tuntua, että treeni menee perille.  Huonoina päivinä treeni on minulle omaa aikaa, lempeä hetki itsen kanssa, tai keino purkaa vaikeita tunteita, kuten turhautumista, kiukkua, epätoivoa hallitusti ja rakentavasti. Hyvinä päivinä se on kuin huumetta, joka luo kehoon sellaisen hormonikoktailin, että sen tuntee fyysisesti. Se saa minut tuntemaan itseni vahvaksi, kauniiksi ja arvostettavaksi joka päivä.
                    </p>
                </Col>
            </Row>

            <Row className="kia tiimi2">
                <Col sm={12}>
                    <h4>Kia</h4>
                </Col>
                <Col sm={12}>
                    <img src={Kia3} alt="Kia" className="tiimiKuva kuvaYksi" />
                    <img src={Kia4} alt="Kia" className="tiimiKuva kuvaKaksi" />
                </Col>
                <Col className="teksti" sm={12}>
                    <p>
                        Moikka! Olen 17-vuotias tyttö Karkkilasta. Urheilu on aina ollut osa elämää ja arkea, lukuisissa muodoissa. Olen pienempänä harrastanut vaikka mitä, mutta voimistelulajit ovat olleet niistä mieleenpainuvimpia.<br />
                        Kun muutama vuosi sitten lopetin voimistelun, aloin miettimään itselleni oikeaa lajia, koska aloin käydä salilla ja tykästyin siihen ihan toden teolla. Halusin viedä asiaa eteempäin ja kiinnostuin fitneksestä, joten liityin tiimiin. Olen käynyt salilla ja kuulunut tiimiin noin vuoden verran. Kisalavalle nouseminen on haaveissa.<br />
                        Opiskelen tällä hetkellä lukiossa ja tästä on tarkoitus jatkaa vielä ammattikorkeakouluun kun oikea ala löytyy 😁🙏. Minulla on koira, jonka kanssa tulee lenkkeiltyä jonkun verran + muiden perheenjäsenten sekä kavereiden kanssa treenailtua yhdessä silloin tällöin ❤️.
                    </p>
                </Col>
            </Row>

            <Row className="inga tiimi">
                <Col sm={12}>
                    <h4>Inga</h4>
                </Col>
                <Col sm={12}>
                    <img src={Inga} alt="Inga" className="tiimiKuva kuvaYksi" />
                    <img src={Inga2} alt="Inga" className="tiimiKuva kuvaKaksi" />
                </Col>
                <Col className="teksti" sm={12}>
                    <p>
                        Olen 33-vuotias nainen, 2 lapsen äiti ja kotoisin Virosta. Työksi teen lähihoitajan hommia.<br />
                        Itsenäisesti ennen Mikan tapaamista olin treenanut noin 5 vuotta kuntosalilla ja haaveillut bikini fitness-lajissa kisaamisesta, mutta mulla oli jotain pelkoja.<br />
                        Vuosi sitten päätin, että nyt toteutan mun unelmat ja liityin Team Tähtikuntoon. Kehitys on ollut aivan mieletön ja keväällä on kauan odotetut ensimmäiset kisat.
                    </p>
                </Col>
            </Row>

            <Row className="satu tiimi2">
                <Col sm={12}>
                    <h4>Satu</h4>
                </Col>
                <Col sm={12}>
                    <img src={Satu} alt="Satu" className="tiimiKuva kuvaYksi" />
                    <img src={Satu2} alt="Satu" className="tiimiKuva kuvaKaksi" />
                </Col>
                <Col className="teksti" sm={12}>
                    <p>
                        Olen koko ikäni taistellut ylipainoa vastaan, joten salitreeni liittyy itselläni vahvasti painonhallintaan.<br />
                        Nyt lähes 50 vuotiaana haluan myös pitää lihaskuntoa yllä ja välttää loukkaantumisia, joten salitreeni on minulle muutenkin kuin ulkonäkösyistä tärkeää.<br />
                        Työ ja kolme lasta pitivät minut kiireisenä pitkään, enkä ehtinyt tai jaksanut juurikaan treenata yli kymmeneen vuoteen. Kun nuorimmaiseni alkoi itsenäisesti kulkemaan omissa harrastuksissaan, päätin, että nyt on minun vuoroni aloittaa omat harrastukseni. Yhtäkkiä huomasin ottaneeni "vahingon takaisin", kun viikon treenitunteja kertyi jopa yli 20.<br />
                        Työskentelen tutkijana ja työaikani ovat joustavat. Tästä johtuen pääsen treenaamaan parhaimmillaan kahdesti päivässä. Tällä hetkellä vapaa-aikaani kuluu pääosin tanssitreeneissä ja salilla, joka nollaa hyvin päässä risteilevät työasiat tai arkiset murheet. Suurin haasteeni on, että malttaisin levätä riittävästi. Onneksi Mika on toiminut järjen äänenä ja jarruna tarvittaessa.
                    </p>
                </Col>
            </Row>

        </Container>
    )
}

export default Tiimi
