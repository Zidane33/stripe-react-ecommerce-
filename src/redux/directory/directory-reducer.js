import { fetchSectionsSuccess, fetchSectionsError } from './directory-actions';

const url = 'http://zidanestore-env.eba-vycsi7vs.us-east-1.elasticbeanstalk.com/collections';

export const fetchSections = () => (dispatch) => fetch(url).then((res) => res.json())
  .then((section) => {
    if (section.error) {
      throw (section.error);
    }
    return dispatch(fetchSectionsSuccess(section));
  })
  .catch((error) => dispatch(fetchSectionsError(error)));
const INITIAL_STATE = {
  pending: true,
  error: null,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SECTIONS_SUCCESS':
      return {
        ...state,
        section: [...action.payload],
      };
    case 'FETCH_SECTIONS_ERROR':
      return {
        ...state,
        section: [...action.payload],
      };
    default:
      return state;
  }
};

export default directoryReducer;
