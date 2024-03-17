'use server'

export async function fetchData(
    path: string,
    query: string = 'language=es-ES'
) {
    try {
        const requestOptions: RequestInit = {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.apiKey}`,
            },
        }
        const response = await fetch(
            `${process.env.baseURL}${path}?${query}&api_key=${process.env.apiKey}`,
            requestOptions
        )
        
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}
