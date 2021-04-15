import React from 'react';

import { CustonButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
    <CustonButtonContainer {...props}>
        {children}
    </CustonButtonContainer>
);

export default CustomButton;