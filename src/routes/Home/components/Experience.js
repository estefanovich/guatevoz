import React from 'react'

class Experience extends React.Component {
  render() {
    return (
	<div className="swiper-slide">
		<div className="gtv-quote-info">
			<div className="gtv-quote">
				<p>{this.props.quote}</p>
			</div>
			<div className="gtv-quote-text">
				<p>{this.props.name}</p>
				<span>{this.props.location}</span>
			</div>
			<div className={this.props.picture}></div>
		</div>
	</div>
    );
  }
}



export default Experience
