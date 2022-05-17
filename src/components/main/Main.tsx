import React from "react";
import styles from "./main.module.css";
import { Link } from "react-router-dom";

export default function Main() {
  const [student, setStudent] = React.useState<boolean>(true);
  return (
    <div className={styles.main + " container-fluid d-grid gap-3 pt-3 px-3"}>
      <div>
        <span>I am a...&nbsp;</span>
        <div
          className="btn-group"
          role="group"
          aria-label="Select customer type"
        >
          <button
            type="button"
            onClick={() => setStudent(true)}
            className={"btn btn-outline-secondary " + (student ? "active" : "")}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setStudent(false)}
            className={"btn btn-outline-secondary " + (!student ? "active" : "")}
          >
            Alumni / Non-student
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6">
              <img
                src="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/tote-bag.png"
                alt="Tote"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 align-self-center order-first order-md-1">
          <h4
            className={
              styles.textOrange + " text-center text-uppercase fw-bold"
            }
          >
            Vol.1 No.4 Tote
          </h4>
          <p>
            An exclusive 2022 gear item, this tote bag is based on{" "}
            <em>The Daily Princetonian's</em> 4th earliest paper copy, which was
            published on October 5th, 1876.
          </p>
          <p>
            Accepting orders online and on campus until May 26th. Only available
            for on campus pickup until May 26th&mdash;no off-campus delivery.
          </p>
          <div className="d-grid col-8 col-md-4 mx-auto">
            <Link
              to="https://buy.stripe.com/eVa3etdhReZi0es5kC"
              className="btn btn-dark text-uppercase fs-5"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="row pb-3">
        <div className="col-12 col-md-6">
          <div className="row d-flex align-items-center"></div>
        </div>
      </div>
      <div className="row pb-2">
        <div className="col-12 col-md-6">
          <div className="row d-flex align-items-center">
            <div className="col-12">
              <img
                src="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/tote-bag.png"
                alt="Blair Poster"
                className="img-fluid"
                width="75%"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 align-self-center order-first order-md-1">
          <h4
            className={
              styles.textOrange + " text-center text-uppercase fw-bold"
            }
          >
            Masthead Tote
          </h4>
          <p>
            Accepting orders online and on campus until May 26th. Preorder
            online today and receive a 20% discount. Only available for on
            campus pickup-- no off-campus delivery.
          </p>
          <div className="d-grid col-8 col-md-4 mx-auto pb-3 pb-md-auto">
            <Link to="/poster" className="btn btn-dark text-uppercase fs-5">
              Order Now
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="row pb-3">
        <div className="col-12 col-md-6">
          <div className="row d-flex align-items-center">
            <div className="col-12">
              <img
                src="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/pin-prince-tiger.png"
                alt="Blair Poster"
                className="img-fluid"
                width="38.3%"
              />
              <img
                src="https://assets.dailyprincetonian.com/order.dailyprincetonian.com/pin-newspaper.png"
                alt="Blair Poster"
                className="img-fluid"
                width="36%"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 align-self-center order-first order-md-1">
          <h4
            className={
              styles.textOrange + " text-center text-uppercase fw-bold"
            }
          >
            Prince Pins
          </h4>
          <p>
            Accepting orders online and on campus until May 26th. Preorder
            online today and receive a 20% discount. Only available for on
            campus pickup-- no off-campus delivery.
          </p>
          <div className="d-grid col-8 col-md-4 mx-auto pb-3 pb-md-auto">
            <Link to="/poster" className="btn btn-dark text-uppercase fs-5">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
