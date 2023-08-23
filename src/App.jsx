import { ShortenLink } from './components/ShortenLink';
import { HeadersLinks } from './components/HeadersLinks';
import { SecondHeader } from './components/SecondHeader';
import './styles/App.css';
import { AvancedStatics } from './components/AvancedStatics';
import FooterTextBox from './components/FooterTextBox';
import { FooterNav } from './components/FooterNav';

export const App = () => {
	return (
		<>
			<header>
				<HeadersLinks />
				<SecondHeader />
			</header>
			<main className="main-container global-container">
				<ShortenLink />
				<AvancedStatics />
			</main>
			<footer>
				<FooterTextBox />
				<FooterNav />
			</footer>
		</>
	);
};
