import React, { useImperativeHandle, memo, useState } from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { scale } from '@common/utilities';

// @flow
type TextInputProps = {
  onChange: Function;
  placeholder: string;
};

const CTextInput = (props: TextInputProps) => {
  const [text, setText] = useState('');
  const { onChange } = props;

  return (
    <TextInput
      onChangeText={value => setText(value)}
      value={text}
      style={{
        width: scale(260),
        borderBottomWidth: scale(1),
        borderBottomColor: '#789',
        ...(Platform.OS === 'web' ? { outlineColor: 'transparent' } : {}),
      }}
      {...props}
    />
  );
};

export default memo(CTextInput);
