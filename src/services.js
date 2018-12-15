
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
            final[customer[key]].push(customer[value])
        }
        return final
    },{})
}

export function sortByNum(obj) {
    const sortableArr = []
    for (let key in obj) {
        let arr = []
        arr.push(key,obj[key].length)
        sortableArr.push(arr)
    }
    return sortableArr.sort((a,b) => b[1] - a[1]).map(i => i[0])
}
// export const sortedCountries  = sortByNum(mapObjectByProp(clients.Customers,'Country', 'City'))
// export const sortedCities  = sortByNum(mapObjectByProp(clients.Customers,'City', 'CompanyName', 'Country','USA'))
// export const companiesByCity  = mapObjectByProp(clients.Customers,'City','CompanyName','Country','USA')

// console.log(sortedCountries)
// console.log(sortedCities)
// console.log(companiesByCity['Portland'].sort())