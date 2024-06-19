import React from 'react';
import './Content.style.scss';
import Hierarchy from './Hierarchy';
import Devider from './Devider';

export default function Content() {
    return (
        <div className='wrapper'>
            <div className='content'>
                <div className='content-title'>
                    <div>Уровень</div>
                    <div>Наименование работ</div>
                </div> 
                <Devider/>
                <Hierarchy/>
            </div>
        </div>
    );
}