import React from 'react';
import './Workspace.style.scss';
import SideMenu from '../SideMenu/SideMenu';
import Content from '../Content/Content';

export default function Workspace() {
    return (
        <div className='workspace'>
            <SideMenu/>
            <Content/>
        </div>
    );
  }