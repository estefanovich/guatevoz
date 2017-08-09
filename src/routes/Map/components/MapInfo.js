import React from 'react';
class MapInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            template: [(
                    <p key="-1" className="gtv-state">Da click a un Estado!
                    </p>
                )]
        }
        //Binding to view
        this.renderInfo = this
            .renderInfo
            .bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.renderInfo(newProps.info);
    }

    renderInfo(info) {
        if (info.data.length > 0) {
            this.state.template = [];

            //Header
            this
                .state
                .template
                .push(
                    <p key="-1" className="gtv-state">Estado de {info.regionName}
                        , {info.code}
                    </p>
                );
            //Details
            for (var i = 0; i < info.data.length; i++) {
                this
                    .state
                    .template
                    .push(
                        <div key={i}>
                            <div className="gtv-populationContain">
                                <h3>{info.data[i].city}</h3>

                                <p id="hispano" className="gtv-population">
                                    {info.data[i].population}
                                </p>
                                <p id="chapin" className="gtv-population">
                                    {info.data[i].percentage}
                                    <span>
                                        chapines</span>
                                </p>
                            </div>

                        </div>
                    );

                this.forceUpdate();
            }
        } else {
            this.state.template = [];
            this
                .state
                .template
                .push(
                    <p key="1" className="gtv-state">No hay información disponible para este estado</p>
                );
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>
                {this.state.template}
            </div>

        );
    }
}
export default MapInfo
