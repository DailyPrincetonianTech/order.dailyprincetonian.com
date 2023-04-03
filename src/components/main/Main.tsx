import React from "react";
import styles from "./main.module.css";
import Item from "./Item";

export default function Main() {
  const [isStudent, setIsStudent] = React.useState<boolean>(false);
  return (
    <div className={styles.main + " container-fluid"}>
      <div className="container d-grid gap-3 pt-3 px-3">
        <div className={styles.customerButtons}>
          <span>I am..&nbsp;</span>
          <div
            className="btn-group"
            role="group"
            aria-label="Select customer type"
          >
            <button
              type="button"
              onClick={() => setIsStudent(true)}
              className={"btn btn-outline-dark " + (isStudent ? "active" : "")}
            >
              A student
            </button>
            <button
              type="button"
              onClick={() => setIsStudent(false)}
              className={"btn btn-outline-dark " + (!isStudent ? "active" : "")}
            >
              An alum / non-student
            </button>
          </div>
        </div>
        <hr />
        <Item
          isStudent={isStudent}
          name="Vol.1 No.4 Tote"
          description={[
            [
              "An exclusive 2022 gear item, this tote bag is based on ",
              <em>The Daily Princetonian's</em>,
              " 4th earliest paper copy, which was published on October 5th, 1876.",
            ],
            "Accepting orders online and on campus until April 30th. Only available for on campus pickup until April 30th—no off-campus delivery.",
            isStudent
              ? "**You must be a current student (up to the Class of 2023)."
              : "**Your contributions help subsidize the cost for current students. Thank you for your generosity.",
            "A friendly reminder that items can only be picked up on-campus until May 9th.",
          ]}
          imageURLs={[
            "https://assets.dailyprincetonian.com/order.dailyprincetonian.com/tote-bag.png",
          ]}
          prices={[{ student: "$17.50", nonstudent: "$25" }]}
          buttonURLs={[
            {
              student: "https://buy.stripe.com/eVa3etdhReZi0es5kC",
              nonstudent: "https://buy.stripe.com/9AQ7uJ6Tt04obXa14l",
            },
          ]}
        />
        <hr />
        
        <Item
          isStudent={isStudent}
          name="VOL.1 NO.4 LONG-SLEEVE"
          names={["S", "M", "L", "XL"]}
          description={[
            [
              "An exclusive 2022 gear item, this long-sleeve is based on ",
              <em>The Daily Princetonian's</em>,
              " 4th earliest paper copy, which was published on October 5th, 1876. It comes in small, medium, large, and extra-large.",
            ],
            isStudent
              ? "**You must be a current student (up to the Class of 2023)."
              : "**Your contributions help subsidize the cost for current students. Thank you for your generosity.",
            "A friendly reminder that items can only be picked up on-campus until May 9th.",
          ]}
          imageURLs={[
            "https://assets.dailyprincetonian.com/order.dailyprincetonian.com/long-sleeve-front.png",
            "https://assets.dailyprincetonian.com/order.dailyprincetonian.com/long-sleeve-back.png",
          ]}
          prices={[
            { student: "$20", nonstudent: "$30" },
            { student: "$20", nonstudent: "$30" },
            { student: "$20", nonstudent: "$30" },
            { student: "$20", nonstudent: "$30" },
          ]}
          buttonURLs={[
            {
              student: "https://buy.stripe.com/5kA16la5FaJ28KY9B0",
              nonstudent: "https://buy.stripe.com/cN2eXbdhRdVe9P2bJ7",
            },
            {
              student: "https://buy.stripe.com/cN202h6Tt7wQ3qE00n",
              nonstudent: "https://buy.stripe.com/6oE6qF1z93gAd1eeVi",
            },
            {
              student: "https://buy.stripe.com/28o3etfpZ3gAaT6dRb",
              nonstudent: "https://buy.stripe.com/aEUdT70v5bN6bXa5kG",
            },
            {
              student: "https://buy.stripe.com/dR68yN7XxbN6bXabJ1",
              nonstudent: "https://buy.stripe.com/4gw6qF1z9aJ20es9AU",
            },
          ]}
        />
      </div>
    </div>
  );
}
