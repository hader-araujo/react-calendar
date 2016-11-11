import dateFormat from 'dateformat'

class DateUtil {
    static formatDate = "dd/mm/yyyy"
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

    getSnapshotOfMonth(date){
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()

        const arrayOfDays = [...Array(lastDayOfMonth).keys()].map( (m) => ++m)

        const firstDayOfWeekOfMonth = new Date(date)
        firstDayOfWeekOfMonth.setDate(1)
        let dayOfWeek = firstDayOfWeekOfMonth.getDay()

        const priorMonth = new Date(date)
        priorMonth.setMonth(priorMonth.getMonth() - 1)

        let lastDayOfPriorMonth = new Date(priorMonth.getFullYear(), priorMonth.getMonth()+1, 0).getDate()

        while (dayOfWeek > 1) {

            arrayOfDays.unshift(lastDayOfPriorMonth)
            lastDayOfPriorMonth --
            dayOfWeek --
        }

        return arrayOfDays
    }

}

const instance = new DateUtil(this)
Object.freeze(instance);

module.exports = {
    getFullDate : instance.getFullDate,
    getNameDayOfWeek : instance.getNameDayOfWeek,
    getSnapshotOfMonth : instance.getSnapshotOfMonth,
    getFullMonth : instance.getFullMonth,
    getFullYear : instance.getFullYear,
    getFullDay : instance.getFullDay,

}