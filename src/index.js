import _ from 'lodash'
import './style.css'

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log('xxx')
    console.log('niho')
    return element;
}


document.body.appendChild(component());