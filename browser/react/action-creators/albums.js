// import {RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants';
// import axios from 'axios';

// const receiveAlbums = (albums) => ({ type: RECEIVE_ALBUMS, albums: albums });
// const receiveAlbum = () => ({ type: RECEIVE_ALBUM });
// export const fetchAlbumsFromServer =() => {
//   return dispatch => {
//     axios.get('/api/albums')
//       .then(res => res.data)
//       // use the dispatch method the thunkMiddleware gave us
//       .then(albums => dispatch(receiveAlbums(albums)));
//   }
// }
