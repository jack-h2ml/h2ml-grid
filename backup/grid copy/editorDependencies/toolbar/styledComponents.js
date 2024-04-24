/**
 * Wordpress Dependencies
 */

import {
	Button
} from '@wordpress/components';

/**
 *  External Dependencies
 */

import styled from '@emotion/styled';

/**
 * Single Column ToolsPanelItem
 */

export const ButtonBlack = styled(Button)`
	color: black !important;

	&:hover {
		color: var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9)) !important;
	} 
`;