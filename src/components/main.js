import React from 'react';
import {useAlert} from './alertContext';

export default function Main() {
    const { toggleAlert } = useAlert();

    return (
        <>
         <h1>Hello example of context</h1>
         <button className='btn btn-success' onClick={toggleAlert}>Show context</button>
        </>
    )
}