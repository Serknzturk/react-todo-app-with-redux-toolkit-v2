import React from 'react';
import Alert from '../utils/Alert';

export default function ListLoadingError(props){
	return (
		<Alert type="error">Couldn't Load Tasks: {props.children}</Alert>
	)
}