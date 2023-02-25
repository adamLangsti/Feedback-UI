import React from 'react';
import logo from '../assets/spinner.gif';

export default function Spinner() {
    return (
        <img
            src={logo}
            alt='Loading...'
            style={{ width: '100px', margin: 'auto', display: 'block' }}
        />
    );
}
