import './App.css';
import Header from './Components/Header/Header';
import DropDownMenu from './Components/DropDownMenu/DropDownMenu';
import Navbar from './Components/Navbar/Navbar';
import Feautures from './Components/Feautures/Feautures';
import Engagement from './Components/Engagement/Engagement';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<>
			<Navbar />
			<DropDownMenu/>
			<Header />
			<Feautures />
			<Engagement />
			<Footer/>
		</>
	);
}

export default App;
