import React from 'react';
import './Hierarchy.style.scss';
import Directory from './Directory';

export default function Hierarchy() {
    return (
        <div className='hierarchy'>
           <Directory name='b'/>
        </div>
    );
}