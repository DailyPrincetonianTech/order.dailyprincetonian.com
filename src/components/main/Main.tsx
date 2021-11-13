import React from 'react';
import styles from './main.module.css';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className={styles.main + " container-fluid d-grid gap-3 pt-3 px-3"}>
            <div className="row pb-3">
                <div className="col-12 col-md-6">
                    <div className="row d-flex align-items-center">
                        <div className="col-12">
                            <img src="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/framed-front-page.jpg"
                                alt="Blair Poster" className="img-fluid" width="75%" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 align-self-center order-first order-md-1">
                    <h4 className={styles.textOrange + " text-center text-uppercase fw-bold"}>
                        Framed Princeton Football Bonfire Daily Princetonian Interest Form
                    </h4>
                    <p className={styles.responsiveText}>
                        Celebrate Princeton Football’s victory over Harvard and Yale this season with a framed front page of the Daily Princetonian featuring the bonfire and Princeton Football Team! In keeping with ‘Prince’ tradition, we are excited to offer this special piece of history to Princeton Football players, staff, fans, and alumni.  Please see a sample on the left (this is NOT the final/official product)
                    </p>
                    <p className={styles.responsiveText}>
                        Sign up here to receive more information!
                    </p>
                    <p className={styles.responsiveText}>
                        The framed front page will display the Daily Princetonian’s coverage of bonfire and likely cost between $75-100 to cover printing and framing expenses.
                    </p>
                    <p className={styles.responsiveText}>
                        We plan to distribute the frames around the end of November/early December (making this the perfect the Holiday gift too!).
                        Please email <a href="mailto:john@dailyprincetonian.com">john@dailyprincetonian.com</a> if you have any questions or concerns.
                    </p>
                    <div className="d-grid col-8 col-md-4 mx-auto pb-3 pb-md-auto">
                        <a href="https://forms.gle/PvY6mtehvheN73Y6A" className="btn btn-dark text-uppercase fs-5">Sign Up</a>
                    </div>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-12 col-md-6">
                    <div className="row d-flex align-items-center">
                        <div className="col-12">
                            <img src="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/blair-poster.png"
                                alt="Blair Poster" className="img-fluid" width="75%" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 align-self-center order-first order-md-1">
                    <h4 className={styles.textOrange + " text-center text-uppercase fw-bold"}>
                        Blair Arch Poster
                    </h4>
                    <p className="fs-5">
                        Accepting orders online and on campus until August 30. Preorder online today and receive a 20% discount.
                        Only available for on campus pickup-- no off-campus delivery.
                    </p>
                    <div className="d-grid col-8 col-md-4 mx-auto pb-3 pb-md-auto">
                        <Link to="/poster" className="btn btn-dark disabled text-uppercase fs-5">Closed</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <img src="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/crewneck.png"
                                alt="Crewneck" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/tote.png"
                                alt="Tote" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 align-self-center order-first order-md-1">
                    <h4 className={styles.textOrange + " text-center text-uppercase fw-bold"}>
                        1901 Nameplate Edition Crewneck and Tote
                    </h4>
                    <p className="fs-5">
                        Until August 15th, the ‘Prince’ will be accepting orders for our
                        1901 Edition crewneck and tote. The design dates back to The Daily
                        Princetonian nameplate that was introduced on May 11th, 1901.
                        At the time, a copy of the print paper cost three cents.
                    </p>
                    <div className="d-grid col-8 col-md-4 mx-auto">
                    <button className="btn btn-secondary disabled text-uppercase fs-5">Closed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}