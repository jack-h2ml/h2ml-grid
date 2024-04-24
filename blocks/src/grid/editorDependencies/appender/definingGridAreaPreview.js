/**
 * Wordpress Dependencies
 */

import {
	__
} from '@wordpress/i18n';

import {
	Button
} from '@wordpress/components';

/**
 * Main
 */

export default function({columnStart, columnEnd, rowStart, rowEnd}) {
	return (
		<div 
			className='wp-block-h2ml-grid--appender--guide-defining-grid-area-preview'
			style={{
				gridColumnStart: columnStart,
				gridColumnEnd: columnEnd,
				gridRowStart: rowStart,
				gridRowEnd: rowEnd
			}}
		/>
	)	
}