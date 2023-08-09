import { useState } from 'react';
import '../styles/ShortenLink.css';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const ShortenLink = () => {
	const [inputText, setInputText] = useState('');
	const [shortenLinks, setShortenLinks] = useState([]);
	const [errorSyntax, setErrorSyntax] = useState(false);

	const handleText = (e) => {
		setInputText(e.target.value);
	};
	const handleForm = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.request({
				method: 'POST',
				url: 'https://api.shrtco.de/v2/shorten',
				params: { url: inputText },
			});
			const newLink = {
				origin: data.result.original_link,
				link: data.result.short_link,
				isCopied: false,
			};

			setErrorSyntax(false);

			if (shortenLinks.length === 4) {
				shortenLinks.shift();
				setShortenLinks([...shortenLinks, newLink]);
			} else {
				setShortenLinks([...shortenLinks, newLink]);
			}
		} catch (error) {
			setErrorSyntax(true);
		}
	};
	const handleCopy = (id) => {
		shortenLinks[id].isCopied = true;
		setShortenLinks([...shortenLinks]);
	};

	return (
		<div className="global-container">
			<form onSubmit={handleForm}>
				<section className="shorten-container">
					<div className="shorten-container__main">
						<input
							className={
								errorSyntax
									? 'shorten-container__input-error'
									: 'shorten-container__input'
							}
							onChange={handleText}
							placeholder="Shorten a link here..."
						/>
						<p className="shorten-container__link-require-error">
							{errorSyntax ? 'Please add a Link' : ''}
						</p>
					</div>
					<div className="shorten-container__button">
						<button type="submit">Shorten it!</button>
					</div>
				</section>
			</form>
			<section>
				<div className="shorten-links global-container">
					{shortenLinks.map((shortenLink, index) => (
						<section className="shorten-links__list" key={index}>
							<span>{shortenLink.origin}</span>
							<hr className="shorten-links__hr" />
							<div className="shorten-links__container">
								<span className="shorten-links__shr">{shortenLink.link}</span>
								<CopyToClipboard
									text={shortenLink.link}
									onCopy={() => handleCopy(index)}
								>
									<button
										className={
											shortenLink.isCopied
												? 'shorten-links__copied'
												: 'shorten-links__copy'
										}
									>
										{shortenLink.isCopied ? 'Copied!' : 'Copy'}
									</button>
								</CopyToClipboard>
							</div>
						</section>
					))}
				</div>
			</section>
		</div>
	);
};
