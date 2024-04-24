/**
 * Main
 */

export default function({colRefrence, rowRefrence, disabled, onMouseDown, onMouseEnter, onMouseUp}) {
	
	//
	const style = {
		gridColumn: colRefrence, 
		gridRow: rowRefrence,
		...(disabled && {pointerEvents: 'none'})
	};

	//
	return (
		<div 
			className="wp-block-h2ml-grid--appender--guide-grid-area" 
			style={style}
			onMouseDown={onMouseDown}
			onMouseEnter={onMouseEnter}
			onMouseUp={onMouseUp}
		>
			<div>
			</div>
		</div>
	)
}