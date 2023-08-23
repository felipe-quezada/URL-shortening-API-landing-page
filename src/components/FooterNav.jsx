import '../styles/FooterNav.css';

export const FooterNav = () => {
	return (
		<section className="footer-nav">
			<div className="footer-nav__container global-container">
				<img
					src="src\assets\logo.svg"
					alt="logo"
					style={{ filter: 'invert()' }}
				/>
				<div className="footer-nav__container-menu">
					<nav>
						<strong>Features</strong>
						<ul>
							<li><a href='#'>Link Shortening</a></li>
							<li><a href='#'>Branded Links</a></li>
							<li><a href='#'>Analistics</a></li>
						</ul>
					</nav>
					<nav>
						<strong>Resources</strong>
						<ul>
							<li><a href='#'>Blog</a></li>
							<li><a href='#'>Developers</a></li>
							<li><a href='#'>Support</a></li>
						</ul>
					</nav>
					<nav>
						<strong>Company</strong>
						<ul>
							<li><a href='#'>About</a></li>
							<li><a href='#'>Our Team</a></li>
							<li><a href='#'>Careers</a></li>
							<li><a href='#'>Contact</a></li>
						</ul>
					</nav>
					<nav className="footer-nav_container-menu-img">
						<div className="footer-nav__container-img">
							<a href="#">
								<img
									className="facebook-img"
									src="src\assets\icons8-facebook.svg"
									alt="facebook"
								/>
								<img
									className="facebook-img"
									src="src\assets\icons8-facebookHover.svg"
									alt="facebook"
								/>
							</a>
						</div>
						<div className="footer-nav__container-img">
							<a href="#">
								<img
									className="twitter-img"
									src="src\assets\icons8-twitter.svg"
									alt="twitter"
								/>
								<img
									className="twitter-img"
									src="src\assets\icons8-twitterHover.svg"
									alt="twitter"
								/>
							</a>
						</div>
						<div className="footer-nav__container-img">
							<a href="#">
								<img
									className="pinterest-img"
									src="src\assets\icons8-pinterest.svg"
									alt="pinterest"
								/>
								<img
									className="pinterest-img"
									src="src\assets\icons8-pinterestHover.svg"
									alt="pinterest"
								/>
							</a>
						</div>
						<div className="footer-nav__container-img">
							<a href="#">
								<img
									className="instagram-img"
									src="src\assets\icons8-instagram.svg"
									alt="instagram"
								/>
								<img
									className="instagram-img"
									src="src\assets\icons8-instagramHover.svg"
									alt="instagram"
								/>
							</a>
						</div>
					</nav>
				</div>
			</div>
		</section>
	);
};
