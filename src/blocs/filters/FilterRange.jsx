import React, { useState } from "react"

import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import '@scss/blocs/filter/FilterRange'

export const FilterRange = ({ min, max, defaultValues, step, preffix, ms }) => {
	const [slider, setSlider] = useState ({
		lowerBound: defaultValues[0],
		upperBound: defaultValues[1]
	})

	const inputChangeHandler = (e) => {
		setSlider(prev => ({
			...prev, 
			[e.target.name]: e.target.value
		}))
	}

	const sliderChangeHandler = (value) => {
		const [lowerBound, upperBound] = value
		setSlider({
			lowerBound,
			upperBound
		})
	}

	const sliderSettings = {
		min,
		max,
		step,
		allowCross: false,
		className: 'filter-range__rail__item',
		value: [slider.lowerBound, slider.upperBound],
		onChange: sliderChangeHandler
	}

	return (
		<div className="filter-range">
			<div className="filter-range__rail">
				<p className="filter-range__rail__item">от</p>
				<Range {...sliderSettings} />
				<p className="filter-range__rail__item">{ms}</p>
			</div>
			<div className="filter-range__value">
				<div className="filter-range__value__item">
					<label htmlFor={`${preffix}-min`}>от</label>
					<input
						name="lowerBound"
						id={`${preffix}-min`}
						type="number"
						onChange={inputChangeHandler}
						value={slider.lowerBound}
					/>
				</div>
				<div className="filter-range__value__item">
					<label htmlFor={`${preffix}-max`}>до</label>
					<input
						name="upperBound"
						id={`${preffix}-max`}
						type="number"
						onChange={inputChangeHandler}
						value={slider.upperBound}
					/>
					<p className="filter-range__value__ms">{ms}</p>
				</div>
			</div>
		</div>
	)
}