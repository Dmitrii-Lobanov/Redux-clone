import React, { useState, useEffect } from 'react';
import { ICreateStore, IReduxInitialState } from '../types';

export interface MapStateToPropsFunc {
  (state?: any, props?: any): object
}

export interface MapDispatchToPropsFunc {
  (dispatch?: Function, props?: any): object
}

interface IProps {
  store: ICreateStore;
}

export const connect = (
  mapStateToProps: MapStateToPropsFunc = () => ({}),
  mapDispatchToProps: MapDispatchToPropsFunc = () => ({})
) => (Component: any) => {
  return (props: IProps) => {
    const [state, setState] = useState<any>(props.store.getState());

    console.log('dd', mapStateToProps, mapDispatchToProps);

    const onStoreOrPropsChange = (props: IProps) => {
      const stateProps = mapStateToProps(state, props);
      const dispatchProps = mapDispatchToProps(props.store.dispatch, props);

      console.log('props', stateProps, dispatchProps);

      setState({
        ...stateProps,
        ...dispatchProps
      });
    }

    useEffect(() => {
      onStoreOrPropsChange(props);
      props.store.subscribe(() => onStoreOrPropsChange(props));
      return () => props.store.subscribe(() => onStoreOrPropsChange(props));
    }, [props]);

    return (
      <Component {...props} {...state} />
    )
  }
}
