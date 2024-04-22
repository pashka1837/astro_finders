import {useState} from 'react';
import './Accordion.css';
import AccordionItem from './AccordionItem';

type AccordionProps = {
	data: string[];
};

export default function Accordion({data}: AccordionProps) {
	const [currentOpen, setCurrent] = useState(0);
	return (
		<div className='container_accordion'>
			{data.map((text, i) => <AccordionItem key={text} order={i} text={text}
				currentOpen={currentOpen} setCurrent={setCurrent} />)}
		</div>
	);
}
