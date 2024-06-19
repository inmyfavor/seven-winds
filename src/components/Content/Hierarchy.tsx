import React from 'react';
import './Hierarchy.style.scss';
import Directory from './Directory';

export default function Hierarchy() {
    return (
        <div className='hierarchy'>
           <Directory name='b' level={0} hasChildren/>
           <Directory name='b' level={1} hasParent hasChildren/>
           <Directory name='b' level={2} hasParent notLastChild/>
           <Directory name='b' level={2} hasParent/>
        </div>
    );
}