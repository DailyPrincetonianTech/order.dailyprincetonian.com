import React from 'react';
import tote from '../../img/tote.png';
import crewneck from '../../img/crewneck.png';
import styles from './main.module.css';

export default function Main() {
    return (
        <div className={styles.main + " container-fluid d-flex pt-3"}>
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
                    <h1 className="text-center">
                        1901 NAMEPLATE EDITION CREWNECK AND TOTE
                    </h1>
                    <p>
                        Until August 15th, the ‘Prince’ will be accepting orders for our
                        1901 Edition crewneck and tote. The design dates back to The Daily
                        Princetonian nameplate that was introduced on May 11th, 1901.
                        At the time, a copy of the print paper cost three cents.
                    </p>
                </div>
            </div>
        </div>
    )
}