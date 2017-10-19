import React from 'react'
import Experience from './Experience'

export const Experiences = () => (
	<div className="gtv-quoteContain">
		<div className="container">
			<p className="gtv-quote-title">CHAPINES EN ESTADOS UNIDOS</p>
			<p className="gtv-quote-subtitle">Ellos se unieron a nuestra comunidad</p>

			<div className="swiper-container">
				<div className="swiper-wrapper">
					<Experience 
						name="Mirian Aldana"
						quote="Estoy muy contenta. ¡Encontre el único lugar donde me contacté con los chapines de mi estado!"
						location="Los Angeles, CA"
						picture="gtv-quote-img gtv-quoteFirst"
					/>
					<Experience 
						name="Luis Gonzalez"
						quote="¡No sabía que habían tantos chapines en mi ciudad! ¡Gracias Chapines en USA!!"
						location="Austin, TX"
						picture="gtv-quote-img gtv-quoteSecond"
					/>
					<Experience 
						name="Juan Fernandez"
						quote="¡Gracias a esta comunidad he conocido más chapines en Providence!"
						location="Providence, RI"
						picture="gtv-quote-img gtv-quoteThird"
					/>
	

				</div>
				<div className="swiper-pagination"></div>
			</div>
		</div>
	</div>

)

export default Experiences
