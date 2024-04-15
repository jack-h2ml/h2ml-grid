/**
 * Wordpress Dependencies
 */

import {
	PanelBody,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalNumberControl as NumberControl,
	TextareaControl,
} from '@wordpress/components';

import {
	__,
	_x,
	_nx,
	sprintf
} from '@wordpress/i18n';

/**
 * Internal Dependencies
 */

import { ToolsPanelBody, PanelDescription, DoubleColumnItem } from './styledComponents'

/**
 * Main
 */

export default function({name, count, countSetter, definitions, definitionsSetter}) {

	//
	const [setCount, defaultCount] = countSetter;
	const [setDefinitions, defaultDefinition] = definitionsSetter;

	//
	const updateCount = (value) => {
		setCount(value);
		setDefinitions((value > count) 
			? [...definitions, ...Array.from({length: (value - count)}, () => defaultDefinition)] 
			: definitions.slice(0, value)
		);
	}
	
	//
	const updateSingleDefinition = (index, value) => {
		const newDefinitions = definitions.map((v, i) => i === index ? value : v);
 		setDefinitions(newDefinitions);
	}

	//
	const resetAll = () => {
		setCount(defaultCount);
		setDefinitions(Array.from({length: defaultCount}, (v, i) => defaultDefinition));
	};

	//
	const translatedName = __(name, 'h2ml');
	const panelTitle = sprintf(_x('Grid %ss', 'Grid Columns/Rows', 'h2ml'), translatedName);
	const amountTitle = sprintf(_x('Number of %ss', 'Number of Columns/Rows', 'h2ml'), translatedName);
	const definitionsTitle = sprintf(_nx('%s Definition', '%s Definitions', count, `Collection of ${name} definitions`, 'h2ml'), translatedName);
	const singleDefinitionLabel = _x('%s %d Definition', 'Row/Column (%s) Number (%d) Defition', 'h2ml');

	//
	return (
			<ToolsPanel 
				label={panelTitle} 
				resetAll={resetAll}
				hasInnerWrapper={true}
			>
				<DoubleColumnItem
					hasValue={() => !!count}
					label={amountTitle}
					onDeselect={() => updateCount(defaultCount)}
					isShownByDefault
				>
					<NumberControl
						label={amountTitle}
						onChange={updateCount}
						value={count}
						min={1}
					/>
				</DoubleColumnItem>
				<ToolsPanelBody title={definitionsTitle} initialOpen={false}>
					{Array.from({length: count}, (_, index) => {
						const label = sprintf(singleDefinitionLabel, translatedName, index + 1);
						const value = definitions[index];
						return (<DoubleColumnItem
							hasValue={() => true}
							label={label}
							onDeselect={() => updateSingleDefinition(index, defaultDefinition)}
							isShownByDefault
						>
							<TextareaControl
								label={label}
								onChange={(value) => updateSingleDefinition(index, value)}
								value={value}
								rows={2}
								onBlur={() => {if(!value) updateSingleDefinition(index, defaultDefinition)}}
							/>
						</DoubleColumnItem>);
				})}
				</ToolsPanelBody>
			</ToolsPanel>
	);
}
