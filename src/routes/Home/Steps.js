import React from 'react';
import Municipios from './Municipios';
import cookie from 'react-cookies';

class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 'noselect',
            birthPlace: 'noselect',
            department: 'noselect',
            municipality: 'noselect',
            showStepOne: true,
            showStepTwo: false,
            validFirstName: true,
            validLastName: true,
            validGender: true,
            validZipCode: true,
            validEmail: true,
            validBirthPlace: true,
            validDepartment: true,
            validMunicipality: true,
            firstStepData: {}
        }

        //Binding to view
        this.finishSecondStep = this
            .finishSecondStep
            .bind(this);

        this.genderChange = this
            .genderChange
            .bind(this);

        this.birthPlaceChange = this
            .birthPlaceChange
            .bind(this);

        this.departmentChange = this
            .departmentChange
            .bind(this);

        this.municipalityChange = this
            .municipalityChange
            .bind(this);

        this.continue = this
            .continue
            .bind(this);

        this.goToMap = this
            .goToMap
            .bind(this);

        this.getDepartmentName = this
            .getDepartmentName
            .bind(this);

    }

    inputHotValidation(input) {
        switch (input) {
            case 'firstName':
                if (this.refs.firstName.value == '') {
                    this.setState({validFirstName: false});
                } else {
                    this.setState({validFirstName: true});
                }
                break;
            case 'lastName':
                if (this.refs.lastName.value === '') {
                    this.setState({validLastName: false});
                } else {
                    this.setState({validLastName: true});
                }
                break;
            case 'zipCode':
                if (!this.validateZipCode(this.refs.zipCode.value)) {
                    this.setState({validZipCode: false});
                } else {
                    this.setState({validZipCode: true});
                }
                break;
            case 'email':
                if (!this.validateEmail(this.refs.email.value)) {
                    this.setState({validEmail: false});
                } else {
                    this.setState({validEmail: true});
                }
                break;
        }
    }

    genderChange(event) {
        if (event.target.value !== "noselect") {
            this.setState({gender: event.target.value, validGender: true});
        }
    }
    birthPlaceChange(event) {
        if (event.target.value !== "noselect") {
            this.setState({birthPlace: event.target.value, validBirthPlace: true});
        }
    }
    departmentChange(event) {
        if (event.target.value !== "noselect") {
            this.setState({department: event.target.value, validDepartment: true});
        }
    }
    municipalityChange(event) {
        if (event.target.value !== "noselect") {
            this.setState({municipality: event.target.value, validMunicipality: true});
        }
    }
    continue(event) {
        event.preventDefault();
        this.getFirstStep();
    }
    finishSecondStep(event) {
        event.preventDefault();
        this.getSecondStep();
    }
    validateEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    validateZipCode(zip) {
        return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
    }

    getFirstStep() {
        var firstStepData = new Object(),
            errorCounter = 0;
        
        firstStepData['zip-code'] = this.refs.zipCode.value;
        if (!this.validateZipCode(firstStepData['zip-code'])) {
            this.setState({validZipCode: false});
            errorCounter++;
        } else {
            this.setState({validZipCode: true});
        }


        firstStepData['birth-place'] = this.state.birthPlace;
        if (firstStepData['birth-place'] == 'noselect') {
            this.setState({validBirthPlace: false});
            errorCounter++;
        } else {
            this.setState({validBirthPlace: true});
        }

        firstStepData['department'] = this.state.department;
        if (firstStepData['department'] == 'noselect') {
            this.setState({validDepartment: false});
            errorCounter++;
        } else {
            this.setState({validDepartment: true});
        }

        firstStepData['municipality'] = this.state.municipality;
        if (firstStepData['municipality'] == 'noselect') {
            this.setState({validMunicipality: false});
            errorCounter++;
        } else {
            this.setState({validMunicipality: true});
        }

        if (errorCounter == 0) {
            this.setState({firstStepData: firstStepData, showStepOne: false, showStepTwo: true});
        }

    }

    getDepartmentName(code) {
        const department = {
            "AV": "Alta Verapaz",
            "BV": "Baja Verapaz",
            "CM": "Chimaltenango",
            "CQ": "Chiquimula",
            "PR": "El Progreso",
            "ES": "Escuintla",
            "GU": "Guatemala",
            "HU": "Huehuetenango",
            "IZ": "Izabal",
            "JA": "Jalapa",
            "JU": "Jutiapa",
            "PE": "Petén",
            "QZ": "Quetzaltenango",
            "QC": "Quiché",
            "RE": "Retalhuleu",
            "SA": "Sacatepéquez",
            "SM": "San Marcos",
            "SR": "Santa Rosa",
            "SO": "Sololá",
            "SU": "Suchitepéquez",
            "TO": "Totonicapán",
            "ZA": "Zacapa"
        };

        return department[code];
    }

    goToMap(cookieData) {
        cookie.save('guate-voz-user', JSON.stringify(cookieData), {path: '/'});
        var url = document.location.href + 'map';
        window.location = url;
    }

    getSecondStep() {
        var secondStepData = new Object(),
            errorCounter = 0;

        secondStepData['first-name'] = this.refs.firstName.value;
        if (secondStepData['first-name'] == '') {
            this.setState({validFirstName: false});
            errorCounter++;
        } else {
            this.setState({validFirstName: true});
        }

        secondStepData['last-name'] = this.refs.lastName.value;
        if (secondStepData['last-name'] === '') {
            this.setState({validLastName: false});
            errorCounter++;
        } else {
            this.setState({validLastName: true});
        }

        secondStepData['gender'] = this.state.gender;
        if (secondStepData['gender'] === "noselect") {
            this.setState({validGender: false});
            errorCounter++;
        } else {
            this.setState({validGender: true});
        }

        secondStepData['e-mail'] = this.refs.email.value;
        if (!this.validateEmail(secondStepData['e-mail'])) {
            this.setState({validEmail: false});
            errorCounter++;
        } else {
            this.setState({validEmail: true});
        }

        if (errorCounter == 0) {

            let firstStepDataToSend = this.state.firstStepData,
                sendData = JSON.stringify(Object.assign(firstStepDataToSend, secondStepData)),
                getDepartment = this.getDepartmentName,
                goToMap = this.goToMap;
            // Submit Data
            $
                .ajax({type: 'POST', url: 'https://api.guatevoz.com/users/', data: sendData, contentType: 'application/json'})
                .success(function (data, textStatus, xhr) {
                    //console.log(xhr.status);
                    goToMap({
                        name: secondStepData['first-name'],
                        department: getDepartment(firstStepDataToSend['department']),
                        municipality: firstStepDataToSend['municipality']
                    });
                })
                .fail(function (jqXHR, exception) {
                               
                switch(jqXHR.status) {
                 case 500:
                   alert('Un error ocurrio procesando tu solicitud. Favor intentarlo nuevamente.');
                 break;
                 case 400:
                   alert('Revisa tus datos e intentalo nuevamente.');
                 break;
                 default:
                    goToMap({
                        name: secondStepData['first-name'],
                        department: getDepartment(firstStepDataToSend['department']),
                        municipality: firstStepDataToSend['municipality']
                    });
                }
                
                });
        }

    }

    validateInput(type, isValid) {
        let prepend,
            error;
        switch (type) {
            case 'input':
                prepend = 'gtv-input';
                error = 'has-error-input';
                break;
            case 'select':
                prepend = 'gtv-select';
                error = 'has-error-select';
                break;
        }
        if (isValid) {
            return prepend
        } else {
            return prepend + ' ' + error;
        }
    }

    render() {
        const {showStepOne} = this.state;
        const {showStepTwo} = this.state;
        return (
            <div>
                {showStepOne && (
                    <form id="gtvForm" action={this.continue}>
                        <div className="gtv-formD" id="gtvForm">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className={this.validateInput('select', this.state.validBirthPlace)}>
                                        <div className="gtv-selectContain">
                                            <div className="gtv-select-arrow"></div>
                                        </div>
                                        <label className="gtv-select-in" id="lugar">País de nacimiento</label>
                                        <select onChange={this.birthPlaceChange} value={this.state.birthPlace}>
                                            <option value="noselect">País de nacimiento</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="US">Estados Unidos</option>
                                            <option value="NA">Otro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className={this.validateInput('input', this.state.validZipCode)}>
                                        <label className="gtv-input-in">Zip Code en USA</label>
                                        <input id="zipcode" ref="zipCode" type="tel" placeholder="Zip Code en USA"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className={this.validateInput('select', this.state.validDepartment)}>
                                        <div className="gtv-selectContain">
                                            <div className="gtv-select-arrow"></div>
                                        </div>
                                        <label className="gtv-select-in" id="departamento">Departamento</label>
                                        <select onChange={this.departmentChange} value={this.state.department}>
                                            <option value="noselect">Departamento</option>
                                            <option value="AV">Alta Verapaz</option>
                                            <option value="BV">Baja Verapaz</option>
                                            <option value="CM">Chimaltenango</option>
                                            <option value="CQ">Chiquimula</option>
                                            <option value="PR">El Progreso</option>
                                            <option value="ES">Escuintla</option>
                                            <option value="GU">Guatemala</option>
                                            <option value="HU">Huehuetenango</option>
                                            <option value="IZ">Izabal</option>
                                            <option value="JA">Jalapa</option>
                                            <option value="JU">Jutiapa</option>
                                            <option value="PE">Petén</option>
                                            <option value="QZ">Quetzaltenango</option>
                                            <option value="QC">Quiché</option>
                                            <option value="RE">Retalhuleu</option>
                                            <option value="SA">Sacatepéquez</option>
                                            <option value="SM">San Marcos</option>
                                            <option value="SR">Santa Rosa</option>
                                            <option value="SO">Sololá</option>
                                            <option value="SU">Suchitepéquez</option>
                                            <option value="TO">Totonicapán</option>
                                            <option value="ZA">Zacapa</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className={this.validateInput('select', this.state.validMunicipality)}>
                                        <div className="gtv-selectContain">
                                            <div className="gtv-select-arrow"></div>
                                        </div>
                                        <label className="gtv-select-in" id="municipio">Municipio</label>
                                        <Municipios
                                            onChange={this.municipalityChange}
                                            value={this.state.municipality}
                                            ref="Departamento"
                                            departamento={this.state.department}/>
                                    </div>
                                </div>
                            </div>
                            <div className="gtv-buttonForm" id="gtv-button" onClick={this.continue}>
                                <input type="submit" className="gtv-buttonText" value="Continuar" name=""/>
                                <div className="gtv-buttonFormGB"></div>
                            </div>
                        </div>
                    </form>
                )}
                {showStepTwo && (
                    <form id="gtvForm" action={this.finishSecondStep}>
                        <div className="gtv-formC" id="gtvForm">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div
                                        className="gtv-input"
                                        className={this.validateInput('input', this.state.validFirstName)}>
                                        <label className="gtv-input-in">Nombre</label>
                                        <input id="nombre" ref="firstName" type="text" placeholder="Nombre"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className={this.validateInput('input', this.state.validLastName)}>
                                        <label className="gtv-input-in">Apellido</label>
                                        <input id="apellido" ref="lastName" type="text" placeholder="Apellido"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className={this.validateInput('select', this.state.validGender)}>
                                        <div className="gtv-selectContain">
                                            <div className="gtv-select-arrow"></div>
                                        </div>
                                        <label className="gtv-select-in" id="genero">Género</label>
                                        <select onChange={this.genderChange} value={this.state.gender}>
                                            <option value="noselect">Género</option>
                                            <option value="F">Femenino</option>
                                            <option value="M">Masculino</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className={this.validateInput('input', this.state.validEmail)}>
                                        <label className="gtv-input-in">Email</label>
                                        <input id="email" ref="email" type="text" placeholder="Email"/>
                                    </div>

                                </div>
                            </div>
                            <div className="gtv-buttonForm" id="gtv-button" onClick={this.finishSecondStep}>
                                <input type="submit" className="gtv-buttonText" value="Unirme ahora!" name=""/>
                                <div className="gtv-buttonFormGB"></div>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        );
    }
}

export default Steps
