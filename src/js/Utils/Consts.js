const actionsType = {
    FETCH_DATE_FULFILLED : "FETCH_DATE_FULFILLED",
    SET_DATE : "SET_DATE",
    SET_CALENDAR_TYPE : "SET_CALENDAR_TYPE",
    SET_FILTER_TYPE : "SET_FILTER_TYPE",
    SET_FILTER_COUNTRY : "SET_FILTER_COUNTRY",
    FETCH_HOLIDAYS : "FETCH_HOLIDAYS",
    FETCH_HOLIDAYS_REJECTED : "FETCH_HOLIDAYS_REJECTED",
    FETCH_HOLIDAYS_FULFILLED : "FETCH_HOLIDAYS_FULFILLED",
    FETCH_DATE : "FETCH_DATE",
    FETCH_DATE_REJECTED : "FETCH_DATE_REJECTED"
}

const holidayType = {
    ALL : "all",
    PUBLIC : "public"
}

const calendarType = {
    MONTHLY : "monthly",
    YEARLY : "yearly"
}

const countries = {
    AR : "Argentina",
    AO : "Angola",
    AU : "Australia",
    AW : "Aruba",
    BE : "Belgium",
    BG : "Bulgaria",
    BR : "Brazil",
    CA : "Canada",
    CH : "Switzerland",
    CN : "China",
    CO : "Colombia",
    CZ : "Czech Republic",
    DE : "Germany",
    DK : "Denmark",
    ES : "Spain",
    FR : "France",
    GB : "United Kingdom",
    GT : "Guatemala",
    HR : "Croatia",
    HU : "Hungary",
    ID : "Indonesia",
    IE : "Ireland",
    IN : "India",
    IT : "Italy",
    LS : "Lesotho",
    LU : "Luxembourg",
    MG : "Madagascar",
    MQ : "Martinique",
    MX : "Mexico",
    NL : "Netherlands",
    NO : "Norway",
    PL : "Poland",
    PR : "Puerto Rico",
    RU : "Russia",
    SI : "Slovenia",
    SK : "Slovakia",
    UA : "Ukraine",
    US : "United States",
}
				  
const consts = {
    ACTIONS_TYPE : actionsType,
    HOLIDAY_TYPE : holidayType,
    CALENDAR_TYPE : calendarType,
    COUNTRIES : countries,
}

module.exports = consts