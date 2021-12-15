import React from "react"

import '@scss/components/Download'
import '@scss/blocs/Stores'

import '@scss-media/components/Download'
import '@scss-media/blocs/Stores'

const Download = () => (
	<section className="download">
		<div className="wrapper">
			<div className="container">
				<div className="download__image">
					<img src={require('@images/download-phones.png')} />
				</div>
				<div className="download__content">
					<h3 className="download__title titles">Скачивайте приложение</h3>
					<p className="download__desc">Работодатели смогут найти вас и предложить отличную работу.</p>
				</div>
				<div className="download__store store">
					<a href="/" className="store__item store__item--iphone"></a>
					<a href="/" className="store__item store__item--google"></a>
				</div>
			</div>
		</div>
	</section>
)

export default Download