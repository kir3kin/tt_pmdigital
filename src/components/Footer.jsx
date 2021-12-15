import React from "react"

import '@scss/components/Footer'
import '@scss/blocs/Stores'

import '@scss-media/components/Footer'
import '@scss-media/blocs/Stores'

const Footer = () => (
	<section className="footer">
		<div className="wrapper">
			<footer className="container">
				<div className="footer__top">
					<ul className="footer__list">
						<p className="footer__list__title">Job Seekers</p>
						<li className="footer__list__item">
							<a href="/">Search Jobs</a>
						</li>
						<li className="footer__list__item">
							<a href="/">Create Resume</a>
						</li>
						<li className="footer__list__item">
							<a href="/">Job Allert</a>
						</li>
						<li className="footer__list__item">
							<a href="/">Advice to Job Seeker</a>
						</li>
					</ul>
					<ul className="footer__list">
						<p className="footer__list__title">Employer</p>
						<li className="footer__list__item">
							<a href="/">Post a Job</a>
						</li>
						<li className="footer__list__item">
							<a href="/">Search Resume</a>
						</li>
						<li className="footer__list__item">
							<a href="/">Support</a>
						</li>
						<li className="footer__list__item">
							<a href="/">Advice to Employer</a>
						</li>
					</ul>
					<ul className="footer__list">
						<p className="footer__list__title">Job Meteor</p>
						<li className="footer__list__item">
							<a href="/">About Us</a>
						</li>
						<li className="footer__list__item">
							<a href="/">Blog</a>
						</li>
						<li className="footer__list__item">
							<a href="/">FAQ</a>
						</li>
					</ul>
					<ul className="footer__list">
						<p className="footer__list__title">Partner With us</p>
						<li className="footer__list__item">
							<a href="/">Advertising on the website</a>
						</li>
						<li className="footer__list__item">
							<a href="/">Affiliate Program</a>
						</li>
						<li className="footer__list__item">
							<a href="/">Contact Us</a>
						</li>
					</ul>
				</div>
				<div className="footer__social">
					<a href="/" className="footer__social__item footer__social__item--twitter"></a>
					<a href="/" className="footer__social__item footer__social__item--linkedin"></a>
					<a href="/" className="footer__social__item footer__social__item--facebook"></a>
					<a href="/" className="footer__social__item footer__social__item--instagram"></a>
					<a href="/" className="footer__social__item footer__social__item--youtube"></a>
					<a href="/" className="footer__social__item footer__social__item--whatsapp"></a>
				</div>
				<div className="footer__store store">
					<a href="/" className="store__item store__item--iphone-gray"></a>
					<a href="/" className="store__item store__item--google-gray"></a>
				</div>
				<div className="footer__bottom">
					<div className="footer__info">
						<a href="/" className="footer__info__item">Privacy Policy
						</a>
						<p className="footer__info__item">
						&copy; 2021 Job Meteor. All rights reserved
						</p>
						<a href="/" className="footer__info__item">Terms of Use
						</a>
					</div>
				</div>
			</footer>
		</div>
	</section>
)

export default Footer