import React from 'react';
import './Content.style.scss';
import Hierarchy from './Hierarchy';
import Divider from './Divider';

export default function Content() {
    return (
        <div className='wrapper'>
            <div className='content'>
                <div className='content-title'>
                    <div>Уровень</div>
                    <div>Наименование работ</div>
                </div> 
                <Divider/>
                <Hierarchy/>
            </div>
        </div>
    );
}