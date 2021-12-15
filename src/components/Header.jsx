import React from "react"

import '@scss/components/Header'
import '@scss/blocs/SearchForm'
import '@scss/blocs/BurgerMenu'

import '@scss-media/components/Header'
import '@scss-media/blocs/SearchForm'

export const Header = ({ searchPage }) => {

	const headerClasses = ['header']
	const buttonClasses = ['search-form__button', 'button']

	if (searchPage) {
		headerClasses.push(' header--search-page')
		buttonClasses.push(' button--search-page')
	}

	return (
		<section className={headerClasses.join(' ')}>
			<div className="wrapper">
				<div className="container">

					{searchPage ? (
						<div className="header__search__auth">Юра Марченко</div>
					) : (
						<>
							<div className="header__burger-menu burger-menu">
								<div className="burger-menu__icon"></div>
							</div>
							<h1 className="header__title">сайт по поиску работы №1</h1>
							<h2 className="header__subtitle">Please enter the vacancy and the city</h2>
						</>
					)}

					<form className="header__search search-form">
						<div className="search-form__field">
							<label
								className="search-form__label search-form__label--position"
								htmlFor="position"
							></label>
							<input
								type="text"
								id="position"
								className="search-form__input search-form__input--position"
								placeholder="На какую должность вы ищете кандидата?"
							/>
						</div>
						<div className="search-form__field">
							<label
								className="search-form__label search-form__label--city"
								htmlFor="city"
							></label>
							<input
								type="text"
								id="city"
								className="search-form__input search-form__input--city"
								placeholder="Город"
							/>
						</div>
						<button
							type="button"
							className={buttonClasses.join(' ')}
						>Найти кандидатов</button>
					</form>

				</div>
			</div>
		</section>
	)
}