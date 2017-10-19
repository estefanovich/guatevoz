import React from 'react'
import VozForm from './VozForm'
export const TopBar = () => (
	<div className="gtv-topBar">
		<nav className="gtv-navbar">
			<div className="container">
				<div className="gtv-navlogo"></div>
			</div>
		</nav>
		<div className="container">
			<h1 className="gtv-mainTitle">¿Sabes cúantos <span>Guatemaltecos</span> vivimos en Estados Unidos?</h1>
			<VozForm />
			<p className="gtv-certified">Nuestro sitio cuenta con certificado de seguridad, tu información esta segura.</p>
		</div>
	</div>
)

export default TopBar
