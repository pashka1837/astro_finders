import './Engagement.css';
import bgIMG from '../../assets/images/bg_rsz/purple_station_bg.webp';
import Accordion from '../Accordion/Accordion';

const accordionData = [
	'Establish trade routes between planets, participate in the in-game economy, and earn rewards by contributing to the galactic marketplace.',
	'Become part of the Galactic Council, where players govern the game\'s updates, events, and economic policies through decentralized governance.',
	'Discover hidden lore fragments on planets, collect them to unlock backstory and mysteries, and shape the future of the cosmos.',

];

export default function Engagement() {
	return (
		<div id='engagement' className='engagement container_gr' style={{
			background: `fixed url(${bgIMG}) center / cover no-repeat`,
		}}><div className='subheadline container_blur'>
				<h3>Ready to embark on your cosmic journey?</h3>
			</div>
			<Accordion data={accordionData} />
			<div className='subheadline container_blur'>
				<h3>Sign up for early access to <span>ASTRO FINDERS</span> and join the ranks of Galactic Explorers today!</h3>
			</div>
		</div>
	);
}
