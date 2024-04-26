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

const v1 = {
	//
	attributes: {
		definingGridArea: {
			type: "object"
		},
		activeBreakpointId: {
			type: "number"
		},
		breakpoints: {
			type: "array",
			default: [{
				id: 1,
				name: "",
				mediaQuery: "(min-width: 0px)",
				colCount: 3,
				rowCount: 4,
				colDefinitions: ["1fr", "1fr", "1fr"],
				rowDefinitions: ["max-content", "max-content", "max-content", "max-content"]
			}]
		},
	},

	//
	save({attributes: {breakpoints}}) {
		//
		const blockProps = useBlockProps.save();
		const {children, ...innerBlockProps} = useInnerBlocksProps.save(blockProps);

		//
		const style = breakpoints.reduce((style, {mediaQuery, colDefinitions, rowDefinitions}) => {
			console.log(colDefinitions);
			return style += `@media screen and ${mediaQuery} {
				@scope {
					:scope.wp-block-h2ml-grid {
						grid-template-columns: ${colDefinitions.join(' ')};
						grid-template-rows: ${rowDefinitions.join(' ')};
					}
				}
			}`;
		}, '').replace((/	|\r\n|\n|\r/gm),"");

		//
		return (
			<div {...innerBlockProps}>
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

export default [v1];