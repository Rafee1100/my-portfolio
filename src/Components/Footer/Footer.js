import React from 'react';

const Footer = () => {
   
    return (
        <div className="mt-5 text-center text-white">
            <h6>Copyright &copy; <span className="text-success"> Abdullah Al Rafee</span> | {new Date().getFullYear()}</h6>
            <h6>All rights reserved</h6>
        </div>
    );
};

export default Footer;