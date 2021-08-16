import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

interface GearItemProps {
    name: string;
    slug: string;
    image: string;
    price: number;
    shipping?: number;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function GearItem(props: GearItemProps) {
    const { name, slug, image, price, shipping, description} = props;
    return (
        <div>
            <img src={image} alt={name} className="img-fluid" style={{ maxHeight: 600 }} />
            <p>{name}</p>
            <p>${price}{ shipping && " + $" + shipping + " shipping"}</p>
            <p>{description}</p>
            <div className="d-grid gap-2 col-7 col-md-3 mx-auto">
            <button type="button" className="btn btn-secondary disabled text-uppercase">
                    Closed
                </button> 
            </div>
            <div className="modal fade" id={`${slug}Modal`} aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${slug}ModalLabel`}>{name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body" id={`${slug}ModalBody`}>
                            <p>${price + (shipping ? shipping : 0)} USD</p>
                            <p>{description}</p>
                            <PayPalButton
                                amount={price + (shipping ? shipping : 0)}
                                style={{
                                    shape: 'rect',
                                    color: 'silver',
                                    layout: 'vertical',
                                    label: 'paypal',
                                }}
                                onError={(error: any) => {
                                    console.log(error);
                                }}
                                options={{
                                    clientId: "AeiJZG5XN-aJrlY7i94_IPWTQkzNwQze_KPb-5uNuvp4Lrh4SwAn4BwqYGFOmPg7TTN8NXf-K51_QwqcODUCTION_CLIENT_ID",
                                    currency: "USD",
                                }}
                                onSuccess={(details: any, data: any) => {
                                    alert("Transaction successfully completed by " + details.payer.name.given_name + ". Please, close the PayPal modal" + (name === "1901 Crewneck" ? " and submit your shirt size using the \"SELECT SIZE\" button" : "") + ".");
                                }}
                                onApprove={(data: any, action: any) => {
                                    // Capture the funds from the transaction
                                    return action.order.capture().then(function(details: any) {
                                      // Show a success message to your buyer
                                      console.log("Transaction completed by " + details.payer.name.given_name);
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}