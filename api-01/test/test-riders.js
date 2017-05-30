var assert  = require('assert');

describe('api', function() {

  // api.getRiders(date)
  describe('#getRiders(date)', function() {
    it('should get riders for a specific date', function() {
      var date = (new Date).toJSON().substr(0,10); // today
      api.getRiders(date, function(riders) {
        for (let rider of riders) {
          assert(rider.date && rider.date === date)
        }
      });
    });
  });

  // api.putRider(name, direction, date)
  describe('#putRider(name, direction, date)', function() {
    it('should put a rider', function() {
      var name = 'test rider',
          direction = 'in',
          date = (new Date).toJSON().substr(0,10);
      api.putRider(name, direction, date, function(res) {
        assert(res.status == 200);
      });
      api.getRiders(date).then((riders) => {
        var found = false;
        for (let rider in riders) {
          if (rider.name == name &&
              rider.direction == direction &&
              rider.date == date)
            found = true;
        }
        assert(found);
      });
    });
  });
  
});

