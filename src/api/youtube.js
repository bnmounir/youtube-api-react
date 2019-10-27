import axios from 'axios';

const KEY = 'AIzaSyCEiZv3ivPrvrZORctR2jaGKuCBI5olqrA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
