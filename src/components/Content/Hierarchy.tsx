import React, {useEffect, useMemo, useState} from 'react';
import * as api from '../../api/api';
import './Hierarchy.style.scss';
import Directory from './Directory';
import { TreeResponse } from '../../api/api.types';
// import Directory from './Directory';
// import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
// import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
// import Box from '@mui/material/Box';
// import { styled, alpha } from '@mui/material/styles';

// const directoryName = ['g','g','e'];

// const Directory = styled(TreeItem)(({ theme }) => ({
//     color: theme.palette.grey[100],
    //   theme.palette.mode === 'light'
    //     ? theme.palette.grey[800]
    //     : theme.palette.grey[200],
  
//     [`& .${treeItemClasses.content}`]: {
//       borderRadius: theme.spacing(0.5),
//       padding: theme.spacing(0.5, 1),
//       margin: theme.spacing(0.2, 0),
      
//       [`& .${treeItemClasses.label}`]: {
//         fontSize: '0.8rem',
//         fontWeight: 500,
//       },
//     },
//     [`& .${treeItemClasses.iconContainer}`]: {
//       borderRadius: '50%',
//       backgroundColor:
//         theme.palette.mode === 'light'
//           ? alpha(theme.palette.primary.main, 0.25)
//           : theme.palette.primary.dark,
//       color: theme.palette.mode === 'dark' && theme.palette.primary.contrastText,
//       padding: theme.spacing(0, 1.2),
//     },
//     [`& .${treeItemClasses.groupTransition}`]: {
//       marginLeft: 15,
//       paddingLeft: 18,
//       borderLeft: `1px solid ${alpha(theme.palette.text.primary, 0.4)}`,
//     },
//   }));

function flatTree(data: TreeResponse[], result?: TreeResponse[]): TreeResponse[] {
    result ??= [];
    for (let parent of data) {
        result.push(parent);
        flatTree(parent.child, result);
    }
    return result;
}

function Column({name, children, width}: {name: string, width?: string, children?: JSX.Element[] | JSX.Element}) {
    return <div className="column" style={{minWidth: width}}>
        <div className="column-name">{name}</div>
        {children}
    </div>
}

function DataColumn({name, prop, width, data}: {name: string, prop: keyof TreeResponse, width?: string, data: TreeResponse[]}) {
    return <Column name={name} width={width}>
        {data.map(d=>{
            return <div className="data" key={`columns_${name}_${d.id}`}>{d[prop] as string}</div>;
        })}
    </Column>
}

export default function Hierarchy() {
    const [data, setData] = useState<TreeResponse[]>([]);
    const [requesting, setRequesting] = useState(false);
    const flatten = useMemo(()=>flatTree(data), [data]);
    useEffect(()=>{
        if (!requesting) {
            api.getTreeRows().then(res=>{
                setData(res);
            })
            setRequesting(true);
        }
    });
    return (
        <div className='hierarchy'>
            <Column name="Уровень">
                {data.map((d, i)=>{
                    return <Directory key={"directory"+d.id} child={d.child}/>;
                })}
            </Column>
            <DataColumn name="Наименование работ" prop="rowName" width="240px" data={flatten}/>

           {/* <Directory name='b' level={0} hasChildren/>
           <Directory name='b' level={1} hasParent hasChildren/>
           <Directory name='b' level={2} hasParent notLastChild/>
           <Directory name='b' level={2} hasParent/> */}
            {/* <SimpleTreeView defaultExpandedItems={['grid']}>
                <Directory itemId="grid" label="Data Grid"> */}
                    {/* <TreeItem itemId="1" label="Item 1" />
                    <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                    <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" /> */}
                    {/* { directoryName.map((dir: String)=>{<TreeItem label={dir} />}) } */}
                    {/* <Directory itemId="1" label='fv' />
                </Directory>
            </SimpleTreeView> */}
            {/* <Directory name='frfsvr'/> */}
        </div>
    );
}