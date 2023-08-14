import { useReducer } from 'react';
import '../styles/HeaderLinks.css';

export const HeadersLinks = () => {
	const menuState = {
		isClicked: false,
		menuClass: 'hidden',
		burger: 'unclicked',
	};
	const reducer = (menu, action) => {
		if (action.type == 'clicked') {
			return {
				isClicked: !menu.isClicked,
				menuClass: menu.isClicked ? 'hidden' : 'visible',
				burger: menu.isClicked ? 'unclicked' : 'clicked',
			};
		}
		throw Error('Unknown action');
	};
	const [menu, setMenu] = useReducer(reducer, menuState);

	const handleClick = () => {
		setMenu({ type: 'clicked' });
	};

	return (
		<section className="headers-container global-container">
			<img src="src\assets\logo.svg" alt="logo" />
			<nav className="headers-container__menu global-container">
				<ul className="headers-container__left">
					<a href="#">Features</a>
					<a href="#">Pricing</a>
					<a href="#">Resources</a>
				</ul>
				<section className="headers-container__right">
					<a>Login</a>
					<button className="headers-conainer__button">Sign Up</button>
				</section>
			</nav>
			<nav className="headers-container__menu-responsive">
				<div onClick={handleClick} className={`burger-menu ${menu.burger}`}>
					<div className="burger-bar"></div>
					<div className="burger-bar"></div>
					<div className="burger-bar"></div>
				</div>
				<nav className={`nav-menu ${menu.menuClass}`}>
					<a href="#">login</a>
					<a href="#">Pricing</a>
					<a href="#">Features</a>
					<a href="#">Resources</a>
					<a href="#">Sign in</a>
					<a>{String(menu.isClicked)}</a>
				</nav>
			</nav>
		</section>
	);
};
