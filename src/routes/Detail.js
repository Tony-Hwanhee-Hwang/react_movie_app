import React from "react";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push("/");
		}
	}
	render() {
		const { location } = this.props;
		let result;
		if (location.state)
			result = (
				<div>
					<img src={location.state.poster} alt={location.state.title} />
					<span>{location.state.summary}</span>
				</div>
			);
		else result = null;
		return result;
	}
}

export default Detail;
