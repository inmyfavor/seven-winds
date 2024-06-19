import React from 'react';
import './App.style.scss';
import ControlBar from '../ControlBar/ControlBar';
import MenuTitle from '../MenuTitle/MenuTitle';
import Workspace from '../Workspace/Workspace';

export default function App() {
  return (
    <div className='app'>
      <ControlBar/>
      <MenuTitle/>
      <Workspace/>
    </div>
  );
}
