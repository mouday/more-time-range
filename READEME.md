# more-time-range



获取时间范围内的序列

- github: [https://github.com/mouday/more-time-range](https://github.com/mouday/more-time-range)


安装

```bash
npm i -S more-date-range
```

示例
```js

const {
    getYearRange,
    getWeekRange,
    getMonthRange,
    getQuarterRange,
    getTimeRange,
    timeTypeEnum
} = require('more-time-range');

console.log(getYearRange('2019-01-01', '2022-01-01'));
// [
//   [ '2019-01-01', '2019-12-31' ],
//   [ '2020-01-01', '2020-12-31' ],
//   [ '2021-01-01', '2021-12-31' ]
// ]

console.log(getWeekRange('2022-07-02', '2022-07-20'));
// [
//     [ '2022-06-26', '2022-07-02' ],
//     [ '2022-07-03', '2022-07-09' ],
//     [ '2022-07-10', '2022-07-16' ]
// ]

console.log(getMonthRange('2022-04-01', '2022-07-31'));
// [
//     [ '2022-04-01', '2022-04-30' ],
//     [ '2022-05-01', '2022-05-31' ],
//     [ '2022-06-01', '2022-06-30' ],
//     [ '2022-07-01', '2022-07-31' ]
//   ]

console.log(getQuarterRange('2022-01-01', '2022-09-30'));
// [
//     [ '2022-01-01', '2022-03-31' ],
//     [ '2022-04-01', '2022-06-30' ],
//     [ '2022-07-01', '2022-09-30' ]
// ]

console.log(getTimeRange(timeTypeEnum.YEAR, '2020-07-01', '2022-07-30'));
// [ 
//     [ '2020-01-01', '2020-12-31'], 
//     [ '2021-01-01', '2021-12-31'] 
// ]
```

枚举值：
```js
// 周 月 季 年
const timeTypeEnum = {
    WEEK: 'week',
    MONTH: 'month',
    QUARTER: 'quarter',
    YEAR: 'year',
}
```