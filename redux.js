export const GET_TEXT = 'GET_TEXTD';
export const GET_TEXT_SUCCESS = 'GET_TEXT_SUCCESS';
export const GET_TEXT_FAIL = 'GET_TEXT_FAIL';

export default function reducer(state = { repos: [] }, action) {
  switch (action.type) {
    case GET_TEXT:
      return { ...state, loading: true };
    case GET_TEXT_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_TEXT_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export function getText(user) {
  return {
    type: GET_TEXT,
    payload: {
      request: {
        url: '/5c6d4ca9370000f61afa3388'
      }
    }
  };
}
