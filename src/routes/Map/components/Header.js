import React from 'react';
import cookie from 'react-cookies';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCookie: false
        }
        //Binding to view
        this.checkCookie = this
            .checkCookie
            .bind(this);
    }

    componentWillMount() {
        this.checkCookie();

    }

    checkCookie() {
        var guateVozCookie = cookie.load('guate-voz-user');
        if (guateVozCookie !== undefined) {
            this.setState({ hasCookie: true, userName: guateVozCookie.name, department: guateVozCookie.department, municipality: guateVozCookie.municipality });
        }
    }

    render() {
        const { hasCookie } = this.state
        return (
            <nav className="gtv-navbarTyp">
                <div className="container">
                    <div className="gtv-navlogoTyp"></div>
                    <div className="gtv-navSide">
                        <div className="gtv-navCenter">
                            <p className="gtv-navTitle">CHAPINES EN ESTADOS UNIDOS</p>
                            {hasCookie && (
                                <p className="gtv-navSubTitle">Bienvenido
                                    <span>
                                        {" "}{this.state.userName}{" "}
                                    </span>
                                    de {" "}{this.state.department}, {" "}{this.state.municipality}!</p>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header