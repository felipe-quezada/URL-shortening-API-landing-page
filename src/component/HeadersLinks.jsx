import '../styles/HeaderLinks.css';

export const HeadersLinks = () => {
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
		</section>
	);
};
