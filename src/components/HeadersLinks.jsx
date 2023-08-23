import { useReducer } from 'react';
import '../styles/HeaderLinks.css';
import logo from "../../src/assets/logo.svg"

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

export const HeadersLinks = () => {
	const menuState = {
		isClicked: false,
		menuClass: 'hidden',
		burger: 'unclicked',
	};
	const [menu, setMenu] = useReducer(reducer, menuState);

	const handleClick = () => {
		setMenu({ type: 'clicked' });
	};

	return (
		<>
			<section className="headers-container global-container">
				<img src={logo} alt="logo" />
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
				</nav>
			</section>
			<section className={`nav global-container ${menu.menuClass}`}>
				<nav className={'nav-menu'}>
					<a href="#">Features</a>
					<a href="#">Pricing</a>
					<a href="#">Resources</a>
					<hr />
					<a href="#">Login</a>
					<button>Sign Up</button>
				</nav>
			</section>
		</>
	);
};
