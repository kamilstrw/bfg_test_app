import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Question from 'Components/Question'

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
export default class List extends React.Component
{
	constructor()
	{
		super();
		this.state =
		{
			active: null,
		}
	}
	render()
	{
		return(
			<div className="block">			
				{this.props.questions.map((question, key)=><a href="#" className="list-item"><Question question={question} order={key} key={key} active={key == this.state.active}/></a>)}
			</div>
		)
	}
}