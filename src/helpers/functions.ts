const moment = require('moment')

export default {
  round15(data: string) {

    if(data){
        
      let date = moment(data, 'HH:mm')

      let intervals = Math.round(date.minutes() / 15)

      if(intervals == 4) {
        date.add('hours', 1);
        intervals = 0
      }
      
      date.minutes(intervals * 15)
      date.seconds(0)
      
      
      return ((date.hours() < 10 ? '0' : '') + date.hours() + ':' + (date.minutes() < 10 ? '0' : '') + date.minutes())
    }

    return ''
    
  }
}