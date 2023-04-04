import React, { useState, useEffect } from 'react'
import { escrow } from '../constants';

const UseGetMockup = (width) => {
const [mockup, setMockup] = useState("");

useEffect(() => {
    if (width <= 600) setMockup(escrow.mockupMobile);
    if (width > 600 && width <= 900) setMockup(escrow.mockupTablet);
    if (width > 900) setMockup(escrow.mockupDesktop);
}, [width])

return mockup;
}

export default UseGetMockup