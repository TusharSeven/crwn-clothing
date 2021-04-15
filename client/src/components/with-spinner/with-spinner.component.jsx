//this component is HOC which is used for showing loading spinner while the data is fetching

import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';
//it is a HOC which takes a component and wraps around it
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (<WrappedComponent {...otherProps} />)
}

export default WithSpinner;
