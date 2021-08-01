import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

interface GearItemProps {
    name: string;
    slug: string;
    image: string;
    price: number;
    shipping: number;
}

export default function GearItem(props: GearItemProps) {
    const { name, slug, image, price, shipping } = props;
    return (
        <>
            <div>
                <img src={image} alt={name} style={{ maxHeight: 600 }} />
                <p>{name}</p>
                <p>${price} + ${shipping} shipping</p>
                <div className="d-grid col-4 mx-auto">
                    <button type="button" className="btn btn-dark text-uppercase" data-bs-toggle="modal" data-bs-target={`#${slug}Modal`}>
                        Order Now
                    </button>
                </div>
            </div>
            <div className="modal fade" id={`${slug}Modal`} aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${slug}ModalLabel`}>{name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body" id={`${slug}ModalBody`}>
                            <p>{name}: ${price + shipping} USD</p>
                            <PayPalButton
                                amount={price + shipping}
                                options={{
                                    clientId: "AeiJZG5XN-aJrlY7i94_IPWTQkzNwQze_KPb-5uNuvp4Lrh4SwAn4BwqYGFOmPg7TTN8NXf-K51_Qwqc",
                                    currency: "USD",
                                }}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}