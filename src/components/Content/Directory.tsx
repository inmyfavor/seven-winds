import React from 'react';
import './Directory.style.scss';
import Divider from './Divider';

interface DirectoryProps {
    name: String;
    level: number;
    hasChildren?: boolean;
    hasParent?: boolean;
    notLastChild?: boolean;
}

export default function Directory({
    name, level, hasChildren, hasParent, notLastChild
}: DirectoryProps) {
    return (
        <div>
            <div className='directory'>
                <div className='directory-spacer'>
                    <div className='directory-icon' style={{marginLeft: level*18+'px'}}>
                        <img src='/icons/file.svg' alt=''/>
                        {hasChildren && <div className='bar'/>}
                        {hasParent && <div className='bar-left'/>}
                        {notLastChild && <div className='parent-bar'/>}
                    </div>
                </div>
                <div className='directory-name'>{name}</div>
            </div>
            <Divider/>
        </div>
    );
}