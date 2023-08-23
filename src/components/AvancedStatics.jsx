import '../styles/AvancedStatics.css';
import recognitation from "../../src/assets/icon-brand-recognition.svg"
import detailed from "../../src/assets/icon-detailed-records.svg"
import fullyCustom from "../../src/assets/icon-fully-customizable.svg"

export const AvancedStatics = () => {
	return (
		<>
			<section className="advanced-container global-container">
				<h1>Advanced Statistics</h1>
				<p>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</section>
			<div
				className="global-container"
				style={{
					position: 'relative',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<section className="advanced-items global-container">
					<section className="advanced-items__container">
						<div className="advanced-items__container-img">
							<img
								src={recognitation}
								alt="recognition icon"
							/>
						</div>
						<div>
							<h2>Brand Recognition</h2>
							<br />
							<p>
								Boost your brand recognition with each click. Generic links
								don’t mean a thing. Branded links help instil confidence in your
								content.
							</p>
						</div>
					</section>
					<section className="advanced-items__container">
						<div className="advanced-items__container-img">
							<img
								src={detailed}
								alt="detailed records"
							/>
						</div>
						<div>
							<h2>Detailed Records</h2>
							<br />
							<p>
								Gain insights into who is clicking your links. Knowing when and
								where people engage with your content helps inform better
								decisions.
							</p>
						</div>
					</section>
					<section className="advanced-items__container">
						<div className="advanced-items__container-img">
							<img
								src={fullyCustom}
								alt="fully customizable"
							/>
						</div>
						<div>
							<h2>Fully Customizable</h2>
							<br />
							<p>
								Improve brand awareness and content discoverability through
								customizable links, supercharging audience engagement.
							</p>
						</div>
					</section>
				</section>
				<hr className="advanced-items__style-line" />
			</div>
		</>
	);
};
