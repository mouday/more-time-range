const moment = require("moment");

const { DATE_FORMAT} =  require('./enums.js')

/**
 * 获取年范围
 * @param {String} start_time 
 * @param {String} end_time 
 * @returns {Array}
 */
function getTimeRange(type, start_time, end_time){
    let _start_time = moment(start_time).format(DATE_FORMAT);
    let _end_time = moment(end_time).format(DATE_FORMAT);
    
    let list = [];
    
    while(_start_time <= _end_time){
        _start_time = moment(_start_time)
        
        list.push([
            _start_time.startOf(type).format(DATE_FORMAT),
            _start_time.endOf(type).format(DATE_FORMAT),
        ])
    
        _start_time = _start_time.add(1, type).format(DATE_FORMAT);
    }

    return list;
}

module.exports = {
    getTimeRange
}

