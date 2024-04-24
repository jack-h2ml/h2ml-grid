/**
 * Wordpress Dependencies
 */

import { 
	BlockControls
} from '@wordpress/block-editor';

import {
	Button,
    ToolbarGroup
} from '@wordpress/components';

import {
	__
} from '@wordpress/i18n';

import { 
	plus
} from '@wordpress/icons';

/**
 * External Dependencies
 */

import {
	ButtonBlack
} from './styledComponents';

/**
 * Internal Dependencies
 */


/**
 * Main
 */

export default function({ attributes, setAttributes }) {
	return (<BlockControls>
		<ToolbarGroup>
			<ButtonBlack
				variant="link"
				icon={plus}
				label={__('Add Breakpoint', 'h2ml')}
				onClick={() => {console.log('hmm')}}
			/>
		</ToolbarGroup>
	</BlockControls>);
}