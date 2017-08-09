import React from 'react'

export const Footer = () => (
	<div>
        <div className="container">
            <a href="https://www.facebook.com/guatevoz/" target="_blank">
                <button className="gtv-shareBtn"><span>Compartir en Facebook</span></button>
            </a>
        </div>

        <footer className="gtv-footer">
            <div className="container">
                <div className="gtv-fbShare">
                    <a href="https://www.facebook.com/guatevoz/" target="_blank">
                        <span>www.facebook.com/GuateVoz</span>
                    </a>
                </div>
                <p className="gtv-footerText">2017 GuateVoz.com Todos los derechos reservados.</p>
            </div>
        </footer>

    </div>
)

export default Footer



