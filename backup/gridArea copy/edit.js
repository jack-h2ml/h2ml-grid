/**
 * Wordpress Dependencies
 */

import {
	BlockControls,
	useBlockProps,
	useInnerBlocksProps
} from '@wordpress/block-editor';

import {
	select,
	dispatch
} from '@wordpress/data';

import {
	ToolbarGroup, 
	ToolbarButton
} from '@wordpress/components';

import { resizeCornerNE } from '@wordpress/icons';

import {
	__
} from '@wordpress/i18n';

/**
 * Main
 */

export default function Edit({attributes: {colStart, colEnd, rowStart, rowEnd}, clientId}) {

	//
	const innerBlocksProps = useInnerBlocksProps(useBlockProps({style: {
		gridColumnStart: colStart,
		gridColumnEnd: colEnd,
		gridRowStart: rowStart,
		gridRowEnd: rowEnd
	}}));

	//
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={resizeCornerNE}
						label={__('Resize Grid Area', 'h2ml')}
						onClick={() => {
							const gridClientID = select('core/block-editor').getBlockRootClientId(clientId);
							dispatch('h2ml/grid-data').setIsUpdating({
								gridClientID,
								gridAreaClientID: clientId
							})
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div { ...innerBlocksProps}/>
		</>
	);
}