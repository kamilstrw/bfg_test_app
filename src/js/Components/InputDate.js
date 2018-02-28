import React from 'react'
import PropTypes from 'prop-types'

export default class InputDate extends React.Component
{
	constructor()
	{
		super();
	}
	render()
	{
		return(<a className="button" onClick={this.props.onClick}>{this.props.value}</a>)
	}
}


InputDate.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};