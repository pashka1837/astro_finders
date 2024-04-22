import useStore from '../../feature/store';

type ItemProps = {
	href: string;
	desc: string | JSX.Element;
};

export default function Item({href, desc}: ItemProps) {
	const {setOpen} = useStore();
	return (
		<a className='menuLink' onClick={() => {
			setOpen(false);
		}} href={href}>{desc}</a>
	);
}
