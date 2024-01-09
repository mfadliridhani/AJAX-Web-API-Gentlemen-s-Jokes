const jokes = document.querySelector('#jokes');
const button = document.querySelector('#button');

const addJokes = async () => {
    const textJokes = await getJokes();
    const newLi = document.createElement('LI');
    newLi.append(textJokes);
    jokes.append(newLi);
};

const getJokes = async () => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
    // console.log(res.data.joke);
};

button.addEventListener('click', addJokes);
