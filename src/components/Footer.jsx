import React from 'react';


const year = new Date().getFullYear;

function Footer(){
    return (
        <footer>
            <p>Copyright © Obycodez55 • {year}</p>
        </footer>
    )
}

export default Footer;