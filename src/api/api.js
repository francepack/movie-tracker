
export const handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
}

export const deleteOptions = () => ({
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
})

export const deleteFetch = async (url) => {
    const backEndUrl = 'http://localhost:3000/api/';
    const response = await fetch(`${backEndUrl}${url}`, deleteOptions())
    console.log(response);
    const retrievedData = await response.json()
    console.log(retrievedData);
}

export const options = (method, body) => ({
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
})

export const postFetch = async (url, method, body) => {
    const backEndUrl = 'http://localhost:3000/api/';
    try {
        const response = await fetch(`${backEndUrl}${url}`, this.options(method, body))
        const user = await response.json()
        return user.data;
    } catch (err) {
        console.log('err: ', err);
        throw new Error(err);
    }
}

export const getFetch = async (url) => {
    const backEndUrl = 'http://localhost:3000/api/';
    const response = await fetch(`${backEndUrl}${url}`)
    const user = await response.json()
    return user.data;
}
