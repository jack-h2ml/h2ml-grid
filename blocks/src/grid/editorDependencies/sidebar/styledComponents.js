/**
 * Wordpress Dependencies
 */

import {
	PanelBody,
    __experimentalToolsPanelItem as ToolsPanelItem
} from '@wordpress/components';

/**
 *  External Dependencies
 */

import styled from '@emotion/styled';

/**
 * Panel Description
 */

export const PanelDescription = styled.div`
	grid-column: span 2;
`;

/**
 * 
 */

export const ToolsPanelBody = styled(PanelBody)`
	display: flex !important;
	flex-direction: column !important;
	border-top: none !important; 

	.components-panel__body-title:hover {
		background: unset;
	}

	.components-panel__body-toggle.components-button {

		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;

		padding: 0px;
		padding-left: 4px;
	}

	.components-panel__body-toggle.components-button .components-panel__arrow {
		position: unset;
    	right: unset;
    	top: unset;
    	transform: unset;
	}
`;

/**
 * Single Column ToolsPanelItem
 */

export const SingleColumnItem = styled(ToolsPanelItem)`
	display: block !important;
	grid-column: span 1 !important;
`;

/**
 * Double Column ToolsPanelItem
 */

export const DoubleColumnItem = styled(ToolsPanelItem)`
	display: block !important;
    grid-column: span 2 !important;
`;