/**
 * Wordpress Dependencies
 */

import { 
	useBlockProps, 
	useInnerBlocksProps 
} from '@wordpress/block-editor';

/**
 * 
 */

const v1 = {
	
	//
	attributes: {
		breakpoints: {
			type: 'object',
			default: {}
		},
	},

	//
	migrate({breakpoints}) {
		const convertedBreakpoints = Object.entries(breakpoints).map(([id, breakpoint]) => ({id, ...breakpoint}));
		return {
			breakpoints: convertedBreakpoints
		};
	},

	//
	save({ attributes: { breakpoints } }) {

		//
		const {children, ...innerBlocksProps} = useInnerBlocksProps.save(useBlockProps.save());

		//
		const style = Object.keys(breakpoints).reduce((style, breakpointId) => {
			const {mediaQuery, ...definition} = breakpoints[breakpointId];
			return style += `@media screen and ${mediaQuery} {
				@scope {
					:scope.wp-block-h2ml-grid-area {
						${Object.keys(definition).length 
							? `
								display: flex;
								grid-column-start: ${definition.colStart};
								grid-column-end: ${definition.colEnd};
								grid-row-start: ${definition.rowStart};
								grid-row-end: ${definition.rowEnd};
							`
							: `
								display: none;
							`
						}
					}
				}
			}`;
		}, '').replace((/	|\r\n|\n|\r/gm),"");

		//
		return (
			<div { ...innerBlocksProps}>
				<style>
					{style}
				</style>
				{children}
			</div>
		);
	}
}

/**
 * 
 */

const v2 = {
	//
	attributes: {
		breakpoints: {
			type: 'array',
			default: []
		},
	},

	//
	migrate({breakpoints}) {
		const convertedBreakpoints = Object.entries(breakpoints).map(([id, breakpoint]) => ({id, ...breakpoint}));
		return {
			breakpoints: convertedBreakpoints
		};
	},

	//
	save({attributes: {breakpoints}}) {
				
		//
		const {children, ...innerBlocksProps} = useInnerBlocksProps.save(useBlockProps.save());
	
		//
		const style = breakpoints.reduce((style, {mediaQuery, ...definition}) => {
			return style += `@media screen and ${mediaQuery} {
				@scope {
					:scope.wp-block-h2ml-grid-area {
						${Object.keys(definition).length 
							? `
								display: flex;
								grid-column-start: ${definition.colStart};
								grid-column-end: ${definition.colEnd};
								grid-row-start: ${definition.rowStart};
								grid-row-end: ${definition.rowEnd};
							`
							: `
								display: none;
							`
						}
					}
				}
			}`;
		}, '').replace((/	|\r\n|\n|\r/gm),"");
	
		//
		return (
			<div { ...innerBlocksProps}>
				<style>
					{style}
				</style>
				{children}
			</div>
		);
	}
}

/**
 * 
 */

export default [ v2, v1 ];