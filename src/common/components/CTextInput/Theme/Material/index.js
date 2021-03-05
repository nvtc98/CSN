import React from 'react';
import _ from 'lodash';

import skin01 from './skin01';
import skin02 from './skin02';
import skin03 from './skin03';

const skinTemplate = {
  skin01,
  skin02,
  skin03,
};

const MaterialTheme = React.memo(props => {
  const { skin } = props.data;
  let Template = skinTemplate[skin] || skinTemplate['skin01'];
  return <Template {...props} />;
});

export default MaterialTheme;
