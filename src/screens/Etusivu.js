import '../styles/etusivustyles.css'
import React from 'react'

// kuvat
import MikanKuva from '../images/mika.jpeg'
import HennaSoutu from '../images/hennasoutu.jpeg'
import Enni from '../images/enni.jpeg'
import Jasmin from '../images/jasminHauis.jpeg'
import Henna from '../images/henna.jpeg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Etusivu = () => {
    return (
        <Container fluid className="etusivu">
            <Row className="firstRow" >
                <Col lg={true} md={7} className="firstText">
                    <p>Team Tähtikunto on vuonna 2004 toimintansa aloittanut yksityinen personal training -yritys. Tarjoamme palveluita niin tavallisille kuntoilijoille aloittelijoista kokeneisiin kuin kilpailuihin tähtääville. Palvelumme sisältävät myös yksilöiden ja ryhmien valmennuksen yrityksissä.</p>
                </Col>
                <Col lg={true} md={2} >
                    <img src={MikanKuva} alt="Mika" className="etusivuKuva" />
                </Col>
            </Row>

            <Row className="secondRow">
                <Col xl={5} lg={6} md={5} className="secondImage">
                    <img src={HennaSoutu} alt="HennaSoutu" className="tokaRiviKuva" />
                </Col>
                <Col xl={7} lg={6} md={7} className="secondText">
                    <p>Meiltä saat kaikki pt-palvelut ammattitaidolla ja monen kymmenen vuoden kokemuksella. Teemme jokaiselle asiakkaalle yksilölliset ohjelmat, koska sekä ihmiset että tavoitteet ovat erilaisia. Harjoittelu ja ravinto ovat kokonaisvaltaisen hyvinvoinnin perusta. Kuntoilusta ja ruoasta pitää nauttia tavoitteesta riippumatta. Terveelliset elämäntavat auttavat jaksamaan arjessa paremmin sekä ylläpitävät parempaa vastustuskykyä.</p>
                </Col>
            </Row>

            <Row className="thirdRow">
            <Col md={4} sm={12}>
                    <img src={Jasmin} alt="Jasmin" className="thirdImages" />
                </Col>
                <Col md={4} sm={12}>
                    <img src={Enni} alt="Enni" className="thirdImages" />
                </Col>                
                <Col md={4} sm={12}>
                    <img src={Henna} alt="Henna" className="thirdImages" />
                </Col>
            </Row>
        </Container>

    )
}

export default Etusivu
