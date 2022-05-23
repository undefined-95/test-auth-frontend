const initialState = {
  loading: false,
  error: null,
  user: [],
  profile: [],
  token: localStorage.getItem('token'),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/signup/pending':
      return {
        ...state,
        loading: true,
      };
    case 'user/signup/rejected':
      return {
        ...state,
        error: action.payload.error,
      };
    case 'user/signup/fulfilled':
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case 'user/signIn/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'user/signIn/rejected':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'user/signIn/fulfilled':
      return {
        ...state,
        loading: false,
        token: action.payload.token,
      };
    case 'user/load/pending':
      return {
        ...state,
        loading: true,
      };
    case 'user/load/rejected':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'user/load/fulfilled':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case 'profile/load/pending':
      return {
        ...state,
        loading: true,
      };
    case 'profile/load/rejected':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'profile/load/fulfilled':
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case 'user/logOut/fulfilled':
      return {
        ...state,
        token: null,
      };
    case 'user/restore/pending':
      return {
        ...state,
        loading: true,
      };
    case 'user/restore/rejected':
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case 'user/restore/fulfilled':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const register = ({ email, password, name, birthDate, sex, pic }) => {
  return async (dispatch) => {
    dispatch({ type: 'user/signup/pending' });
    const response = await fetch('http://localhost:3013/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
        birthDate,
        sex,
        pic,
      }),
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: 'user/signup/rejected', payload: json });
    } else {
      dispatch({ type: 'user/signup/fulfilled', payload: json });
    }
  };
};

export const auth = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: 'user/signIn/pending' });
    const response = await fetch('http://localhost:3013/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: 'user/signIn/rejected', error: json.error });
    } else {
      dispatch({ type: 'user/signIn/fulfilled', payload: json });
    }
    localStorage.setItem('token', json.token);
  };
};

export const getUser = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'user/load/pending' });
    const state = getState();
    const response = await fetch('http://localhost:3013/people', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: 'user/load/rejected', error: json.error });
    } else {
      dispatch({ type: 'user/load/fulfilled', payload: json });
    }
  };
};

export const getProfile = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'profile/load/pending' });
    const state = getState();
    const response = await fetch('http://localhost:3013/account', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: 'profile/load/rejected', error: json.error });
    } else {
      dispatch({ type: 'profile/load/fulfilled', payload: json });
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: 'user/logOut/fulfilled' });
    await fetch('http://localhost:3013/login');
    localStorage.clear();
  };
};
export const restoreUser = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'user/restore/pending' });
    const response = await fetch('http://localhost:3013/account', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${state.users.token}`,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: 'user/restore/rejected', payload: json });
      throw new Error(json.error);
    } else {
      dispatch({ type: 'user/restore/fulfilled', payload: json });
    }
  };
};
