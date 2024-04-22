import './Footer.css';
import bgIMG from '../../assets/images/bg_rsz/purple_station_bg.webp';
import logo from '../../assets/logo.svg';

export default function Footer() {
	return (
		<div className='footer container_gr' style={{
			background: `fixed url(${bgIMG}) center / cover no-repeat`,
		}}>
			<div className='inner'>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<img src={logo} alt='logo' />
					<p> ASTRO FINDERS </p>
				</div>
				<p>  2024 all rights reserved</p>
			</div>
		</div>
	);
}
