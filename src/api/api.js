export const handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
}

export const settings = (method, body) => ({
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
})

export const postFetch = async (url, method, body) => {
    const backEndUrl = 'http://localhost:3000/api/';
    try {
        const response = await fetch(`${backEndUrl}${url}`, this.settings(method, body))
        console.log('response: ', response)
        const user = await response.json()
        console.log('user data', user.data)
        return user.data;
    } catch (err) {
        console.log('err: ', err)
        throw new Error(err);
    }
}
