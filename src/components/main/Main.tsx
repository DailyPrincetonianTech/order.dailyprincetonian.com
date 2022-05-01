import React from 'react';
import styles from './main.module.css';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className={styles.main + " container-fluid d-grid gap-3 pt-3 px-3"}>
            <div className="row pb-3">
                <div className="col-12 col-md-6">
                    <div className="row d-flex align-items-center">
                    </div>
                </div>
                <div className = {styles.textOrange+ " text-center text-uppercase fw-bold"}>
                    OUR SPRING 2022 COLLECTION
                </div>
            </div>
            <div className="row pb-2">
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
                        Masthead Tote
                    </h4>
                    <p className="fs-5">
                        Accepting orders online and on campus until May 26th. Preorder online today and receive a 20% discount.
                        Only available for on campus pickup-- no off-campus delivery.
                    </p>
                    <div className="d-grid col-8 col-md-4 mx-auto pb-3 pb-md-auto">
                        <Link to="/poster" className="btn btn-dark disabled text-uppercase fs-5">Closed</Link>
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
                        Prince Pins
                    </h4>
                    <p className="fs-5">
                        Accepting orders online and on campus until May 26th. Preorder online today and receive a 20% discount.
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
                        Vol.1 No.4 Long Sleeve
                    </h4>
                    <p className="fs-5">
                        Until supplies last, the ‘Prince’ will be accepting orders for our
                        Vol.1 No.4 Long Sleeve. The back design dates back to The Daily
                        Princetonian's 4th earliest paper copy, which was published on October 5, 1876.
                    </p>
                    <div className="d-grid col-8 col-md-4 mx-auto">
                    <button className="btn btn-secondary disabled text-uppercase fs-5">Closed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}