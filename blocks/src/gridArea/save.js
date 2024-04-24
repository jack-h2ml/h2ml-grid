/**
 * Wordpress Dependencies
 */

import { 
	useBlockProps, 
	useInnerBlocksProps 
} from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */



/**
 * 
 */

export default function Save({attributes: {breakpoints}}) {

	//
	const {children, ...innerBlocksProps} = useInnerBlocksProps.save(useBlockProps.save());

	//
	const style = Object.values(breakpoints).reduce((style, {mediaQuery, ...definition}) => {
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