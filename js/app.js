import dataJson from '../data.json' assert {type : 'json'}
import chart from '../components/chart.js'

const $ = document;
const box = $.querySelector('.chart-box')
const days = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];

let data = dataJson;
let date = new Date

window.customElements.define('site-chart', chart);

data.forEach(data => {
  let newElem = $.createElement("site-chart");
  newElem.setAttribute("money", data.amount);
  newElem.setAttribute('day', data.day);

  if (data.day == days[date.getDay()]){
    newElem.setAttribute('color', 'blue')
  }

  box.append(newElem)
})
