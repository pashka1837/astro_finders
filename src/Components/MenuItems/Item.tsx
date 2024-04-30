import useStore from '../../feature/store';
import {type Link} from './MenuItems';

export default function Item({href, desc, imgSrc}: Link) {
	const {setOpen} = useStore();
	return (
		<a className='menuLink' onClick={() => {
			setOpen(false);
		}} href={href}>
			{imgSrc ? <img src={imgSrc} alt={desc}/> : desc}
		</a>
	);
}
