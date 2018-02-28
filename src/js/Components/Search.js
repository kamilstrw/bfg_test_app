import React from 'react'
import DatepickerInput from "Components/InputDate"
import Datepicker from 'react-datepicker'
import moment from 'moment'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import * as actionsQuestions from "Store/Questions/Actions.js"

const mapDispatchToProps = (dispatch) => {
    return {
        loadTopics: (questions) => {
            dispatch(actionsQuestions.loadTopics(questions));
        }
    }
};
const mapStateToProps = (state) => ({
    questions: state.Questions
})


@connect(mapStateToProps, mapDispatchToProps)
export default class Search extends React.Component
{
	constructor()
	{
		super();
		this.state = {
			date: moment(new Date(2018, 0, 1)),
			enableSearch: false
		}
		this.handleDateChange = this.handleDateChange.bind(this);
		this.getAnswers = this.getAnswers.bind(this);
	}
	componentDidMount()
	{
		this.getAnswers();
	}
	handleDateChange(date)
	{
		if (date != this.state.date)
		{
			this.setState({date: date, enableSearch: true})
		}
	}
	getAnswers()
	{
		let self = this;
		let xhr = new XMLHttpRequest();		
		xhr.open("GET", "https://api.stackexchange.com/2.2/search/advanced?fromdate="+this.state.date.format("YYYY-MM-DD")+"&order=desc&sort=votes&title=react-redux&site=stackoverflow", true);
		xhr.send();
		xhr.onreadystatechange = function() {
		  if (xhr.readyState != 4) return;
		  	if (xhr.status == 200)
		  	{
		  		self.props.loadTopics(JSON.parse(xhr.response).items.slice(0, 5))
		  		self.setState({enableSearch: false})
		  	}
		  	else
		  	{
		  		alert("Ошибка при выполнении запроса")
		  	}
		}		
		
	}
	render()
	{
		return(
			<div className="block search">
				5 самых популярных вопросов на Stackoverflow, содержащих строку "react-redux" в
				наименовании, начиная с 
				<div className="Datepicker">
				<Datepicker 
					customInput = {<DatepickerInput/>}
					onChange = {this.handleDateChange}
					selected = {this.state.date}
					maxDate = {moment()}
					withPortal
				/>
				</div>
				{this.state.enableSearch &&
					<a className="button inline" onClick={this.getAnswers}>Поиск</a>
				}
			</div>
		)
	}
}
