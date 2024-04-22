import Item from './Item';
import './MenuItems.css';
type Link = {
	href: string;
	desc: string | JSX.Element;
};

const x = <svg xmlns='http://www.w3.org/2000/svg' enableBackground='new 0 0 1668.56 1221.19' viewBox='0 0 1668.56 1221.19' id='twitter-x'><path fill='#f3f8ff' d='M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z' transform='translate(52.39 -25.059)'></path></svg>;

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
		href: 'https://twitter.com/',
		desc: x,
	},
];

export default function MenuItems() {
	return (
		<div className='menuItems'>
			{links.map(link => <Item key={link.href} {...link} />)}
		</div>
	);
}
