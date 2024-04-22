/* eslint-disable no-negated-condition */
type AccordionItemProps = {
	text: string;
	order: number;
	currentOpen: number;
	setCurrent: React.Dispatch<React.SetStateAction<number>>;

};

const arrowDown = <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
	<path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
</svg>;

const arrowUp = <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
	<path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
</svg>;

export default function AccordionItem({text, order, currentOpen, setCurrent}: AccordionItemProps) {
	function handleClick() {
		if (order !== currentOpen) {
			setCurrent(order);
		} else {
			setCurrent(-1);
		}
	}

	return (
		<div className='container_blur'>
			<div className='accordion_item'>{order === currentOpen
				? <h3>{text}</h3>
				: <h3>{text.slice(0, 43) + '...'}</h3>}
			<button className='arrow_btn' onClick={handleClick} type='button'>
				{order === currentOpen
					? arrowUp : arrowDown }
			</button></div>

		</div>
	);
}
