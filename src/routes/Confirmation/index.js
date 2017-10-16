import React from 'react'
import TopBar from './TopBar'
import Footer from './Footer'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        //Binding to view
        this.renderHome = this
            .renderHome
            .bind(this);

    }

    componentDidMount() {
        this.renderHome();
    }

    render() {
        return (
            <div>
                <TopBar/>
                < Footer/>
            </div>
        );

    }

    renderHome() {
        var formApp = function () {
            return {
                init: function () {
                    var self = this;
                }, //End init funtion

            }
        }();

        $(document).ready(function () {
            setTimeout(function () {
				var hashes = window.location.search.replace('?', '').split('&');
				var vars = [];
				var hash;
				for(var i = 0; i < hashes.length; i++) {
					hash = hashes[i].split('=');
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}
				if ('user-id' in vars)
				$
                .ajax({type: 'GET', url: 'https://api.guatevoz.com/users/' + vars['user-id'] + '/subscription/CO'});
            }, 200);

        });
    }

}

export default Home