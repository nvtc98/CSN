import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '@common/constants';
import CIcon from '@common/components/CIcon';

interface CButtonProps {
  onPress?: ((event: any) => void) | undefined;
  text?: string;
  style?: object;
  textStyle?: object;
  iconName?: string;
  iconType?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialIcons'
    | 'MaterialCommunityIcons'
    | 'Octicons'
    | 'Zocial'
    | 'SimpleLineIcons';
  children?: any;
}

// @flow
const CButton = ({
  onPress,
  text,
  style,
  textStyle,
  iconName,
  iconType,
  children,
}: CButtonProps) => {
  let childToRender = children;
  if (!childToRender) {
    if (text) {
      childToRender = <Text style={textStyle}>{text}</Text>;
    }
    if (iconName) {
      childToRender = <CIcon name={iconName} type={iconType} style={textStyle} />;
    }
  }

  return (
    <TouchableOpacity onPress={onPress} style={[commonStyles.center, style]} activeOpacity={0.7}>
      {childToRender}
    </TouchableOpacity>
  );
};

export default CButton;
