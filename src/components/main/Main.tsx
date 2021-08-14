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
                        <Link to="/poster" className="btn btn-dark text-uppercase fs-5">Order Now</Link>
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
                        <a role="button" className="btn btn-secondary text-uppercase fs-5"  target="_blank" rel="noopener noreferrer">Closed</a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}