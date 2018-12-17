import React from 'react';
// import './ListItem.css';

const ListItem = props => (
     <li onClick = { props.onClick }> { props.itemName } </li>
)

export default ListItem;