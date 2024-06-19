import React from 'react';
import './SideMenu.style.scss';
import SideTab from './SideTab';

const tabs = [
    'По проекту', 
    'Объекты',
    'РД', 
    'МТО',
    'СМР', 
    'График',
    'Мим', 
    'Рабочие',
    'Капвложения', 
    'Бюджет',
    'Финансирование', 
    'Панорамы',
    'Камеры', 
    'Поручения',
    'Контрагенты'
];

export default function SideMenu() {
    return (
        <div className='side-menu'>
            {tabs.map((tab: String, index: number) => <SideTab key={'tab:'+index} name={tab} selected={tab==='СМР'}/>)}
        </div>
    );
}