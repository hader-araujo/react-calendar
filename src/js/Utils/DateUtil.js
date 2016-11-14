import dateFormat from 'dateformat'
import moment from "moment";

class DateUtil {
    static formatDate = "dd mmmm yyyy"
    static formatMonth = "mmmm"
    static formatYear = "yyyy"
    static formatDay = "dd"

    getFullDate(date){
        return dateFormat(date, DateUtil.formatDate)
    }

    getFullMonth(date){
        return dateFormat(date, DateUtil.formatMonth)
    }

    getFullYear(date){
        return dateFormat(date, DateUtil.formatYear)
    }

    getFullDay(date){
        return dateFormat(date, DateUtil.formatDay)
    }
    
    getNameDayOfWeek(){
        return ["Mo","Tu","We","Th","Fr","Sa","Su"]
    }

    getSnapshotOfActualMonth(date){
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
        const arrayOfDays = [...Array(lastDayOfMonth).keys()].map( (m) => ++m)
        
        return arrayOfDays
    }
    
    getSnapshotOfPrevMonth(date) {
        const firstDayOfWeekOfMonth = new Date(date)
        firstDayOfWeekOfMonth.setDate(1)
        let dayOfWeek = firstDayOfWeekOfMonth.getDay()

        const prevMonth = new Date(date)
        prevMonth.setMonth(prevMonth.getMonth() - 1)

        let lastDayOfPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth()+1, 0).getDate()

        const arrayOfDays = []
        
        if (dayOfWeek == 0) {
            while (dayOfWeek < 6) {
    
                arrayOfDays.unshift(lastDayOfPrevMonth)
                lastDayOfPrevMonth --
                dayOfWeek ++
            }
        } else {
            while (dayOfWeek > 1) {
    
                arrayOfDays.unshift(lastDayOfPrevMonth)
                lastDayOfPrevMonth --
                dayOfWeek --
            }
        }
        
        return arrayOfDays
    }
    
    getSnapshotOfNextMonth(date) {
        let firstDayOfWeekOfMonth = new Date(date)
        firstDayOfWeekOfMonth = moment(date).add(1, 'months').toDate()
        firstDayOfWeekOfMonth.setDate(0)
        
        let dayOfWeek = firstDayOfWeekOfMonth.getDay()
        
        let days = 1

        const arrayOfDays = []
        
        while (dayOfWeek < 7) {

            arrayOfDays.unshift(days)
            days ++
            dayOfWeek ++
        }
        
        return arrayOfDays
    }

}

const instance = new DateUtil()
Object.freeze(instance);

module.exports = {
    getFullDate : instance.getFullDate,
    getNameDayOfWeek : instance.getNameDayOfWeek,
    getSnapshotOfActualMonth : instance.getSnapshotOfActualMonth,
    getSnapshotOfPrevMonth : instance.getSnapshotOfPrevMonth,
    getSnapshotOfNextMonth : instance.getSnapshotOfNextMonth,
    getFullMonth : instance.getFullMonth,
    getFullYear : instance.getFullYear,
    getFullDay : instance.getFullDay,
}