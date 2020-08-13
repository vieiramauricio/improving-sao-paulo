import React, { createContext, useReducer, useEffect } from 'react';
import authReducer from './reducer';
import { IAuth } from '../../contracts/Auth/Action/login.interface';

const initialState: IAuth = {
  token: '',
  signed: false,
};

const AuthStore = createContext<IAuth | any>(initialState);

const GlobalAuth: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, () => {
    const localData = localStorage.getItem('state');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <AuthStore.Provider value={{ state, dispatch }}>
      {children}
    </AuthStore.Provider>
  );
};

export { AuthStore };
export default GlobalAuth;
