import React from 'react';
import {useAlert} from './alertContext';

export default function Alert() {
    const alert = useAlert();

    if(!alert.visible) return null;

    return (
        <div className={'alert alert-danger'} onClick={alert.toggle}>
            Text text text Alert
        </div>
    );
}
