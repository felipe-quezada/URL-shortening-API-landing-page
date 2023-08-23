import '../styles/SecondHeader.css';
import ilustration from '../assets/illustration-working.svg'
export const SecondHeader = () => {
	return (
		<section className="SecondHeader-container global-container">
			<div className="SecondHeader-container__txt">
				<h1>More than just shorter links</h1>
				<p>
					{`Build your brand's recognition and get detailed insights on how your links are performing.`}
				</p>
				<button className="SecondHeader-container__button">Get started</button>
			</div>
			<div className="SecondHeader-container__img">
				<img
					style={{ width: '100%', objectPosition: 'left' }}
					src={ilustration}
					alt="ilustration"
				/>
			</div>
		</section>
	);
};
