/**
 * Wordpress Dependencies
 */

import { 
	useBlockProps, 
	useInnerBlocksProps
} from '@wordpress/block-editor';

import {
	createBlock
} from '@wordpress/blocks';

import {
	select,
	useSelect,
	dispatch,
	useDispatch,
} from '@wordpress/data';

import {
	useMemo
} from '@wordpress/element';

import {
	__
} from '@wordpress/i18n';

/**
 * Internal Dependencies
 */

import './edit.scss';

import blockDefinition from './block.json';

import { useUpdatedBreakpoints } from './editorDependencies/hooks';

import ToolbarControls from './editorDependencies/toolbar';

import InspectorControls from './editorDependencies/sidebar';

import Appender from './editorDependencies/appender';

import HiddenGridAreas from './editorDependencies/hiddenGridAreas';

/**
 * Main
 */

export default function Edit({attributes, setAttributes, clientId}) {

	/**
	 * Global
	 */

	//
	const { 
		breakpoints,
		definingGridArea,
		activeBreakpointId = breakpoints[0].id, 
	} = attributes;

	//
	const breakpointDefinition = useMemo(() => {
		return breakpoints.find((breakpoint) => breakpoint.id === activeBreakpointId) ?? breakpoints[0];
	}, [attributes]);

	//
	const {
		colCount,
		rowCount,
		colDefinitions,
		rowDefinitions
	} = breakpointDefinition;

	// Allows us to use setAttributes without actually saving the attribute. Avoids undo / update traps.
	const { __unstableMarkNextChangeAsNotPersistent } = useDispatch('core/block-editor');

	// Keep a refrence to the Grid Areas belonging to this Grid.
	const gridAreas = useSelect((select) => select('core/block-editor').getBlocks(clientId));

	/**
	 * Manage Breakpoints
	 */

	//
	const setActiveBreakpointId = (breakpointId) => {
		__unstableMarkNextChangeAsNotPersistent();
		setAttributes({
			activeBreakpointId: breakpointId
		});
	}

	//
	const createBreakpoint = () => {
		const nextId = ([...breakpoints].sort((a, b) => b.id - a.id)[0]?.id ?? 0) + 1;
		setAttributes({
			breakpoints: [
				...breakpoints,
				...[{
					...blockDefinition.attributes.breakpoints.default[0],
					id: nextId
				}]
			]
		});
	};

	//
	const reorderBreakpoint = (change) => {
		//
		const breakpointIndex = breakpoints.findIndex(({id}) => id === activeBreakpointId);
		const newIndex = (breakpointIndex + change) % breakpoints.length;
		const breakpointsCopy = [...breakpoints];

		setAttributes({
			breakpoints: breakpointsCopy.toSpliced(newIndex, 0, ...breakpointsCopy.splice(breakpointIndex, 1))
		});
	}

	//
	const deleteBreakpoint = () => {
		const breakpointIndex = breakpoints.findIndex(({id}) => id === activeBreakpointId);
		const breakpointsCopy = breakpoints.toSpliced(breakpointIndex, 1);
		setAttributes({
			breakpoints: breakpointsCopy,
			activeBreakpointId: breakpointsCopy[0].id 
		});
	}

	//
	const updateBreakpointValue = (property, value) => {
		const currentBreakpoints = select('core/block-editor').getBlockAttributes(clientId).breakpoints;
		const updatedBreakpointIndex = currentBreakpoints.findIndex(({id}) => id === activeBreakpointId);
		setAttributes({
			breakpoints: currentBreakpoints.toSpliced(updatedBreakpointIndex, 1, {
				...currentBreakpoints[updatedBreakpointIndex],
				[property]: value
			})
		});
	}

	//
	useUpdatedBreakpoints(gridAreas, breakpoints);

	/**
	 * Manage Grid Areas
	 */

	// Sets state (as attribute) which enables the Grid Appender UI
	const startAddingGridArea = () => {
		__unstableMarkNextChangeAsNotPersistent();
		setAttributes({
			definingGridArea: {
				gridAreaClientId: false
			}
		})
	}

	// Resets state after Adding / Updating Grid Area's
	const cancelAddingGridArea = () => {
		setAttributes({definingGridArea: null});
	}

	// Logic for Appending / Updating Grid Area's
	const createUpdateGridArea = async (colStart, colEnd, rowStart, rowEnd) => {
		if(!definingGridArea.gridAreaClientId) {
			// Adding new Grid Area
			const newGridArea = Object.assign(createBlock('h2ml/grid-area'), {attributes: {
				breakpoints: breakpoints.reduce((res, {id, mediaQuery}) => ({
					...res,
					[id]: {
						mediaQuery,
						...(id === activeBreakpointId && {
							colStart, colEnd, rowStart, rowEnd
						})
					}
				}), {})
			}});
			const insertIndex = select('core/block-editor').getBlockCount(clientId);
			dispatch('core/block-editor').insertBlock(newGridArea, insertIndex, clientId);
		} else {
			// Updating Existing Grid Area
			const { gridAreaClientId, existingBreakpoints } = definingGridArea;
			dispatch('core/block-editor').updateBlockAttributes(gridAreaClientId, {
				breakpoints: {
					...existingBreakpoints,
					[activeBreakpointId]: {
						mediaQuery: breakpointDefinition.mediaQuery,
						colStart, colEnd, rowStart, rowEnd
					}
				}
			});
		}
		cancelAddingGridArea();
	}

	/**
	 * Rendering
	 */

	// Adds style attributes for Grid's columns and rows
	const style = {
		gridTemplateColumns: colDefinitions.join(' '),
		gridTemplateRows: rowDefinitions.join(' ')
	}
	
	// Sets the WP Block Props
	const { children, ...innerBlocksProps } = useInnerBlocksProps(useBlockProps({
		style,
		className: (definingGridArea) ? 'wp-block-h2ml-grid--is-editing' : ''
	}), { 
		allowedBlocks: ['h2ml/grid-area'],
		renderAppender: () => null
	});

	// The JSX
	return (
		<>
			{!definingGridArea && (<ToolbarControls 
				breakpoints={breakpoints}
				activeBreakpointId={activeBreakpointId}
				activeBreakpointName={breakpointDefinition.name}
				setActiveBreakpointId={setActiveBreakpointId}
				createBreakpoint={createBreakpoint}
				reorderBreakpoint={reorderBreakpoint}
				deleteBreakpoint={deleteBreakpoint}
			/>)}
			<InspectorControls 
				breakpointDefinition={breakpointDefinition}
				updateBreakpoint={updateBreakpointValue}
			/>
			<div {...innerBlocksProps}>
				<Appender
					colCount={colCount}
					rowCount={rowCount}
					definingGridArea={definingGridArea}
					start={startAddingGridArea}
					confirm={createUpdateGridArea}
					cancel={cancelAddingGridArea}
				/>
				{children}
				<HiddenGridAreas
					gridAreas={gridAreas}
					activeBreakpointId={activeBreakpointId}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			</div>
		</>
	);
}