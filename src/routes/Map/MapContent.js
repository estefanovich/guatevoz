import React from 'react';

import MapInfo from './MapInfo';

class MapContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mapInfo: {
                regionName: '',
                code: '',
                data: []
            }
        }

        //Binding to view
        this.renderMap = this
            .renderMap
            .bind(this);

        this.showStateInfo = this
            .showStateInfo
            .bind(this);
    }
    showStateInfo(code, region) {
        this.setState({
            mapInfo: {
                regionName: region,
                code: code.toUpperCase(),
                data: this.getStateData(code.toUpperCase())
            }
        });

    }

    componentDidMount() {
        this.renderMap();
    }

    getStateData(state) {
        const stateData = {
            'CA': [
                {
                    city: "Los Angeles-Long Beach-Anaheim",
                    population: "273,000",
                    percentage: "4.60 %"
                }, {
                    city: "San Francisco-Oakland-Hayward",
                    population: "43,000",
                    percentage: "4.30 %"
                }, {
                    city: "Riverside-San Bernardino-Ontario",
                    population: "37,000",
                    percentage: "1.70 %"
                }, {
                    city: "Fresno",
                    population: "2,000",
                    percentage: "0.40%"
                }, {
                    city: "Sacramento--Roseville--Arden-Arcade",
                    population: "7,000",
                    percentage: "1.50 %"
                }, {
                    city: "Bakersfield",
                    population: "3,000",
                    percentage: "0.70 %"
                }, {
                    city: "Sacramento--Roseville--Arden-Arcade",
                    population: "7,000",
                    percentage: "1.50 %"
                }, {
                    city: "Oxnard-Thousand Oaks-Ventura",
                    population: "5,000",
                    percentage: "1.40 %"
                }, {
                    city: "Stockton-Lodi",
                    population: "2,000",
                    percentage: "7.00 %"
                }, {
                    city: "Sacramento--Roseville--Arden-Arcade",
                    population: "7,000",
                    percentage: "1.50 %"
                }, {
                    city: "Modesto",
                    population: "3,000",
                    percentage: "1.30 %"
                }, {
                    city: "Santa Rosa",
                    population: "2,000",
                    percentage: "1.50 %"
                }
            ],
            'NY': [
                {
                    city: "New York-Newark-Jersey City",
                    population: "121,000",
                    percentage: "n/a"
                }
            ],
            'TX': [
                {
                    city: "Houston-The Woodlands-Sugar Land",
                    population: "54,000",
                    percentage: "2.30 %"
                }, {
                    city: "Laredo",
                    population: "1,000",
                    percentage: "0.40 %"
                }
            ],
            'FL': [
                {
                    city: "Miami-Fort Lauderdale-West Palm Beach",
                    population: "51,000",
                    percentage: "n/a"
                }, {
                    city: "Cape Coral-Fort Myers",
                    population: "11,000",
                    percentage: "7.90 %"
                }
            ],
            'MA': [
                {
                    city: "Boston-Cambridge-Newton",
                    population: "45,000",
                    percentage: "9.30 %"
                }
            ],
            'IL': [
                {
                    city: "Chicago-Naperville-Elgin",
                    population: "41,000",
                    percentage: "2.00 %"
                }
            ],
            'GA': [
                {
                    city: "Atlanta-Sandy Springs-Roswell",
                    population: "27,000",
                    percentage: "4.50 %"
                }
            ],
            'RI': [
                {
                    city: "Providence-Warwick",
                    population: "27,000",
                    percentage: "14.40 %"
                }
            ],
            'CT': [
                {
                    city: "Bridgeport-Stamford-Norwalk,",
                    population: "17,000",
                    percentage: "9.80 %"
                }
            ],
            'MD': [
                {
                    city: "Baltimore-Columbia-Towson",
                    population: "14,000",
                    percentage: "9.30 %"
                }, {
                    city: "Washington-Arlington-Alexandria",
                    population: "69,000",
                    percentage: "7.60 %"
                }
            ],
            'TN': [
                {
                    city: "Nashville-Davidson--Murfreesboro--Franklin",
                    population: "8,000",
                    percentage: "6.10 %"
                }
            ],
            'OK': [
                {
                    city: "Oklahoma Cit",
                    population: "9,000",
                    percentage: "5.30 %"
                }
            ],
            'AZ': [
                {
                    city: "Phoenix-Mesa-Scottsdale",
                    population: "13,000",
                    percentage: "1.00 %"
                }
            ],
            'NV': [
                {
                    city: "Las Vegas-Henderson-Paradise",
                    population: "13,000",
                    percentage: "2.10 %"
                }
            ],
            'WA': [
                {
                    city: "Seattle-Tacoma-Bellevue",
                    population: "9,000",
                    percentage: "2.50 %"
                }
            ],
            'OR': [
                {
                    city: "Portland-Vancouver-Hillsboro",
                    population: "6,000",
                    percentage: "0.70 %"
                }
            ],
            'MO': [
                {
                    city: "Kansas City",
                    population: "4,000",
                    percentage: "2.20 %"
                }
            ],
            'MI': [
                {
                    city: "Detroit-Warren-Dearborn",
                    population: "3,000",
                    percentage: "1.70%"
                }
            ],
            'WI': [
                {
                    city: "Milwaukee-Waukesha-West Allis",
                    population: "2,000",
                    percentage: "1.30%"
                }
            ],
            'NC': [
                {
                    city: "Raleigh",
                    population: "5,000",
                    percentage: "3.80%"
                }
            ],
            'AZ': [
                {
                    city: "Yuma",
                    population: "1,000",
                    percentage: "0.80%"
                }
            ]

        };

        if (stateData[state]) {
            return stateData[state];
        } else {
            return [];
        }

    }

    renderMap() {
        var showStateInfo = this.showStateInfo;
        $(document).ready(function () {
            var message = "";
            function resizeMap() {
                if (window.innerWidth <= 1023) {
                    $('#vmap').html('');
                    $('#vmap').vectorMap({
                        map: 'usa_en',
                        enableZoom: false,
                        showTooltip: true,
                        selectedColor: '#4886DB',
                        hoverColor: null,
                        backgroundColor: 'rgba(0,0,0,0)',
                        color: '#A6A6A6',
                        selectedRegions: ['ma'],
                        onRegionClick: function (event, code, region) {
                            event.preventDefault();
                        }
                    });
                } else {
                    $('#vmap').html('');
                    $('#vmap').vectorMap({
                        map: 'usa_en',
                        enableZoom: false,
                        showTooltip: true,
                        selectedColor: null,
                        hoverColor: null,
                        backgroundColor: 'rgba(0,0,0,0)',
                        color: '#A6A6A6',
                        onRegionOver: function (event, code, region) {
                            message = region;
                        },
                        onLabelShow: function (event, label, code) {
                            label.html("<div class='gtv-toolContainer'><div class='gtv-toolTip'>" + message + "</p></div></div>");
                        },
                        onRegionClick: function (event, code, region) {
                            event.preventDefault();
                            showStateInfo(code, region);
                        }
                    });
                }
            };
            resizeMap();
            $(window).resize(function () {
                resizeMap()
            });
        });
    }

    render() {
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-lg-4">

                            <MapInfo info={this.state.mapInfo}/>

                        </div>
                        <div className="col-xs-12 col-md-8 col-lg-8">
                            <div id="vmap"></div>
                        </div>
                        <div className="gtv-note">Nota: En algunas áreas metropolitanas, hubo un número
                            insuficiente de observaciones para proporcionar una estimación confiable para
                            tres grupos de origen hispano. En estos casos, se enumerarán menos de tres
                            grupos en la tabla. Fuente: Pew Research Center tabulaciones de la Encuesta de
                            la Comunidad Americana de 2014 (IPUMS).
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MapContent