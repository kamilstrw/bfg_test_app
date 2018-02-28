import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from "Store"
import Search from "Components/Search"
import List from "Components/List"
import "Styles/index.scss"

const App = (
	<Provider store={store}>
		<div className="App">
			<Search/>
			<List/>
		</div>
	</Provider>
)


ReactDOM.render(App, document.getElementById('root'));