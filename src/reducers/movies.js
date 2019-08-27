const initialState = {
  data: null,
  loading: false,
  error: null,
  total: 0,
  offset: 0,
  limit: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_MOVIES_REQUEST': {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case 'FETCH_MOVIES_SUCCESS': {
      const {
        total, offset, limit, data,
      } = payload;
      return {
        ...state,
        total,
        offset,
        limit,
        data,
        loading: false,
      };
    }
    case 'FETCH_MOVIES_FAILURE': {
      return {
        ...state,
        data: null,
        count: 0,
        loading: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
