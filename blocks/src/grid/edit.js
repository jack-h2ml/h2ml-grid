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
	dispatch,
	withSelect,
	useSelect
} from '@wordpress/data';

import {
	useState,
	useEffect
} from '@wordpress/element';

import {
	__
} from '@wordpress/i18n';

import { 
	register 
} from '@wordpress/data';

/**
 * Internal Dependencies
 */

import './edit.scss';

import InspectorControls from './editorDependencies/sidebar';

import GridGuides from './editorDependencies/guides';

import Appender from './editorDependencies/appender';

import store from './../store';

/**
 * Register the store
 */

register(store);

/**
 * Main
 */

export default function Edit(props) {

	//Attributes
	const {
		colCount,
		rowCount,
		colDefinitions,
		rowDefinitions
	} = props.attributes;

	//
	const { clientId } = props;

	// State which manages Adding new Grid Area's
	const [isAppending, setIsAppending] = useState(false);

	// State which manages Updating existing Grid Area's 
	const isUpdating = useSelect((select) => {
		const currentlyUpdating = select('h2ml/grid-data').isUpdating();
		return (currentlyUpdating?.gridClientID === clientId) ? currentlyUpdating.gridAreaClientID : null;
	}, []);

	// Resets state after Adding / Updating Grid Area's
	const cancelAddingGridArea = () => {
		setIsAppending(false);
		dispatch('h2ml/grid-data').setIsUpdating(null)
	}

	// Logic for Adding / Updating Grid Area's
	const addUpdateGridArea = async (colStart, colEnd, rowStart, rowEnd) => {
		if(isAppending) {
			const newGridArea = createBlock('h2ml/grid-area');
			Object.assign(newGridArea.attributes, {colStart, colEnd, rowStart, rowEnd});
			const insertIndex = select('core/block-editor').getBlockCount(clientId);
			dispatch('core/block-editor').insertBlock(newGridArea, insertIndex, clientId);
		} else if(isUpdating) {
			dispatch('core/block-editor').updateBlockAttributes(isUpdating, {colStart, colEnd, rowStart, rowEnd});
		}
		cancelAddingGridArea();
	}

	// Adds style attributes for Grid's columns and rows
	const style = {
		gridTemplateColumns: colDefinitions.join(' '),
		gridTemplateRows: rowDefinitions.join(' ')
	}
	
	// Sets the WP Block Props
	const { children, ...innerBlocksProps } = useInnerBlocksProps(useBlockProps({style}), { 
		allowedBlocks: ['h2ml/grid-area'],
		renderAppender: () => (
			<Appender setIsAppending={setIsAppending}/>
		),
	});

	//
	return (
		<>
			<InspectorControls {...props}/>
			<div {...innerBlocksProps}>
				<GridGuides
					colCount={colCount}
					rowCount={rowCount}
					isAppending={isAppending}
					isUpdating={isUpdating}
					addUpdateGridArea={addUpdateGridArea}
					cancel={cancelAddingGridArea}
				/>
				{!(isAppending || isUpdating) && children}
			</div>
		</>
	);
}