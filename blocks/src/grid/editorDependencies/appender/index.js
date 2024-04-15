/**
 * Wordpress Dependencies
 */

import {
	Button
} from '@wordpress/components';

import {
	plus
} from '@wordpress/icons';

import {
	__
} from '@wordpress/i18n';


/**
 * Internal Dependencies
 */



/**
 * Main
 */

export default function({setIsAppending}) {
	return (
		<Button
			variant="link"
			icon={plus}
			label={__('Add Grid Area', 'h2ml')}
			onClick={() => {setIsAppending(true)}}
		/>
	)
}