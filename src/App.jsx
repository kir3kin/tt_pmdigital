import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import '@scss/App'

import { MainPage } from './pages/MainPage'
import { SearchPage } from './pages/SearchPage'

export const App = () => {
	return (
		<BrowserRouter>
      <Routes>
        <Route path="*" element={ <MainPage /> } />
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
	)
}