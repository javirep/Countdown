import React from 'react'

 class TimeManager {
    
    remainingSeconds(time) {
        return Math.floor(time % 60)
    }

    remainingMinutes(time){
        return Math.floor((time / 60) % 60)
    }

    remainingHours(time){
        return Math.floor((time / (60*60)) % 24 )
    }

    remainingDays(time){
        return Math.floor(time / (60*60*24))

    }
}

const timeManager = new TimeManager;

export default timeManager


