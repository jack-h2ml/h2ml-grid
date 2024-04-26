/**
 * Wordpress Dependencies
 */

import { 
	useBlockProps, 
	useInnerBlocksProps 
} from '@wordpress/block-editor';

import {
	useId
} from '@wordpress/element';

/**
 * 
 */

export default function Save({attributes: {breakpoints}}) {

	//
	const {children, ...innerBlocksProps} = useInnerBlocksProps.save(useBlockProps.save());

	//
	const style = breakpoints.reduce((style, {mediaQuery, ...definition}) => {
		return style += `@media screen and ${mediaQuery} {
			:host {
				${Object.keys(definition).length > 1
					? `
						display: flex !important;
						grid-column-start: ${definition.colStart} !important;
						grid-column-end: ${definition.colEnd} !important;
						grid-row-start: ${definition.rowStart} !important;
						grid-row-end: ${definition.rowEnd} !important;
					`
					: `
						display: none !important;
					`
				}
			}
		}`;
	}, '').replace((/	|\r\n|\n|\r/gm),"");

	//
	return (
		<div { ...innerBlocksProps}>
			<template shadowrootmode="closed">
				<style>{style}</style>
				<slot></slot>
			</template>
			{children}
		</div>
	);
}