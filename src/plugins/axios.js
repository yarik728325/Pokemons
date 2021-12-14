import axios from "axios";

const  client = axios.create({
  baseURL:'https://pokeapi.co/api/v2/pokemon',
  headers:{
    common:{
      'Content-Type': 'application/json',
    }
  }
})



export default client;