const deleteFetch = async (url) => {
    const backEndUrl = 'http://localhost:3000/api/';
    const deleteOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`${backEndUrl}${url}`, deleteOptions);
    console.log(response);
    const retrievedData = await response.json();
    console.log(retrievedData);
}

const options = (method, body) => ({
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
})

const postFetch = async (url, method, body) => {
    const backEndUrl = 'http://localhost:3000/api/';
    try {
        const response = await fetch(`${backEndUrl}${url}`, options(method, body));
        console.log(response.status)
        if (response.status === 200) {
            const user = await response.json();
            return user.data;
        } else if (response.status === 500) {
            alert('incorrect username or password');
            console.log('incorrect username or password');
        }
    } catch (err) {
        console.log('err: ', err);
        throw new Error(err);
    }
}

const getFetch = async (url) => {
    const backEndUrl = 'http://localhost:3000/api/';
    const response = await fetch(`${backEndUrl}${url}`)
    const user = await response.json()
    return user.data;
}

export { getFetch, postFetch, deleteFetch };