import React from 'react';
import './ControlTab.style.scss';

interface ControlTabProps {
  name: String;
  selected: boolean;
};

export default function ControlTab({name, selected}: ControlTabProps) {
  return (
      <div className={selected ? "tab-selected" : "tab"}>
          {name}
      </div>
  );
}