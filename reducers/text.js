export const GET_TEXT = 'GET_TEXT';
export const GET_TEXT_SUCCESS = 'GET_TEXT_SUCCESS';
export const GET_TEXT_FAIL = 'GET_TEXT_FAIL';

export default function reducer (state = {text: ''}, action) {
  switch (action.type) {
    case GET_TEXT:
      console.log('a')
      return {...state, loading: true};
    case GET_TEXT_SUCCESS:
      console.log('b')
      return {...state, loading: false, text: action.payload.data.text};
    case GET_TEXT_FAIL:
      console.log('c')
      return {...state, loading: false, error: action.payload.error};
    default:
      console.log('d')
      return state;
  }
}

export function getText () {
  return {
    type: GET_TEXT,
    payload: {
      request: {
        url: '/5c6d4ca9370000f61afa3388'
      }
    }
  };
}
