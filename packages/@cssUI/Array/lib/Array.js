'use strict';
import {string} from 'string'

module.exports = array;

function array(array) {
    array.map((item,index)=>{
        console.log('this array is in looping ~~')
        string(item)
    })
    // TODO
}
