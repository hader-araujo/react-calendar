
export function setType(type) {
    return {
        type: "SET_TYPE",
        payload: {
            type : type
        }
    }
}

export function setCountry(country) {
	return {
        type: "SET_COUNTRY",
        payload: {
            country : country
        }
    }
}
