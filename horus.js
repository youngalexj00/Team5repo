
class horus {
  constructor(name) {
    this.serviceName = name;
    this.startTime = 0;
    this.endTime = 0;
    this.traceTime = 0;
    this.route = {}; // every element in route represents a request. each request can have requests nested in it
  }

  //{serviceName : {}, responsesTime: null}
  //{serviceName: {books: {}, responseTime: null}, responsesTime: 5ms}
  start(targetService) {
    this.startTime = Number(process.hrtime.bigint());
    this.route[targetService] = {};
    this.route.responseTime = null;
    console.log('logging object in route ', this.route)
    // { { targetService : {}, responseTime: null }  }
  }

  end() {
    this.endTime = Number(process.hrtime.bigint());
    this.traceTime = this.endTime - this.startTime;
    this.route.responseTime = this.traceTime;
    console.log('startTime was ', this.startTime,  ' endTime ', this.endTime);
    console.log('Difference was: ', this.traceTime);

    console.log('logging changed route ', this.route)

  }
}

module.exports = horus;