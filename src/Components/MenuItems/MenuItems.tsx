import Item from './Item';
import twitterLOGO from '../../assets/twitter.svg';
import instaLOGO from '../../assets/insta.svg';

import './MenuItems.css';
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
		href: 'https://twitter.com/astro_pioneers',
		desc: 'twitter logo',
		imgSrc: twitterLOGO,
	},
	{
		href: 'https://www.instagram.com/alga_ga58/',
		desc: 'instagram logo',
		imgSrc: instaLOGO,
	},
];

export default function MenuItems() {
	return (
		<div className='menuItems'>
			{links.map(link => <Item key={link.href} {...link} />)}
		</div>
	);
}
