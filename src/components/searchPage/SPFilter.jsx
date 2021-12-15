import React from "react"

import { FilterCheckbox } from "../../blocs/filters/FilterCheckbox"
import { FilterRange } from "../../blocs/filters/FilterRange"
import { FilterSwitch } from "../../blocs/filters/FilterSwitch"

import {
	LANGUAGE_LIST,
	LANGUAGE_LEVELS,
	OCCUPATION_LIST,
	EDUCATION_LIST,
	EXP_LIST
} from "../../utils/fakeData"

import '@scss/components/SearchFilter'
import '@scss-media/components/SearchFilter'

import '@scss/blocs/filter/FilterExp'
import '@scss/blocs/filter/FilterSalary'
import '@scss/blocs/filter/FilterLang'
import '@scss/blocs/filter/FilterSex'


const SPFilter = ({ isOpen }) => {
	const filterClasses = ['search-page__filter', 'filter']
	if (isOpen) filterClasses.push('filter--open')

	return (
		<div className={filterClasses.join(' ')}>
			<h3 className="filter__title">Фильтры</h3>

			<div className="filter__item">
				<FilterSwitch
					title={'Только с фотографией'}
					preffix={'photo'}
					icon={'photo'}
				/>
			</div>

			<div className="filter__item">
				<div className="filter__item__title">Возраст</div>
				<FilterRange
					min={0}
					max={75}
					defaultValues={[25,55]}
					step={1}
					preffix='age'
					ms='лет'
				/>
			</div>

			<div className="filter__item">
				<div className="filter__item__title">Пол</div>
				<div className="filter-sex">
					<div className="filter-sex__item">
						<input defaultChecked id="any" name="sex" type="radio" />
						<label htmlFor="any">Любой</label>
					</div>
					<div className="filter-sex__item">
						<input id="female" name="sex" type="radio" />
						<label htmlFor="female">Женщины</label>
					</div>
					<div className="filter-sex__item">
						<input id="male" name="sex" type="radio" />
						<label htmlFor="male">Мужчины</label>
					</div>
				</div>
			</div>

			<div className="filter__item">
				<div className="filter__item__title">Желаемая зарплата в гривне</div>
				<div className="filter-salary">
					<FilterRange
						min={0}
						max={50000}
						defaultValues={[10000,25000]}
						step={100}
						preffix='salary'
						ms='грн'
					/>
					<FilterSwitch
						title={'Не показывать без зарплаты'}
						preffix={'without-salary'}
					/>
				</div>
			</div>

			<div className="filter__item">
				<div className="filter__item__title">Опыт работы</div>
				<div className="filter-exp">
					<FilterCheckbox
						data={EXP_LIST}
						type={'first'}
						preffix={'exp'}
					/>
					<FilterSwitch
						title={'Только студенты'}
						preffix={'only-students'}
						icon={'students'}
					/>
				</div>
			</div>

			<div className="filter__item">
				<div className="filter__item__title">Владение языками</div>
				<div className="filter-lang">
					<FilterCheckbox
						data={LANGUAGE_LIST}
						type={'first'}
						preffix={'lang'}
						isDropdown={true}
						dropdownData={LANGUAGE_LEVELS}
					/>
				</div>
			</div>

			<div className="filter__item">
				<div className="filter__item__title">Тип занятости</div>
				<FilterCheckbox
					data={OCCUPATION_LIST}
					type={'second'}
					preffix={'occupation'}
				/>
			</div>

			<div className="filter__item">
				<div className="filter__item__title">Образование</div>
				<FilterCheckbox
					data={EDUCATION_LIST}
					type={'second'}
					preffix={'education'}
				/>
			</div>
		</div>
	)
}

export default SPFilter