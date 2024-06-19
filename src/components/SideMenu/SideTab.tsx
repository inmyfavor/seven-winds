import React from 'react';
import './SideTab.style.scss';

interface SideTabProps {
    name: String;
    selected: boolean;
}

export default function SideTab({name, selected}: SideTabProps) {
    return (
        <div className={selected ? 'side-tab-selected' : 'side-tab'}>
            <img src='/icons/tab.svg' alt=''/>
            {name}
        </div>
    );
}