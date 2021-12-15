import React from "react"

import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { SPBody } from "../components/searchPage/SPBody";
// import { Footer } from "../components/Footer";

export const SearchPage = () => {
	const searchPage = true

	// ::: [START:] Lazy loading
	const Footer = React.lazy(() => import('../components/Footer'))
	// ::: [END:] Lazy loading

	return (
		<React.Fragment>
			<Navigation searchPage={searchPage} />
			<Header searchPage={searchPage} />
			<SPBody />
			<React.Suspense fallback={null}>
				<Footer />
			</React.Suspense>
		</React.Fragment>
	)
}