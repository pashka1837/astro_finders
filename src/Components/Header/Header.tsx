import './Header.css';
import bgIMG from '../../assets/images/bg_rsz/purple_ship_bg.webp';

export default function Header() {
	return (
		<div id='header'
			className='header container_gr'
			style={{
				background: `fixed url(${bgIMG}) center / cover no-repeat`,
			}}
		>
			<div className='headline container_blur'>
				<h1 className='name'>ASTRO FINDERS</h1>
				<h2 className='desc'>where space exploration meets NFT ownership</h2>
			</div>
		</div>
	);
}
