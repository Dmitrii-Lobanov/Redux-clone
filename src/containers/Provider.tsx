import React from 'react';
import { ICreateStore } from '../types';

interface IProps {
  store: ICreateStore;
  children: JSX.Element;
}

const Provider: React.FC<IProps> = ({ store, children }): JSX.Element => {
  // const getChildContext = () => ({
  //   store
  // })

  return children;
}

export default Provider;