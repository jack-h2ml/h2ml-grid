/**
 * Main
 */

export default function({helpText: HelpText, confirmAppend: ConfirmAppend, cancelAppend: CancelAppend}) {
	return (
		<div className="wp-block-h2ml-grid--appender--toolbar">
			<HelpText/>
			<div>
				<CancelAppend/>
				<ConfirmAppend/>
			</div>
		</div>
	);
}