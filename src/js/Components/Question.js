import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionsQuestions from "Store/Questions/Actions.js"

const mapDispatchToProps = (dispatch) => {
    return {
        loadTopics: (questions) => {
            dispatch(actionsQuestions.loadTopics(questions));
        },
        vote: (id, value) => {
            dispatch(actionsQuestions.vote(id, value));
        },
        swap: (elem, target) => {
        	dispatch(actionsQuestions.swap(elem, target));
        }
        
    }
};
const mapStateToProps = (state) => ({
    questions: state.Questions
})


@connect(mapStateToProps, mapDispatchToProps)
export default class Question extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			votedFor: false,
			votedAgainst: false
		}
		this.voteFor = this.vote.bind(this, 1);
		this.voteAgainst = this.vote.bind(this, -1);
		this.swapUp = this.swap.bind(this, -1);
		this.swapDown = this.swap.bind(this, 1);
	}
	vote(val)
	{
		this.props.vote(this.props.question.question_id, val)
		this.setState({votedFor: val > 0, votedAgainst: val < 0})
	}
	swap(val)
	{
		this.refs.wrap.blur();
		this.props.swap(this.props.order, this.props.order + val);
	}

	render()
	{
		console.log(this.props.order)
		return(
			<a href="#" ref="wrap" className="list-item">
			<div className="question">
				<div className="question__preview">
					<div className="question__preview__title">{this.props.question.title}</div>
					<div className="question__preview__score">{this.props.question.score}</div>
					<div className="question__preview__rate">
						<span onClick={this.voteFor} className={`${this.state.votedFor ? 'disabled' : ""}`}>+</span>
						<span onClick={this.voteAgainst} className={`${this.state.votedAgainst ? 'disabled' : ""}`}>-</span>
					</div>
					<div className="question__preview__rate">
						<span onClick={this.swapUp} className={`${this.props.order == 0 ? 'disabled' : ""}`}>&uArr;</span>
						<span onClick={this.swapDown} className={`${this.props.order == this.props.questions.length - 1 ? 'disabled' : ""}`}>&dArr;</span>
					</div>
				</div>
 				<div className="question__fulldata">
 					<div className="question__fulldata__user--name">Имя создателя вопроса: {this.props.question.owner.display_name}</div>
 					<div className="question__fulldata__user--rating">Рейтинг создателя вопроса: {this.props.question.owner.reputation}</div>
 					<div className="question__fulldata__views">Колличество просмотров: {this.props.question.view_count}</div>
 				</div>
			</div>
			</a>
		)
	}
}