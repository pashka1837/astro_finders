/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Item from './Item';
import twitterLOGO from '../../assets/twitter.svg';
import instaLOGO from '../../assets/insta.svg';

import './MenuItems.css';

// Import dotenv from 'dotenv';
// dotenv.config();

console.log(process.env.REACT_APP_TWIT_URL);
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
		href: process.env.REACT_APP_TWIT_URL!,
		desc: 'twitter logo',
		imgSrc: twitterLOGO,
	},
	{
		href: process.env.REACT_APP_INSTA_URL!,
		desc: 'instagram logo',
		imgSrc: instaLOGO,
	},
];

export default function MenuItems() {
	return (
		<div className='menuItems'>
			{
				links.map(link => <Item key={link.desc} {...link} />)}
		</div>
	);
}
