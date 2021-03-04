import React from 'react';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons,
} from '@expo/vector-icons';

const IconTemplate = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons,
};

const CIcon = React.memo(
  React.forwardRef((props, ref) => {
    const { type } = props;
    const Icon = IconTemplate[type] || IconTemplate['MaterialCommunityIcons'];

    return <Icon {...props} ref={ref} />;
  })
);

export default CIcon;
