import React from 'react';
import './ControlBar.style.scss';
import ControlTab from './ControlTab';

export default function ControlBar() {
    return (
        <div className="panel">
            <img src='/icons/menu.svg' alt=''/>
            <img src='/icons/share.svg' alt=''/>
            <ControlTab name='Просмотр' selected={true}/>
            <ControlTab name='Управление' selected={false}/>
        </div>
    );
}