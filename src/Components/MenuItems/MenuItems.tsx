import './MenuItems.css';

import Item from './Item';
import twitterLOGO from '../../assets/twitter.svg';
import instaLOGO from '../../assets/insta.svg';
import {instaLink, twitterLink} from '../../links';

export type Link = {
	href: string;
	desc: string;
	imgSrc?: string;
};

const links: Link[] = [
	{
		href: '#artifacts',
		desc: 'Artifacts',
	},
	{
		href: '#engagement',
		desc: 'Engagement',
	},
	{
		href: twitterLink,
		desc: 'twitter logo',
		imgSrc: twitterLOGO,
	},
	{
		href: instaLink,
		desc: 'instagram logo',
		imgSrc: instaLOGO,
	},
];

export default function MenuItems() {
	return (
		<div className='menuItems'>
			{links.map(link => <Item key={link.desc} {...link} />)}
		</div>
	);
}
