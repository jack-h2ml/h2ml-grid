/**
 * Wordpress Dependencies
 */

import { 
	InspectorControls
} from '@wordpress/block-editor';

import {
	__
} from '@wordpress/i18n';


/**
 * Internal Dependencies
 */

import GridConfig from './gridConfig';

import BreakpointConfig from './breakpointConfig';

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
		setAttributes({colCount: Number(value)});
	};

	const setNumberRows = (value) => {
		setAttributes({rowCount: Number(value)});
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
		<BreakpointConfig

		/>
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