import React from 'react';
import './List.css';
import ListItem from './ListItem/ListItem';

const List = props => {
    return(
     <ul className = { props.className ? props.className  + ' list' : 'list' }>
        { props.data.map(listItem => <ListItem  itemName = { listItem }/>)}
     </ul>
)}

export default List;