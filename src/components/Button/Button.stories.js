import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

function helloWorld(){
    alert("Button Component Executed props.onClick")
}

storiesOf('Button', module)
    .add('Primary', () => <Button 
    label="Primary"
    onClick={helloWorld} 
    type="primary" />) 
    .add('Danger', () => <Button 
    label="danger" 
    type="danger" />) 
    .add('Success', () => <Button 
    label="success" 
    type="success" />)
    .add('Warning', () => <Button 
    label="warning" 
    type="warning" />)
    .add('Large Primary', () => <Button
        label="Large Primary Button"
        type="primary"
        large
    />)
    .add('Large Danger', () => <Button
        label="Large Danger Button"
        type="danger"
        large
    />)