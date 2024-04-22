import './Navbar.css';
import logo from '../../assets/logo.svg';
import useStore from '../../feature/store';
import Burger from '../Buttons/Burger';
import MenuItems from '../MenuItems/MenuItems';

const openBurger = <svg
	xmlns='http://www.w3.org/2000/svg'
	fill='none'
	viewBox='0 0 24 24'
	strokeWidth='1.5'
	stroke='currentColor'
	className='w-6 h-6'
>
	<path
		strokeLinecap='round'
		strokeLinejoin='round'
		d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
	/>
</svg>;

export default function Navbar() {
	const {isMenuOpen, setOpen} = useStore();
	return (
		<div className='navbar'>
			<div className='container_blur'>
				<div className='logos' role='button' onClick={() => {
					location.href = '#header';
				}}>
					<img src={logo} alt='logo' />
					<p>ASTRO FINDERS</p>
				</div>
				<MenuItems />
				<Burger isMenuOpen={isMenuOpen} setOpen={setOpen}>{openBurger}</Burger>
			</div>
		</div>
	);
}

