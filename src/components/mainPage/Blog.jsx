import React, { useMemo } from "react"

import { useMediaQuery } from "react-responsive"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { DEVICE_TYPE, USERS_COUNT } from "../../utils/consts"

import '@scss/components/Blog'
import '@scss/blocs/Slider'

import '@scss-media/components/Blog'
import '@scss-media/blocs/Slider'

const Blog = () => {
	// ::: [START:] screen size check ::: \\
	const tablet = useMediaQuery({ query: DEVICE_TYPE.tablet})
	const mobile = useMediaQuery({ query: DEVICE_TYPE.mobile})

	// @count - amount of users which will be downloaded per one request
	const count = useMemo(() => {
		return tablet ? ( mobile ? (USERS_COUNT.mobile) : (USERS_COUNT.tablet) ) : (USERS_COUNT.desktop)
	}, [tablet, mobile])
	// ::: [END:] screen size check ::: \\

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		slidesPerRow: count,
		dotsClass: 'slider__controls'
	}

	const slideDefaultImg = require('@images/blog/blog-item.svg')

	const slides = [
		{ title: 'Advice to Job seekers', data: '18.04.2021', image: slideDefaultImg },
		{ title: 'Advice to Job seekers', data: '18.04.2021', image: slideDefaultImg },
		{ title: 'Advice to Job seekers', data: '18.04.2021', image: slideDefaultImg },
		{ title: 'Advice to Job seekers', data: '18.04.2021', image: slideDefaultImg },
		{ title: 'Advice to Job seekers', data: '18.04.2021', image: slideDefaultImg },
	]

	return (
		<section className="blog">
			<div className="wrapper">
				<div className="container">
					<div className="blog__header">
						<h3 className="blog__title titles">Блог</h3>
						<a href="/" className="blog__all-link">All articles</a>
					</div>
					<div className="blog__slider slider">
						<Slider {...settings}>
							{slides.map((slide, idx) => (
								<div className="slider__item" key={idx}>
									<img src={slide.image} className="slider__item__image" />
									<p className="slider__item__title">{slide.title}</p>
									<p className="slider__item__data">{slide.data}</p>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Blog