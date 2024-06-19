import React from 'react';
import './Directory.style.scss';
import Divider from './Divider';

interface DirectoryProps {
    name: String;
}

export default function Directory({name}: DirectoryProps) {
    return (
        <div>
            <div className='directory'>
                <div className='directory-spacer'>
                    <div className='directory-icon'>
                        <img src='/icons/file.svg' alt=''/>
                        <div className='bar'></div>
                    </div>
                </div>
                <div className='directory-name'>{name}</div>
            </div>
            <Divider/>
            <div className='directory'>
                <div className='directory-spacer'>
                    <div className='directory-icon md'>
                        <img src='/icons/file.svg' alt=''/>
                        <div className='bar'></div>
                        <div className='bar-left'></div>
                    </div>
                </div>
                <div className='directory-name'>{name}</div>
            </div>
            <Divider/>
            <div className='directory'>
                <div className='directory-spacer'>
                    <div className='directory-icon md2'>
                        <img src='/icons/file.svg' alt=''/>
                        <div className='parent-bar'></div>
                        <div className='bar-left'></div>
                    </div>
                </div>
                <div className='directory-name'>{name}</div>
            </div>
            <Divider/>
            <div className='directory'>
                <div className='directory-spacer'>
                    <div className='directory-icon md2'>
                        <img src='/icons/file.svg' alt=''/>
                        <div className='bar-left'></div>
                    </div>
                </div>
                <div className='directory-name'>{name}</div>
            </div>
        </div>
    );
}