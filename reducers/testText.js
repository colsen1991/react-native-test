export const GET_TEST_TEXT = 'GET_TEST_TEXT';
export const GET_TEST_TEXT_SUCCESS = 'GET_TEST_TEXT_SUCCESS';
export const GET_TEST_TEXT_FAIL = 'GET_TEST_TEXT_FAIL';

export default function reducer (state = {text: ''}, action) {
  switch (action.type) {
    case GET_TEST_TEXT:
      return {...state, loading: true};
    case GET_TEST_TEXT_SUCCESS:
      return {...state, loading: false, text: action.payload.data.text};
    case GET_TEST_TEXT_FAIL:
      return {...state, loading: false, error: action.payload.error};
    default:
      return state;
  }
}

export function getText (textId) {
  return {
    type: GET_TEST_TEXT,
    payload: {
      request: {
        url: `/${textId}`
      }
    }
  };
}
