
const { getTimeRange} =  require('./time-range.js')

const { timeTypeEnum } =  require('./enums.js')


function getYearRange(start_time, end_time){
    return getTimeRange('year', start_time, end_time);
}

function getQuarterRange(start_time, end_time){
    return getTimeRange('quarter', start_time, end_time);
}

function getMonthRange(start_time, end_time){
    return getTimeRange('month', start_time, end_time);
}

function getWeekRange(start_time, end_time){
    return getTimeRange('week', start_time, end_time);
}

module.exports = {
    getTimeRange,
    getWeekRange,
    getMonthRange,
    getQuarterRange,
    getYearRange,
    timeTypeEnum
}