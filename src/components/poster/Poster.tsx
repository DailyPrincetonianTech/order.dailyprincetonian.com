import React from 'react';
import styles from './gear.module.css';
import PosterItem from './PosterItem';

export default function Gear() {
    return (
        <div className={styles.main + " container-fluid d-grid gap-3 pt-3 px-3"}>
            <div className="row d-none d-lg-block">
                <div className="col-9 mx-auto">
                    <h5 className={styles.textOrange + " text-center text-uppercase fw-bold"}>
                        Blair Arch Poster
                    </h5>
                    <p className="fs-6">
                        Accepting orders online and on campus until August 30. Preorder online today and receive a 20% discount.
                        Only available for on campus pickup-- no off-campus delivery.
                    </p>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-12">
                    <PosterItem name="Blair Arch Poster" slug={"poster"} image="https://prince-web-assets.s3.amazonaws.com/order.dailyprincetonian.com/blair-poster.png" price={14.99}
                        description={"20% Discount - $14.99. 24\"x18\" poster. Make sure to fill out the google form below after ordering."}
                        buttonText={"Order Form"} buttonHref="https://docs.google.com/forms/d/e/1FAIpQLSd1R0JBwucIBlDMXyKM7V51RglO5xXEds0PPr4swOpNBkbeUQ/viewform" />
                </div>
            </div>
        </div>
    )
}