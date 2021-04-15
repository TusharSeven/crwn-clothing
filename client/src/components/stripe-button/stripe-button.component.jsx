import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 72 * 100;
    const publishableKey = "pk_test_51IdtRMSEvudRSstwRhPCoY9YUfp0L7DGofduAc9R7H2mjVGXnmGWvqCBcOrDapuJP528vzgAYWE8x1zL9VpyTfVP00V0WZzk8G";

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token,
            }
        }).then(response => {
            alert(`Payment of $${price} is Seccessful`)
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err));
            alert('Payment Failed!!! Please make sure you use the provided credut card');
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;

