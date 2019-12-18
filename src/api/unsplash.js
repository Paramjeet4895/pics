import axios from 'axios';

///create method is going to create an instance of 
//axios client with a couple of defaulted property
export default axios.create({
    baseURL:'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID ac14aff61180800287f37cf199669c84447ce7448312f0372773867febc4bb77'
    }
});