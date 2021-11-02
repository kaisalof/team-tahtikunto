import '../styles/etusivustyles.css'
import React from 'react'

// kuvat
import MikanKuva from '../images/mika.jpeg'
import OhjausHenna from '../images/ohjausHenna.jpeg'
import Inga from '../images/inga1.jpg'
import Enni from '../images/enni.jpeg'
import Henna from '../images/henna.jpeg'

import { Container, Row, Col } from 'react-bootstrap'

const Etusivu = () => {
    return (
        <Container fluid className="etusivu">
            <Row className="firstRow" >
                <Col lg={true}  sm={12} className="firstText">
                    <p>Team Tähtikunto on vuonna 2004 toimintansa aloittanut yksityinen personal training -yritys. Tarjoamme palveluita niin tavallisille kuntoilijoille aloittelijoista kokeneisiin kuin kilpailuihin tähtääville. Palvelumme sisältävät myös yksilöiden ja ryhmien valmennuksen yrityksissä.</p>
                </Col>
                <Col lg={true}  sm={12} >
                    <img src={MikanKuva} alt="Mika" className="etusivuKuva" />
                </Col>
            </Row>

            <Row className="secondRow">
                <Col lg={6} sm={12} className="secondImage">
                    <img src={OhjausHenna} alt="OhjausHenna" className="tokaRiviKuva" />
                </Col>
                <Col  lg={6} sm={12} className="secondText">
                    <p>Meiltä saat kaikki pt-palvelut ammattitaidolla ja monen kymmenen vuoden kokemuksella. Teemme jokaiselle asiakkaalle yksilölliset ohjelmat, koska sekä ihmiset että tavoitteet ovat erilaisia. Harjoittelu ja ravinto ovat kokonaisvaltaisen hyvinvoinnin perusta. Kuntoilusta ja ruoasta pitää nauttia tavoitteesta riippumatta. Terveelliset elämäntavat auttavat jaksamaan arjessa paremmin sekä ylläpitävät parempaa vastustuskykyä.</p>
                </Col>
            </Row>

            <Row className="thirdRow">
            <Col md={4} sm={12}>
                    <img src={Inga} alt="Inga" className="thirdImages" />
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
