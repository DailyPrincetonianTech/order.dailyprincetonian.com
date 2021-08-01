import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

interface GearItemProps {
    name: string;
    slug: string;
    image: string;
    price: number;
    shipping: number;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function GearItem(props: GearItemProps) {
    const { name, slug, image, price, shipping, description, buttonText, buttonHref } = props;
    return (
        <div>
            <img src={image} alt={name} className="img-fluid" style={{ maxHeight: 600 }} />
            <p>{name}</p>
            <p>${price} + ${shipping} shipping</p>
            <p>{description}</p>
            <div className="d-grid gap-2 col-7 col-md-3 mx-auto">
                <button type="button" className="btn btn-dark text-uppercase" data-bs-toggle="modal" data-bs-target={`#${slug}Modal`}>
                    Order Now
                </button>
                {buttonText !== undefined &&
                    <a role="button" className="btn btn-secondary text-uppercase text-nowrap" href={buttonHref}>
                        {buttonText}
                    </a>
                }
            </div>
            <div className="modal fade" id={`${slug}Modal`} aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${slug}ModalLabel`}>{name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body" id={`${slug}ModalBody`}>
                            <p>${price + shipping} USD</p>
                            <p>{description}</p>
                            <PayPalButton
                                amount={price + shipping}
                                style={{
                                    shape: 'rect',
                                    color: 'silver',
                                    layout: 'vertical',
                                    label: 'paypal',
                                }}
                                onError={(error: any) => {
                                    console.log(error);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}