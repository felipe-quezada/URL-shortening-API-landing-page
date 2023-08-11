import { useState } from 'react';
import '../styles/HeaderLinks.css';

export const HeadersLinks = () => {
	const [isClickedMenu, setIsClickedMenu] = useState(false);
	const handleClickMenu = () => setIsClickedMenu(!isClickedMenu)

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
				<div
					className={`headers-container__arrow-button ${
						isClickedMenu ? 'clicked' : 'unclicked'
					}`}
					onClick={handleClickMenu}
				>
					<strong> {'<'} </strong>
				</div>
				<ul className={`headers-container__menu-content ${isClickedMenu ? 'visible' :'hidden'}`}>
					<a href="#">Login</a>
					<a href="#">Resources</a>
					<a href="#">Features</a>
					<a href="#">Pricing</a>
					<a>Sign up</a>
				</ul>
				<div className={`headers-container__bar-menu ${isClickedMenu ? 'visible' :'hidden'}`}></div>
				<section className="headers-container__right"></section>
			</nav>
		</section>
	);
};
