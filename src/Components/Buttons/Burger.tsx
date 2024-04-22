type BurgerProps = {
	isMenuOpen: boolean;
	setOpen: (setVal: boolean) => void;
	children: JSX.Element;
};

export default function Burger({isMenuOpen, setOpen, children}: BurgerProps) {
	return (
		<button
			className='burger'
			type='button'
			onClick={() => {
				setOpen(!isMenuOpen);
			}}
		>{children}
		</button>
	);
}
