/**
 * WordPress dependencies
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';

import { symbolFilled as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */

import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import deprecated from './deprecated';
import './style.scss';

/**
 * Register the Block
 */

registerBlockType(metadata.name, {
	//
	icon,
	edit: Edit,
	save: Save,
	usesContext: ['h2ml-grid/activeBreakpointId', 'h2ml-grid/definingGridArea'],
	deprecated
});
