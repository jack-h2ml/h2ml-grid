/**
 * Wordpress Dependencies
 */

import {
	useState,
	useEffect
} from '@wordpress/element';

import {
	__
} from '@wordpress/i18n';

import {
	Button
} from '@wordpress/components';

/**
 * Internal Dependencies
 */

import GuideArea from './guideArea.js';
import GuideAppenderPreview from './guideAppenderPreview.js';
import GuideAppenderToolbar from './guideAppenderToolbar.js';

/**
 * Main
 */

export default function({colCount, rowCount, isAppending, isUpdating, addUpdateGridArea, cancel}) {

	//
	const [dragging, setDragging] = useState(null);
	
	//
	const [appendingStart, setAppendingStart] = useState(null);
	const [appendingCurrent, setAppendingCurrent] = useState(null);

	//
	const canAppend = !dragging && (appendingStart && appendingCurrent);

	//
	const columnStart = (appendingStart && appendingCurrent) && Math.min(appendingStart[0], appendingCurrent[0]);
	const columnEnd = (appendingStart && appendingCurrent) && Math.max(appendingStart[0], appendingCurrent[0]) + 1;
	const rowStart = (appendingStart && appendingCurrent) && Math.min(appendingStart[1], appendingCurrent[1]);
	const rowEnd = (appendingStart && appendingCurrent) && Math.max(appendingStart[1], appendingCurrent[1]) + 1;

	//
	const appendButtonText = {
		[isAppending]: __('Add Grid Area', 'h2ml'),
		[!!isUpdating]: __('Update Gride Area', 'h2ml')
	}[true];

	const helpText = {
		[isAppending]: __('Click and drag above to define a new grid area.', 'h2ml'),
		[!!isUpdating]: __('Click and drag above to update this grid area.', 'h2ml')
	}[true];

	//
	useEffect(() => {
		if(!isAppending && !isUpdating) {
			setAppendingStart(null);
			setAppendingCurrent(null);
		}
	}, [isAppending, isUpdating]);

	//
	return (<>
		{Array.from({length: (colCount * rowCount)}, (_, i) => {
			//
			const colRefrence = (i % colCount) + 1;
			const rowRefrence = Math.floor((i / colCount) + 1);		

			//
			return (
				<GuideArea
					disabled={(!isAppending && !isUpdating)}
					colRefrence={colRefrence}
					rowRefrence={rowRefrence}
					onMouseDown={() => {
						setDragging(true);
						setAppendingStart([colRefrence, rowRefrence]);
						setAppendingCurrent([colRefrence, rowRefrence]);
					}}
					onMouseEnter={() => {
						if(dragging) setAppendingCurrent([colRefrence, rowRefrence]);
					}}
					onMouseUp={() => {
						setDragging(false);
					}}
				/>
			);
		})}
		{(isAppending || isUpdating) && (<>
			{appendingStart && (
				<GuideAppenderPreview
					columnStart={columnStart}
					columnEnd={columnEnd}
					rowStart={rowStart}
					rowEnd={rowEnd}
				/>
			)}
			<GuideAppenderToolbar
				helpText={() => (<p>{helpText}</p>
				)}
				cancelAppend={() => (
					<Button
						variant="link"
						label={__('Cancel', 'h2ml')}
						onClick={cancel}
					>
						{__('Cancel', 'h2ml')}
					</Button>
				)}
				confirmAppend={() => (
					<Button
						variant="primary"
						label={appendButtonText}
						onClick={() => addUpdateGridArea(columnStart, columnEnd, rowStart, rowEnd)}
						disabled={!canAppend}
					>
						{appendButtonText}
					</Button>
				)}
			/>
		</>)}
	</>);
}