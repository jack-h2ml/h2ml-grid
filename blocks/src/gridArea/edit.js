/**
 * Wordpress Dependencies
 */

import {
	useBlockProps,
	useInnerBlocksProps
} from '@wordpress/block-editor';

import {
	select,
	dispatch,
	useDispatch
} from '@wordpress/data';

import {
	__
} from '@wordpress/i18n';

/**
 * Internal Imports
 */

import ToolbarControls from './editorDependencies/toolbar';

/**
 * Main
 */

export default function Edit({attributes, clientId, context, __unstableLayoutClassNames, setAttributes}) {

	/**
	 * Global
	 */

	const {
		breakpoints
	} = attributes;

	const { 
		"h2ml-grid/activeBreakpointId": activeBreakpointId = 1,
		"h2ml-grid/definingGridArea": definingGridArea
	} = context;

	const breakpoint = breakpoints[activeBreakpointId];

	// Allows us to use setAttributes where we might otherwise fall into an undo trap.
	const { __unstableMarkNextChangeAsNotPersistent } = useDispatch('core/block-editor');

	/**
	 * Manage Grid Area
	 */

	const updateGridArea = () => {
		const gridClientId = select('core/block-editor').getBlockRootClientId(clientId);
		__unstableMarkNextChangeAsNotPersistent();
		dispatch('core/block-editor').updateBlockAttributes(gridClientId, {
			definingGridArea: {
				gridAreaClientId: clientId,
				existingBreakpoints: breakpoints
			}
		});
	}

	const hideGridArea = () => {
		setAttributes({
			breakpoints: {
				...breakpoints,
				[activeBreakpointId]: {
					mediaQuery: breakpoint.mediaQuery
				}
			}
		})
	}

	/**
	 * Rendering
	 */

	// Adds style attributes for Grid's columns and rows
	const style = {
		gridColumnStart: breakpoint.colStart,
		gridColumnEnd: breakpoint.colEnd,
		gridRowStart: breakpoint.rowStart,
		gridRowEnd: breakpoint.rowEnd
	}

	// Sets the WP Block Props
	const innerBlocksProps = useInnerBlocksProps(useBlockProps({style}));

	// The JSX
	return Object.keys(breakpoint).length > 1 && (<>
		{!definingGridArea && (<ToolbarControls
			updateGridArea={updateGridArea}
			hideGridArea={hideGridArea}
		/>)}
		<div { ...innerBlocksProps}/>
	</>);
}