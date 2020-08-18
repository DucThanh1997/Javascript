import axios from 'axios'

async function getResult(query) {
    const proxy = 'http://localhost:9090/http://google.com'
    axios(`https://recipesapi.herokuapp.com/api/search?q=${query}`)
    const res = await axios(`${proxy}https://recipesapi.herokuapp.com/api/search?q=${query}&page=1`)
    console.log("res: ", res)
}

getResult("chicken")