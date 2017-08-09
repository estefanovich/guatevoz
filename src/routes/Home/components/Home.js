import React from 'react'
import TopBar from './TopBar'
import DidYouKnow from './DidYouKnow'
import Experiences from './Experiences'
import Footer from './Footer'
import "../../../scripts/libs/swiper.js"

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
                < DidYouKnow/>
                <Experiences/>
                < Footer/>
            </div>
        );

    }

    renderHome() {
        var formApp = function () {
            var swiper = "";
            return {
                reInit: function () {
                    swiper.resizeFix();
                },
                init: function () {
                    var self = this;
                    $('.swiper-container').css({width: '90 %'})
                    swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 3,
                        paginationClickable: true,
                        spaceBetween: 30,
                        breakpoints: {
                            767: {
                                slidesPerView: 'auto',
                                spaceBetween: 10,
                                initialSlide: 1,
                                centeredSlides: true
                            }
                        }
                    });

                    //Events on inputs self.checkInputs();
                    self.showSwiper();

                    window.addEventListener("resize", self.resizeSwipe());

                }, //End init funtion

                showSwiper: function () {
                    var self = this;
                    if (window.innerWidth <= 767) {
                        swiper.unlockSwipes();
                    } else {
                        swiper.slideTo(1, 200, true);
                        swiper.lockSwipes();
                    }
                },

                resizeSwipe: function () {
                    var self = this;
                    self.showSwiper();
                },

                //Focus In Out, KeyUp, Change of inputs to validate
                checkInputs: function () {
                    var self = this;
                    container = $('.gtv-input'),
                    input = container.find('input');

                    input.focusin(function (event) {
                        $(this).addClass('gtv-activeInput');
                        $(this)
                            .parent()
                            .find('.gtv-input-in')
                            .addClass('gtv-activeLabel');
                    });

                    input.focusout(function (event) {
                        var inputVal = $(this)
                            .val()
                            .length;
                        if (inputVal === 0) {
                            $(this).removeClass('gtv-activeInput');
                            $(this)
                                .parent()
                                .find('.gtv-input-in')
                                .removeClass('gtv-activeLabel');
                        }
                    });
                }
            }
        }();

        $(document).ready(function () {
            formApp.init();
            setTimeout(function () {
                formApp.init();
            }, 200);

        });
    }

}

export default Home