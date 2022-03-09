import store from "./store";
import * as actions from './actions'
import {bindActionCreators} from 'redux'


const countDisplay = document.getElementById('count-display')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')

const {inc, dec}=bindActionCreators(store.dispatch, actions)

incrementBtn.addEventListener('click', inc)
decrementBtn.addEventListener('click', dec)

store.subscribe(()=>countDisplay.value =store.getState())