import React from "react"

import '@scss/components/Vacancies'
import '@scss-media/components/Vacancies'

const Vacancies = () => {

	const cards = [
		{ number: '100 422', desc: 'актуальных вакансий'},
		{ number: '100 422', desc: 'актуальных вакансий'},
		{ number: '100 422', desc: 'актуальных вакансий'},
	]

	return (
		<section className="vacancies">
			<div className="wrapper">
				<div className="container">
					{cards.map((card, idx) => (
						<div key={idx} className="vacancies__card vacancies__card--first">
							<div className="vacancies__card__content">
								<div className="vacancies__card__numbers">{card.number}</div>
								<div className="vacancies__card__desc">{card.desc}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Vacancies