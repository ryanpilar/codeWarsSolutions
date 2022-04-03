function humanReadable (seconds) {
    // https://www.codewars.com/kata/52685f7382004e774f0001f7
    let hours = 0
    let minutes = 0

    let setHours = (60*60)
    let setMinutes = 60

    while ( seconds >= setHours ) {
        seconds -= setHours
        hours += 1
    }
    while ( seconds >= setMinutes ) {
        seconds -= setMinutes
        minutes += 1
    }

    if( hours < 10 ) { hours = `0${hours}`}
    if( minutes < 10 ) { minutes = `0${minutes}`}
    if( seconds < 10 ) { seconds = `0${seconds}`}

    return `${hours}:${minutes}:${seconds}`

}