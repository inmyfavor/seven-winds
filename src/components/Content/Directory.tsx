import React from 'react';
import './Directory.style.scss';
import Devider from './Devider';  //divider

interface DirectoryProps {
    name: String;
}

export default function Directory({name}: DirectoryProps) {
    return (
        <div>
            <div className='directory'>
            <img src='/icons/file.svg' alt=''/> 
            <div className='directory-name'>{name}</div>
            </div>
            <Devider/>
        </div>
    );
}