import React from "react";
import styles from "./main.module.css";

type Price = {
  student: string;
  nonstudent: string;
};

type ButtonURL = {
  student: string;
  nonstudent: string;
};

type ItemProps = {
  isStudent: boolean;
  name: string;
  names?: string[];
  description: any[];
  imageURLs: string[];
  prices: Price[];
  buttonURLs: ButtonURL[];
  caption?: string;
};

export default function Item(props: ItemProps) {
  const {
    isStudent,
    name,
    names,
    description,
    imageURLs,
    prices,
    buttonURLs,
    caption,
  } = props;

  const chosenPrice = isStudent ? prices[0].student : prices[0].nonstudent;
  let orderButton = (
    <div className="mx-auto">
      <a
        className={styles.orderBtn + " btn btn-dark text-uppercase mb-3"}
        target="_blank"
        rel="noreferrer"
        href={isStudent ? buttonURLs[0].student : buttonURLs[0].nonstudent}
      >
        Order Now ({chosenPrice})
      </a>
    </div>
  );
  if (buttonURLs.length > 1 && names) {
    // button group (dropdown)
    //buttonURLs[i]
    console.log(buttonURLs);
    orderButton = (
      <div className="btn-group">
        <button
          type="button"
          className={styles.orderBtn + " btn btn-dark dropdown-toggle text-uppercase mb-3"}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ORDER
        </button>
        <div className="dropdown-menu">
          {buttonURLs.map((buttonURLObj, i) => {
            console.log(i);
            const buttonURL = isStudent
              ? buttonURLObj.student
              : buttonURLObj.nonstudent;
            const chosenPrice = isStudent
              ? prices[i].student
              : prices[i].nonstudent;

            return (
                <a
                  className={styles.orderBtn + " btn btn-dark text-uppercase dropdown-item"}
                  href={buttonURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {names[i]} ({chosenPrice})
                </a>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="row" key={name}>
      <div className="col-12 col-md-4">
        <div className="row d-flex flex-column align-items-center">
          {imageURLs.map((imageURL, i) => (
            <div
              key={name + "_i" + i}
              className={"p-2"}
            >
              <img
                src={imageURL}
                alt={name}
                className="img-fluid"
                width="75%"
              />
            </div>
          ))}
        </div>
        {caption && (
          <div className="row">
            <span>{caption}</span>
          </div>
        )}
      </div>
      <div className="col-12 col-md-8 align-self-center order-first order-md-2">
        <h4
          className={styles.textOrange + " text-center text-uppercase fw-bold"}
        >
          {name}
        </h4>
        {description.map((p, i) => (
          <p key={name + "_p" + i}>{p}</p>
        ))}
        {orderButton}
      </div>
    </div>
  );
}
