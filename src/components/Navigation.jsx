import React from "react"

import '@scss/components/Navigation'
import '@scss-media/components/Navigation'

export const Navigation = ({ searchPage }) => {

	const classes = ['navigation']
	if (searchPage) classes.push('navigation--search-page')

	return (
		<section className={classes.join(' ')}>
			<div className="wrapper">
				<div className="container">
					<nav className="navigation__nav">
						<a className="navigation__nav__item" href="/">Соискатель</a>
						<a className="navigation__nav__item navigation__nav__item--active" href="/">Работодатель</a>
						<a className="navigation__nav__item" href="/">HR</a>
					</nav>
					<div className="navigation__right">
						<div className="navigation__language">ru</div>
						<a href="/" className="navigation__auth">Войти</a>
						<a href="/" className="navigation__auth navigation__auth--signed">Соискателю</a>
					</div>
				</div>
			</div>
		</section>
	)
}