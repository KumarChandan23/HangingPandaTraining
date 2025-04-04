import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  errors: {},
  isSubmitting: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'SUBMIT_START':
      return { ...state, isSubmitting: true, errors: {} };
    case 'SUBMIT_SUCCESS':
      return initialState;
    case 'SUBMIT_FAILURE':
      return { ...state, isSubmitting: false, errors: action.errors };
    default:
      return state;
  }
}

const ComplexForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!state.name) errors.name = 'Name is required';
    if (!state.email.includes('@')) errors.email = 'Invalid email';
    if (state.password.length < 6) errors.password = 'Too short';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_START' });

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SUBMIT_FAILURE', errors });
    } else {
      // simulate success
      setTimeout(() => {
        alert("Form Submitted!");
        dispatch({ type: 'SUBMIT_SUCCESS' });
      }, 1000);
      console.log(state)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <p style={{ color: 'red' }}>{state.errors.name}</p>

      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p style={{ color: 'red' }}>{state.errors.email}</p>

      <input
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <p style={{ color: 'red' }}>{state.errors.password}</p>

      <button type="submit" disabled={state.isSubmitting}>
        {state.isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ComplexForm;
