import React from 'react';
import './Directory.style.scss';
import classnames from 'classnames';
import File from './File';
import { TreeResponse } from '../../api/api.types';

interface DirectoryProps {
    hasParent?: boolean;
    lastChild?: boolean;
    child: TreeResponse[]
}

export default function Directory({
    hasParent, child, lastChild
}: DirectoryProps) {
    return (<div className={classnames(hasParent && 'directory-hasParent')}>
        <div className='directory'>
            <div className='directory-icon'>
                {hasParent && <div className='bar-left'/>}
                {hasParent && <div className='bar-vert-top'/>}
                {hasParent && !lastChild && <div className='bar-vert-bottom'/>}
                {child.length>0 && <div className='bar-bottom'/>}
                <File />
            </div>
        </div>
        <div className='directory-content'>
            {hasParent && !lastChild && <div className='directory-vertical-line' />}
            <div className={classnames('directory-children', hasParent && 'hasParent')}>
                {child.map((c, i)=>{
                    return <Directory key={"directory"+c.id} child={c.child} hasParent lastChild={i==child.length-1}/>
                })}
            </div>
        </div>
    </div>
    );
}