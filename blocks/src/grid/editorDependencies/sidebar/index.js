/**
 * Wordpress Dependencies
 */

import { 
	InspectorControls
} from '@wordpress/block-editor';

import {
    PanelBody
} from '@wordpress/components';

import {
	__
} from '@wordpress/i18n';


/**
 * Internal Dependencies
 */

import GridConfig from './gridConfig';

/**
 * Main
 */

export default function({ attributes, setAttributes }) {

	//
	const {
		colCount,
		colDefinitions,
		rowCount,
		rowDefinitions
	} = attributes;

	//
	const setNumberCols = (value) => {
		setAttributes({colCount: value});
	};

	const setNumberRows = (value) => {
		setAttributes({rowCount: value});
	}

	//
	const setColDefinitions = (values) => {
		setAttributes({colDefinitions: values});
	}
	const setRowDefinitions = (values) => {
		setAttributes({rowDefinitions: values});
	}

	//
	return (<InspectorControls key="setting">
		<GridConfig
			name='Column'
			count={colCount}
			countSetter={[setNumberCols, 3]}
			definitions={colDefinitions}
			definitionsSetter={[setColDefinitions, '1fr']}
		/>
		<GridConfig
			name='Row'
			count={rowCount}
			countSetter={[setNumberRows, 4]}
			definitions={rowDefinitions}
			definitionsSetter={[setRowDefinitions, 'max-content']}
		/>
	</InspectorControls>);
}