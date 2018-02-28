import TYPE from './Type'

export default function(state = [], action)
{
	let _state = state;
	switch (action.type)
	{
		case TYPE.LOAD:
			_state = action.questions;
			break;
		case TYPE.VOTE:
			_state.find((item)=>{return item.question_id == action.id}).score += action.value;
			break;
		case TYPE.SWAP:
			let _target = _state[action.target];
			_state[action.target] = _state[action.elem];
			_state[action.elem] = _target;
			return [..._state];
			break;
		default: return state;
	}
	return _state;
} 