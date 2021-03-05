import React from 'react';
import _ from 'lodash';

import skin01 from './skin01';

const skinTemplate = {
  skin01,
};

const DefaultTheme = React.memo(props => {
  const { skin } = props.data;
  let Template = skinTemplate[skin] || skinTemplate['skin01'];
  return <Template {...props} />;
});

export default DefaultTheme;
