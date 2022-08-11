import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import createStore from './store';

let store;

class StoreProvider extends PureComponent {
  getChildContext() {
    return {
      store,
    };
  }

  static childContextTypes = {
    store: PropTypes.shape({}),
  };

  render() {
    const {children} = this.props;

    store = store || createStore();

    return <Provider store={store}>{children}</Provider>;
  }
}

export default StoreProvider;
