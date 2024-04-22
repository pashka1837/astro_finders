import {useEffect, useState} from 'react';
import './Card.css';

type CardProps = {
	desc: string;
	img: string[];
};

export default function Card({desc, img}: CardProps) {
	const [curImg, setImg] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setImg(curImg >= img.length - 1 ? 0 : curImg + 1);
		}, 1400 * (10 / img.length));
	}, [curImg]);
	return (
		<div className='container_blur card'>
			<h3>{desc}</h3>
			<img src={img[curImg]} alt='artifact image' />
		</div>
	);
}
