import Moment from 'moment'

class DateUtil {
    static formatDate = "DD/MM/YYYY"
    static formatMonth = "MMMM"
    static formatYear = "YYYY"
    static formatDay = "DD"

    getFullDate(date){
        return Moment(date).format(DateUtil.formatDate).toString()
    }

    getFullMonth(date){
        return Moment(date).format(DateUtil.formatMonth).toString()
    }

    getFullYear(date){
        return Moment(date).format(DateUtil.formatYear).toString()
    }

    getFullDay(date){
        return Moment(date).format(DateUtil.formatDay).toString()
    }

    getNameDayOfWeek(){
        return ["Mo","Tu","We","Th","Fr","Sa","Su"]
    }

    getSnapshotOfMonth(date){

        date = new Date(date)

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