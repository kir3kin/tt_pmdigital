import React from "react"

import { Navigation } from "../components/Navigation"
import { Header } from "../components/Header"

// import { Vacancies } from "../components/mainPage/Vacancies"
// import { Clients } from "../components/mainPage/Clients"
// import { Vacancy } from "../components/mainPage/Vacancy"
// import { Blog } from "../components/mainPage/Blog"
// import { Download } from "../components/mainPage/Download"
// import { Footer } from "../components/Footer"

export const MainPage = () => {
	const searchPage = false

  // ::: [START:] Lazy loading
  const Vacancies = React.lazy(() => import('../components/mainPage/Vacancies'))
  const Clients = React.lazy(() => import('../components/mainPage/Clients'))
  const Vacancy = React.lazy(() => import('../components/mainPage/Vacancy'))
  const Blog = React.lazy(() => import('../components/mainPage/Blog'))
  const Download = React.lazy(() => import('../components/mainPage/Download'))
  const Footer = React.lazy(() => import('../components/Footer'))
  // ::: [END:] Lazy loading


	return (
		<React.Fragment>
			<Navigation searchPage={searchPage} />
			<Header searchPage={searchPage} />
			<React.Suspense fallback={null}>
				<Vacancies />
				<Clients />
				<Vacancy />
				<Blog />
				<Download />
				<Footer />
			</React.Suspense>
		</React.Fragment>
	)


}