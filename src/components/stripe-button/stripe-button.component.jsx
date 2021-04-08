import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IdtRMSEvudRSstwRhPCoY9YUfp0L7DGofduAc9R7H2mjVGXnmGWvqCBcOrDapuJP528vzgAYWE8x1zL9VpyTfVP00V0WZzk8G";

    const onToken = token => {
        console.log(token);
        alert(`Payment of $${price} is succesfull`);
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

