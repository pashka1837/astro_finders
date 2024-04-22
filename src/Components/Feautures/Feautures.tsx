import './Feautures.css';

import bgIMG from '../../assets/images/bg_rsz/purple_ship_bg2.webp';

import moon4IMG from '../../assets/images/planets_rsz/moon4.webp';
import deadIMG from '../../assets/images/planets_rsz/dead.webp';
import earth1IMG from '../../assets/images/planets_rsz/earth1.webp';
import frozenIMG from '../../assets/images/planets_rsz/frozen.webp';
import moon1IMG from '../../assets/images/planets_rsz/moon1.webp';

import blue_shipIMG from '../../assets/images/ships_rsz/blue_ship.webp';
import golden_ship_1IMG from '../../assets/images/ships_rsz/golden_ship_1.webp';
import golden_ship_2IMG from '../../assets/images/ships_rsz/golden_ship_2.webp';
import green_shipIMG from '../../assets/images/ships_rsz/green_ship.webp';
import orange_shipIMG from '../../assets/images/ships_rsz/orange_ship.webp';
import purple_shipIMG from '../../assets/images/ships_rsz/purple_ship.webp';
import red_shipIMG from '../../assets/images/ships_rsz/red_ship.webp';

import Card from '../Card/Card';

const cards = [
	{
		img: [moon4IMG, deadIMG, earth1IMG, frozenIMG, moon1IMG],
		desc: 'Collect rare planets, moons, and celestial phenomena, each with unique traits and resource availability',
	},
	{
		img: [blue_shipIMG, golden_ship_1IMG, golden_ship_2IMG, green_shipIMG, orange_shipIMG, purple_shipIMG, red_shipIMG],
		desc: 'Pilot customizable spaceships through procedurally generated star systems',
	},
];

export default function Feautures() {
	return (
		<div id='artifacts' className='features container_gr' style={{
			background: `fixed url(${bgIMG}) center / cover no-repeat`,
		}}>
			<div className='subheadline container_blur'>
				<h3>Discover, collect, and trade rare artifacts from distant planets!</h3>
			</div>
			<div className='cards_container'>
				{cards.map(card => <Card key={card.desc} {...card}/>)}
			</div>
		</div>
	);
}
