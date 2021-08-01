import React from 'react';
import tote from '../../img/tote.png';
import crewneck from '../../img/crewneck.png';
import styles from './main.module.css';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className={styles.main + " container-fluid pt-3 pt-md-5 px-2 px-md-5"}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={crewneck} alt="Crewneck" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={tote} alt="Tote" className="img-fluid" />
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
                        <Link to="/gear" className="btn btn-dark text-uppercase fs-5">Order Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}