import React from "react"

import '@scss/blocs/filter/FilterSwitch'

export const FilterSwitch = ({ title, preffix, icon = false}) => {
	const switchClasses = ['filter-switch__desc']
	if (icon) {
		switchClasses.push('filter-switch__desc__icon')
		switchClasses.push(`filter-switch__desc__icon--${icon}`)
	}

	return (
		<div className="filter-switch">
			<p className={switchClasses.join(' ')}>
				{title}
			</p>
			<div className="filter-switch__button">
				<input type="checkbox" name={preffix} id={preffix} />
				<label htmlFor={preffix}></label>
			</div>
		</div>
	)
}