import React, { memo, useState } from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { scale } from '@common/utilities';

// @flow
interface TextInputProps {
  onChangeText?: Function;
  placeholder?: string;
  style?: any;
  type?: 'text' | 'password';
}

const CTextInput = (props: TextInputProps) => {
  const [text, setText] = useState('');
  const { onChangeText, style, type } = props;

  const _onChangeText = (value: string) => {
    onChangeText && onChangeText(value);
    setText(value);
  };

  return (
    <TextInput
      {...props}
      onChangeText={value => _onChangeText(value)}
      value={text}
      style={[
        Platform.OS === 'web'
          ? {
              outlineStyle: 'none',
            }
          : {},
        style,
      ]}
      secureTextEntry={type === 'password'}
    />
  );
};

export default memo(CTextInput);
