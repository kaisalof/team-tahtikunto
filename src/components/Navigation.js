import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

//Kun navia painetaan, scrollaa sivu valitun sivun yläosaan
const Navigation = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const Close = () => setClick(false)

    return (
            <div id="nav" className={click ? "main-container" : ""} onClick={() => Close()}>
                <nav className="navigation" onClick={(e) => e.stopPropagation()}>
                    <div className="nav-container">
                        <ul className={click ? "nav-menu active" : "nav-menu"} >
                            <li className="links">
                                <Link
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="linkTo"
                                    onClick={click ? handleClick : null}
                                >
                                    Etusivu
                                </Link>
                            </li>
                            <li className="links">
                                <Link
                                    exact
                                    to="/mika"
                                    activeClassName="active"
                                    className="linkTo"
                                    onClick={click ? handleClick : null}
                                >
                                    Mika
                                </Link>
                            </li>
                            <li className="links">
                                <Link
                                    exact
                                    to="/palvelut"
                                    activeClassName="active"
                                    className="linkTo"
                                    onClick={click ? handleClick : null}
                                >
                                    Palvelut
                                </Link>
                            </li>
                            <li className="links">
                                <Link
                                    exact
                                    to="/tiimi"
                                    activeClassName="active"
                                    className="linkTo"
                                    onClick={click ? handleClick : null}
                                >
                                    Tiimi
                                </Link>
                            </li>
                            <li className="links">
                                <Link
                                    exact
                                    to="/galleria"
                                    activeClassName="active"
                                    className="linkTo"
                                    onClick={click ? handleClick : null}
                                >
                                    Galleria
                                </Link>
                            </li>
                            <li className="links">
                                <Link
                                    exact
                                    to="/yhteydenotto"
                                    activeClassName="active"
                                    className="linkTo"
                                    id="yhteydenotto"
                                    onClick={click ? handleClick : null}
                                >
                                    Yhteydenotto
                                </Link>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default Navigation