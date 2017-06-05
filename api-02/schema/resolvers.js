module.exports = exports = {
  Query: {
    ridersForDate(obj, args, context, info) {
      return riders; // temporary mock
      // args.date received from query
      // TODO(joshgav): retrieve from MongoDB collection
    },
    datesForRider(obj, args, context, info) {
      return riders; // temporary mock
      // args.name received from query
      // TODO(joshgav): retrieve from MongoDB collection
    }
  }
}

// mock data for early testing
const riders = [
  {
    name: 'Josh Gavant',
    direction: 'TO_WORK',
    date: {
      year: 2017,
      month: 06,
      day: 05
    }
  },
  {
    name: 'Josh Gavant',
    direction: 'TO_HOME',
    date: {
      year: 2017,
      month: 06,
      day: 05
    }
  },
  {
    name: 'Josh Gavant',
    direction: 'TO_WORK',
    date: {
      year: 2017,
      month: 06,
      day: 06
    }
  },
  {
    name: 'Josh Gavant',
    direction: 'TO_HOME',
    date: {
      year: 2017,
      month: 06,
      day: 06
    }
  }
];

