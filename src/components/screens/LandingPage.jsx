import React from 'react'

import Header from '../includes/Header';
import Campuses from './landing/Campuses';
import Certification from './landing/Certification';
import School from './landing/School';
import Spotlight from './landing/Spotlight'
import Tech from './landing/Tech';
import Tefun from './landing/Tefun';


export default function LandingPage() {
	return (
		<>
			<Header />
			<Spotlight />
			<Tefun />
			<Campuses />
			<Tech />
			<Certification />
			<School />
		</>
	)
}
