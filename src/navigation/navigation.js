import React from 'react';

import {POKEDEX_SCREEN, DETAILS_SCREEN} from './screens';
import {Navigation} from 'react-native-navigation';
import Pokedex from '../screens/pokedex';
import Details from '../screens/details';

import Provider from '../redux/provider';

function WrapperComponent(Component) {
  return function inject(props) {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
}

// register screens
Navigation.registerComponent(
  POKEDEX_SCREEN,
  () => WrapperComponent(Pokedex),
  () => Pokedex,
);
Navigation.registerComponent(
  DETAILS_SCREEN,
  () => WrapperComponent(Details),
  () => Details,
);

function Setup() {
  Navigation.setDefaultOptions({
    bottomTabs: {
      visible: true,
      titleDisplayMode: 'alwaysShow',
      tabsAttachMode: 'onSwitchToTab',
    },
    bottomTab: {
      iconColor: 'rgb(115,116,117)',
      selectedIconColor: 'rgb(10,11,12)',
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: POKEDEX_SCREEN,
                    options: {
                      topBar: {
                        visible: false,
                      },
                      bottomTab: {
                        icon: require('../assets/icons/home25.png'),
                        testID: 'FIRST_TAB_BAR_BUTTON',
                        text: '',
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: DETAILS_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Details',
                          visible: true,
                        },
                      },
                      bottomTab: {
                        icon: require('../assets/icons/details25.png'),
                        testID: 'SECOND_TAB_BAR_BUTTON',
                        text: '',
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}
export {Setup};
