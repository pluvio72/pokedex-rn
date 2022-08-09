/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Setup from './src/navigation';

Navigation.events().registerAppLaunchedListener(() => Setup());
