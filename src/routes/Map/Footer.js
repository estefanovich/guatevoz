import React from 'react'

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        //Binding to view
        this.shareToFacebook = this
            .shareToFacebook
            .bind(this);

    }

    shareToFacebook() {
        FB
            .ui({
                method: 'share',
                display: 'popup',
                href: 'https://www.facebook.com/guatevoz/'
            }, function (response) {});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <button className="gtv-shareBtn" onClick={this.shareToFacebook}>
                        <span>Compartir en Facebook</span>
                    </button>
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
        );

    }

}

export default Footer
