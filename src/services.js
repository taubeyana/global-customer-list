// Reduce array to object by properties with appropriate condition

export function mapObjectByProp(arr = [],key,value,conditionKey, conditionValue) {
    return arr.reduce((final, customer) => {
        
        if (conditionKey) {
            if (customer[conditionKey] !== conditionValue) {
                return final;
            }
        }
        if (!final.hasOwnProperty(customer[key])) {
            final[customer[key]] = []
        }
        if (!final[customer[key]].includes(customer[value])) {
            final[customer[key]].push(customer[value],customer.Id)
        }
        return final
    },{})
}

// Converting array of objects to one nested object with the needed information

export function convertArrayToObject(arr) {
    const countries = {}
    for (let customer of arr) {
        if (!countries.hasOwnProperty(customer.Country)) {
            countries[customer.Country] = {}
            countries[customer.Country]['cities'] = {}
            countries[customer.Country]['cities'][customer.City] = {}
            countries[customer.Country]['cities'][customer.City]['companies'] = {}
            countries[customer.Country]['cities'][customer.City]['companies'][customer.CompanyName]  = `${customer.Address} ${customer.City} ${customer.Country}`
        } else {
            if (!countries[customer.Country]['cities'].hasOwnProperty(customer.City)) {
                countries[customer.Country]['cities'][customer.City] = {}
                countries[customer.Country]['cities'][customer.City]['companies'] = {}
                countries[customer.Country]['cities'][customer.City]['companies'][customer.CompanyName] = `${customer.Address} ${customer.City} ${customer.Country}`
            } else { 
                    countries[customer.Country]['cities'][customer.City]['companies'][customer.CompanyName] = `${customer.Address} ${customer.City} ${customer.Country}`
                }
        }
    }
    return countries;
}


export function sortByNum(obj,sortKey) {
    const sortableArr = []
    for (let key in obj) {
        let arr = []
        arr.push(key, Object.keys(obj[key][sortKey]).length)
        sortableArr.push(arr)
    }
    return sortableArr.sort((a,b) => b[1] - a[1]).map(i => i[0])
}

