import React, { useState } from "react"

import '@scss/blocs/filter/FilterCheckbox'
import '@scss/blocs/filter/FilterDropdown'

export const FilterCheckbox = ({
	data,
	type,
	preffix,
	isDropdown = false,
	dropdownData = []
}) => {

	const filterClasses = ['filter-checkbox']
	if (isDropdown) filterClasses.push('filter-checkbox--dropdown')
	if (typeof type === 'string') filterClasses.push(`filter-checkbox--${type}-type`)


	// only for test example !!!
	const [dropdown, setDropdown] = useState({
		lang1: true,
		lang2: false,
		lang3: false,
		lang4: false,
		lang5: false,
		lang6: false
	})


	const dropdownHandler = (langId) => {
		setDropdown(prev => ({
			...prev,
			[langId]: !prev[langId]
		}))
	}


	return (
		<ul className={filterClasses.join(' ')}>
			{data.map(item => {

				const itemClasses = ['filter-checkbox__item']
				if (isDropdown && dropdown[preffix + item.id]) itemClasses.push('dropdown-open')

				const settings = isDropdown ? {
					onClick: () => dropdownHandler(preffix + item.id)
				} : {}

				return (
					<li key={item.id} className={itemClasses.join(' ')}>

						<div className="filter-checkbox__item__content">
							<input
								id={String(preffix + item.id)}
								name={String(preffix + item.id)}
								type="checkbox"
							/>
							<label htmlFor={String(preffix + item.id)}>
								{isDropdown && (
									<span
										className={`filter-${preffix}__item filter-${preffix}__item--${item.shorthand}`}
									></span>
								)}
								{item.title}
							</label>
						</div>

						<div
							className="filter-checkbox__item__info"
							{...settings}
						>{item.numbers}</div>

						{isDropdown && dropdownData.length > 0 && (
							<ul className="dropdown-list">
								{dropdownData.map(child => (
									<li key={`${preffix + item.id}-l${child.id}`} className="dropdown-list__item">
										<div className="dropdown-list__item__content">
											<input
												id={`${preffix + item.id}-l${child.id}`}
												name={`${preffix + item.id}-level`}
												value={`${preffix + item.id}-l${child.id}`}
												type="radio"
											/>
											<label
												htmlFor={`${preffix + item.id}-l${child.id}`}
											>{child.title}</label>
										</div>
										<div className="dropdown-list__item__info">{child.numbers}</div>
									</li>
								))}
							</ul>
						)}

					</li>
				)
			})}
		</ul>
	)
}