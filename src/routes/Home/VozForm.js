import React from 'react';
import Steps from './Steps'

class VozForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gtv-formContainer">
        <h2>¡Únete a nosotros para conocer mas de la comunidad chapina en USA!</h2>
        <Steps/>
      </div>
    );
  }
}
export default VozForm
