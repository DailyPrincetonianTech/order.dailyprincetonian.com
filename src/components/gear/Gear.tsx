import React from 'react';
import styles from './gear.module.css';
import GearItem from './GearItem';

export default function Gear() {
    return (
        <div className={styles.main + " container-fluid pt-3 pt-md-5 px-2 px-md-5 pb-5"}>
            <div className="row d-none d-lg-block">
                <div className="col-9 mx-auto">
                    <h5 className={styles.textOrange + " text-center text-uppercase fw-bold"}>
                        1901 Nameplate Edition Crewneck and Tote
                    </h5>
                    <p className="fs-6">
                        Until August 15th, the ‘Prince’ will be accepting orders for our
                        1901 Edition crewneck and tote. The design dates back to The Daily
                        Princetonian nameplate that was introduced on May 11th, 1901.
                        At the time, a copy of the print paper cost three cents.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <GearItem name="1901 Crewneck" slug={"crewneck"} image="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/crewneck.png" price={24} shipping={3}
                        description={"Be sure to fill out the Google Form below to select your crewneck size!"}
                        buttonText={"Select Size"} buttonHref="https://docs.google.com/forms/d/e/1FAIpQLSdy8LuRg8KrGNY6I-ZEfS2MlWFnZE8eKOoGlcGrmV3cTlRkjA/viewform"/>
                </div>
                <div className="col-12 col-lg-6">
                    <GearItem name="1901 Tote" slug={"tote"} image="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/tote.png" price={14} shipping={3} />
                </div>
            </div>
        </div>
    )
}