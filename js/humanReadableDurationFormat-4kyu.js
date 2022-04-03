function formatDuration (seconds) {
    // https://www.codewars.com/kata/52742f58faf5485cae000b9a
    class Time {
        constructor(num) {
            this.miniTimes = []
            this.num = num
            this.second = undefined;
            this.minute = undefined;
            this.hour = undefined;
            this.day = undefined;
            this.year = undefined;
            this.completed = undefined
        }
  
        createSpecial(aList) {
            /** for each value, example -> [(60 * 60 * 24 * 365), 'year'], 
                create a MiniTime object
             */
  
            for( let element of aList ) {
                // [0] = mathNeeded 
                // [1] = name, like year
  
                let calc = element[0]
                let name = element[1]
  
                const tempHold = this.num / calc
  
                if( this.num / calc >= 1 ) {
                    let decimal = tempHold % 1
                    let int = tempHold - tempHold % 1 
  
                    this[`${name}`] = new MiniTime(name, int)
                    this.miniTimes.push(this[`${name}`])
  
                    this.num -= int * calc 
  
                } else {
                    this[`${name}`] = false
                }       
            }
        }
  
        // NOW, is this a weird falsey?
        isNow(num) {
            return num === 0 ? 'now' : false
        }
  
        updateName() {
            this.miniTimes.forEach( object => { object.constructName() })           
        }
  
        constructString() {
            if( this.miniTimes.length === 0 ) { this.completed = 'now' }
  
            // handles all cases that will have word multiples
            // example -> '1 minute and 3 seconds'
            else if ( this.miniTimes.length > 1 ) {
  
                // first string section
                let getLast = this.miniTimes.pop().converted
  
                // second string section
                let holdThis = this.miniTimes.map(element=> {
                    return element.converted
                })
  
                holdThis = holdThis.join(', ')
                this.completed = [holdThis, getLast].join(' and ')
            }
  
            // handles a single word, example -> '1 minute'
            else { this.completed = this.miniTimes[0].converted }
        }
    }
  
    class MiniTime {
        constructor(name, num) {
            this.name = name
            this.num = num
            this.converted
        }
  
        updateName() {
            if( this.num > 1 ) { this.name = `${this.name}s` }
        }
  
        constructName() {
            this.updateName()
            this.converted = `${this.num} ${this.name}`
        }
    }
  
    class Wrapper {
        constructor(num) {
            this.num = num
            this.aList = [
                [(60 * 60 * 24 * 365), 'year'], 
                [(60 * 60 * 24), 'day'], 
                [(60 * 60), 'hour'], 
                [(60), 'minute'], 
                [(1),'second']
            ]
        }
  
        run() {
            const newTime = new Time(this.num)
  
            newTime.createSpecial(this.aList)
            newTime.updateName()
            newTime.constructString()
  
            return newTime.completed
        }
    }
  
    const wrapper = new Wrapper(seconds)
    return wrapper.run()
  }