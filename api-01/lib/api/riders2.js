module.exports = exports = {
  ridersForDate,
  datesForRider
}

const request = require('request');

const GQL_API_HOST = 'api-02';

function ridersForDate(req, res) {
  const GQL_TEMPLATE = `{ ridersForDate(date: "$__date__") {
      name
      direction
      date {
        year
        month
        day
      }
    }}`;

  request({
    url: `http://${GQL_API_HOST}:8080/api`,
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    json: { query: GQL_TEMPLATE.replace(/$__date__/, req.query.date) }
  }, (error, response, body) => {
    console.log(`[raw]: ${JSON.stringify(body)}`);
    if (json.errors) { res.send(JSON.stringify(json)); }
    else { res.send(json.data.ridersForDate); }
  });
}

function datesForRider(req, res) {


}
