import React from 'react'
import Navbar from '../navigations/Navbar'


const Template = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Template



