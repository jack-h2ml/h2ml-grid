/**
 * Wordpress Dependencies
 */

import { 
	useBlockProps, 
	useInnerBlocksProps 
} from '@wordpress/block-editor';

import {
	__
} from '@wordpress/i18n';


import {
	select
} from '@wordpress/data';


/**
 * Internal Dependencies
 */



/**
 * 
 */

export default function Save({attributes: {breakpoints}}) {

	//
	const blockProps = useBlockProps.save();
	const {children, ...innerBlockProps} = useInnerBlocksProps.save(blockProps);

	//
	const style = breakpoints.reduce((style, {mediaQuery, colDefinitions, rowDefinitions}) => {
		return style += `@media screen and ${mediaQuery} {
			:host(.wp-block-h2ml-grid ) {
				grid-template-columns: ${colDefinitions.join(' ')} !important;
				grid-template-rows: ${rowDefinitions.join(' ')} !important;
			}
		}`;
	}, '').replace((/	|\r\n|\n|\r/gm),"");

	//
	return (
		<div {...innerBlockProps}>
			<template shadowrootmode="closed">
				<style>{style}</style>
				<slot></slot>
			</template>
			{children}
		</div>
	);
}