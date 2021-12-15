import React from "react"

import '@scss/components/Clients'
import '@scss-media/components/Clients'

const Clients = () => {
	const importAll = r => r.keys().map(r)
	const images = importAll(require.context(
		'@images/clients',
		false,
		/\.(png|jpe?g|svg)$/
	));

	return (
		<section className="clients">
			<div className="wrapper">
				<div className="container">
					<h3 className="clients__title titles">Нас выбрали</h3>
					<ul className="clients__list">
						{images.map((image, idx) => (
							<li key={idx} className="clients__list__item">
								<img src={image} alt="client" />
							</li>
						))}
						{images.map((image, idx) => (
							<li key={idx} className="clients__list__item">
								<img src={image} alt="client" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Clients