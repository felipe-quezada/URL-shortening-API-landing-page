import '../styles/FooterNav.css';
import logo from "../../src/assets/logo.svg"
import facebook from "../../src/assets/icons8-facebook.svg"
import facebookHover from "../../src/assets/icons8-facebookHover.svg"
import twitter from "../../src/assets/icons8-twitter.svg"
import twitterHover from "../../src/assets/icons8-twitterHover.svg"
import pinterest from "../../src/assets/icons8-pinterest.svg"
import pinterestHover from "../../src/assets/icons8-pinterestHover.svg"
import instagram from "../../src/assets/icons8-instagram.svg"
import instagramHover from "../../src/assets/icons8-instagramHover.svg"

export const FooterNav = () => {
	return (
		<section className="footer-nav">
			<div className="footer-nav__container global-container">
				<img
					src={logo}
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
									src={facebook}
									alt="facebook"
								/>
								<img
									className="facebook-img"
									src={facebookHover}
									alt="facebook"
								/>
							</a>
						</div>
						<div className="footer-nav__container-img">
							<a href="#">
								<img
									className="twitter-img"
									src={twitter}
									alt="twitter"
								/>
								<img
									className="twitter-img"
									src={twitterHover}
									alt="twitter"
								/>
							</a>
						</div>
						<div className="footer-nav__container-img">
							<a href="#">
								<img
									className="pinterest-img"
									src={pinterest}
									alt="pinterest"
								/>
								<img
									className="pinterest-img"
									src={pinterestHover}
									alt="pinterest"
								/>
							</a>
						</div>
						<div className="footer-nav__container-img">
							<a href="#">
								<img
									className="instagram-img"
									src={instagram}
									alt="instagram"
								/>
								<img
									className="instagram-img"
									src={instagramHover}
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
