import React, { useState } from "react"

// import { SPResult } from "./SPResult";
// import { SPFilter } from "./SPFilter";

import { CANDIDATE_LIST } from "../../utils/fakeData";

import '@scss/pages/SearchPage'
import '@scss-media/pages/SearchPage'

export const SPBody = () => {
	const [openFilter, setOpenFilter] = useState(false)
	const toggleFilter = () => setOpenFilter(!openFilter)

	const iconClasses = ['search-page__icon']
	if (openFilter) iconClasses.push('search-page__icon--open')

	// ::: [START:] Lazy loading
	const SPResult = React.lazy(() => import('./SPResult'))
	const SPFilter = React.lazy(() => import('./SPFilter'))
	// ::: [END:] Lazy loading

	return (
		<section className="search-page">
			<div className="wrapper">
				<div className="container">
					<div
						className={iconClasses.join(' ')}
						onClick={toggleFilter}
					></div>
					<React.Suspense fallback={null}>
						<SPResult candidateList={CANDIDATE_LIST}/>
						<SPFilter isOpen={openFilter} />
					</React.Suspense>
				</div>
			</div>
		</section>
	)
}