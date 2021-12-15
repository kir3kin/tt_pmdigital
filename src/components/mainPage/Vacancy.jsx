import React from "react"

import '@scss/components/Vacancy'
import '@scss-media/components/Vacancy'

const Vacancy = () => (
	<section className="vacancy">
		<div className="wrapper">
			<div className="container">
				<img src={require('@images/vacancy-spaceman.png')} className="vacancy__image" />
				<div className="vacancy__content">
					<h3 className="vacancy__title titles">Разместить вакансию</h3>
					<p className="vacancy__desc">Работодатели смогут найти вас и предложить отличную работу.</p>
				</div>
				<button type="button" className="vacancy__button button">Разместить вакансию</button>
			</div>
		</div>
	</section>
)

export default Vacancy