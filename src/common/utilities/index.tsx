import { Dimensions } from 'react-native';
import axios from 'axios';
import { configs } from '@common/constants';
import _ from 'lodash';

const baseWidth = 375;
let screenSize = Dimensions.get('window');

const isDesktop = __DEV__ ? true : screenSize.height < screenSize.width && screenSize.height > 812;

const scale = (value: number) => {
  return (value * screenSize.width) / baseWidth;
};

const setScreenSize = (value: object) => {
  screenSize = { ...screenSize, ...value };
};

const post = async (type: string, params?: object | undefined) => {
  try {
    const response = await axios({
      method: 'post',
      url: configs.serverBaseUrl + 'api/' + type,
      data: params,
    });
    let result = null;
    const error = _.get(response, 'data.detail.detail_err', null);
    if (!error) {
      result = response.data;
    }
    return { result, error };
  } catch (error) {
    return { result: null, error };
  }
};

// @flow
if (isDesktop) {
  setScreenSize({ width: 375 });
}

export { scale, setScreenSize, screenSize, isDesktop, post };
