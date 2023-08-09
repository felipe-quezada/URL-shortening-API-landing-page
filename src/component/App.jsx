import { ShortenLink } from './ShortenLink';
import { HeadersLinks } from './HeadersLinks';
import { SecondHeader } from './SecondHeader';
import '../styles/App.css';
import { AvancedStatics } from './AvancedStatics';

export const App = () => {
	return (
		<>
			<header>
				<HeadersLinks />
				<SecondHeader />
			</header>
			<main className="main-container">
				<ShortenLink />
				<AvancedStatics />
			</main>
		</>
	);
};
