import TYPE from './Type'

export function loadTopics(questions)
{
	return {
		type: TYPE.LOAD,
		questions
	}
}
export function vote(id, value)
{
	return {
		type: TYPE.VOTE,
		id,
		value
	}
} 
export function swap(elem, target)
{
	return {
		type: TYPE.SWAP,
		elem,
		target
	}
}