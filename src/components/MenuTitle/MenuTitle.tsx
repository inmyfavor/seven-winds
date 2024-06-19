import React from 'react';
import './MenuTitle.style.scss';

export default function MenuTitle() {
    return (
        <div className='menu'>
            <div className='menu-row'>
                <div>
                    <div className='project-name'>Название проекта</div>
                    <div className='abbreviation'>Аббревиатура</div>
                </div>
                <img src='/icons/downarrow.svg' alt='' className='arrow'/>
            </div>
            <div className='title'>Строительно-монтажные работы</div>
        </div>
    );
}