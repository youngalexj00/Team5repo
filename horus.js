
class horus {
  constructor() {
    this.startTime = 0;
    this.endTime = 0;
    this.traceTime = 0;
  }
  start() {
    this.startTime = Number(process.hrtime.bigint());    
  }
  end() {
    this.endTime = Number(process.hrtime.bigint());
    this.traceTime = this.endTime - this.startTime;
    console.log('startTime was ', this.startTime,  ' endTime ', endTime);
    console.log('Difference was: ', this.traceTime);
  }
}

module.exports = horus;