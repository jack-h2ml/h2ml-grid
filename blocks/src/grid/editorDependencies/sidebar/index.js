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

export default function({ breakpointDefinition, updateBreakpoint }) {

	//
	const {
		name,
		mediaQuery,
		colCount,
		colDefinitions,
		rowCount,
		rowDefinitions
	} = breakpointDefinition;

	//
	const setName = (value) => {
		updateBreakpoint('name', value);
	}

	//
	const setMediaQuery = (value) => {
		updateBreakpoint('mediaQuery', value);
	}

	//
	const setNumberCols = (value) => {
		updateBreakpoint('colCount', Number(value));
	};

	const setNumberRows = (value) => {
		updateBreakpoint('rowCount', Number(value));
	}

	//
	const setColDefinitions = (values) => {
		updateBreakpoint('colDefinitions', values);
	}
	const setRowDefinitions = (values) => {
		updateBreakpoint('rowDefinitions', values);
	}

	//
	return (<InspectorControls key="setting">
		<BreakpointConfig
			name={name}
			nameSetter={setName}
			mediaQuery={mediaQuery}
			mediaQuerySetter={setMediaQuery}
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