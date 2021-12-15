import React from "react"

import '@scss/components/SearchResult'
import '@scss/blocs/search/CandidateCard'
import '@scss/blocs/search/MoreList'
import '@scss/blocs/search/Pagination'

import '@scss-media/components/SearchResult'
import '@scss-media/blocs/search/CandidateCard'
import '@scss-media/blocs/search/MoreList'

const SPResult = ({ candidateList = [] }) => (
	<div className="search-page__result result">

		<div className="result__header">
			<h2 className="result__title titles">Мы подобрали <span className="violet">451 642</span> резюме</h2>

			<div className="result__sort">
				<p className="result__sort__desc">Резюме продавец консультант во Всей Украине</p>
				<select className="result__sort__list violet">
					<option value="1">За все время</option>
					<option value="2">За неделю</option>
				</select>
			</div>
		</div>

		{candidateList.length > 0 && (
			<ul className="result__list">
			{candidateList.map((candidate, idx) => {
				const onlineClasses = ['candidate-card__last__state']
				if (candidate.isOnline) onlineClasses.push('candidate-card__last__state--online')

				return (
					<li key={idx} className="result__list__item candidate-card">
						<div className="candidate-card__content">
							<div className="candidate-card__image clearfix">
								<img src="https://via.placeholder.com/164" alt="candidate" />
							</div>
							<h6 className="candidate-card__title">{candidate.position}</h6>
							<div className="candidate-card__info">
								<p className="candidate-card__info__name">
									{`${candidate.name}, ${candidate.age}`}
								</p>
								<p className="candidate-card__info__location">{candidate.location}</p>
							</div>
							{candidate.exp.length > 0 && (
								<ul className="candidate-card__exp">
									{candidate.exp.map((exp, idx2) => (
											<li key={idx2} className="candidate-card__exp__item">
												{exp}
											</li>
									))}
								</ul>
							)}
							<div className="candidate-card__last">
								<p className="candidate-card__last__update">
									{`Обновлено ${candidate.update}`}
								</p>
								<p className={onlineClasses.join(' ')}>
									{candidate.isOnline ? 'Онлайн' : 'Оффлайн'}
								</p>
							</div>
						</div>
						<div className="candidate-card__option">
							<div className="candidate-card__option__like">
								<input type="checkbox" name="" id="like1" />
								<label htmlFor="like1"></label>
							</div>
							<div className="candidate-card__option__more">
								<ul className="more-list">
									<li className="more-list__item">Пожаловаться</li>
									<li className="more-list__item">Скрыть кандидата</li>
								</ul>
							</div>
						</div>
					</li>
				)
			})}
			</ul>
		)}

		<nav className="result__pagination pagination">
			<a href="/" className="pagination__arr pagination__arr--prev"></a>
			<a href="/" className="pagination__item pagination__item--active">1</a>
			<a href="/" className="pagination__item">2</a>
			<p href="/" className="pagination__item pagination__item--middle">...</p>
			<a href="/" className="pagination__item">20</a>
			<a href="/" className="pagination__item">21</a>
			<a href="/" className="pagination__arr pagination__arr--next
			pagination__arr--active"></a>
		</nav>
	</div>
)

export default SPResult