export const loadCountries = async () => {
    const response = await fetch('https://api.covid19api.com/countries',
    {
        method: 'GET',
        headers: {'content-type': 'application/json'},
    })

    if (response.ok) 
    {
        const json = await response.json()
        console.log("json: "+ JSON.stringify(json))
        return json
    }

    const errMessage = await response.text()
    throw new Error(errMessage)

} 