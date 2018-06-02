import { 
  EMPLOYEE_UPDATE, 
  EMPLOYEE_CREATE, 
  EMPLOYEE_SAVE_SUCCESS, 
  EMPLOYEE_FIRE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { 
  name: '', 
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'Jane' }
      // key interpolation -> [action.payload.prop] -- NOT an array.
      return { ...state, [action.payload.prop]: action.payload.value }
    case EMPLOYEE_CREATE:
      // reset the form to how it first existed
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      // reset the form to how it first existed
      return INITIAL_STATE;
    case EMPLOYEE_FIRE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};