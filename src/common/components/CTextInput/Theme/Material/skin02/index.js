import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import CInput from '@Component/Widgets/FormContent/component/CInput';
import { useInputEvent } from '@Component/Widgets/FormContent/Util';
import CommonStyle from '@Common/Styles';
import chroma from 'chroma-js';
import Util from '@Common/Util';
import _ from 'lodash';

const { fontSize, viewStyle } = CommonStyle;
const { scale } = Util;

const Skin02 = React.memo(props => {
  const { data, style, styleContainer, styleLabel, onChangeValue, error, otherProps } = props;

  const {
    placeholder,
    label,
    subtype,
    primaryColor,
    secondaryColor,
    warningColor,
    showMessageError,
    defaultValue,
  } = data;

  const { active, event } = useInputEvent({
    value: defaultValue,
    onChangeValue,
  });

  return (
    <View style={[{ width: '100%', marginVertical: scale(10) }, styleContainer]}>
      {label ? (
        <Text
          style={[
            styles.label,
            _.get(error, 'length', 0) > 0 ? { color: warningColor } : {},
            styleLabel,
          ]}>
          {label}
        </Text>
      ) : null}
      <InputSkin02
        error={error}
        event={event}
        active={active}
        data={data}
        style={style}
        otherProps={otherProps}
      />
      {showMessageError && _.get(error, 'length', 0) > 0 && (
        <Text
          style={{
            color: warningColor,
            marginTop: scale(5),
            ...fontSize.txt12,
          }}>
          {error.map(x => x.message).join('\n')}
        </Text>
      )}
    </View>
  );
});

const InputSkin02 = props => {
  const { error, event, data, style, otherProps, active } = props;
  const { subtype, placeholder, primaryColor, secondaryColor, warningColor, defaultValue } = data;

  let color =
    _.get(error, 'length', 0) > 0
      ? warningColor
      : active
      ? primaryColor
      : chroma(secondaryColor)
          .alpha(0.5)
          .css();

  return (
    <CInput
      defaultValue={defaultValue}
      onChangeText={event.onChangeValue}
      secureTextEntry={subtype === 'password'}
      otherProps={{
        placeholder,
        onFocus: event.onFocus,
        onBlur: event.onBlur,
        keyboardType:
          subtype === 'email' ? 'email-address' : subtype === 'tel' ? 'phone-pad' : 'default',
        multiline: false,
        ...otherProps,
      }}
      style={[
        styles.inputContainer,
        {
          borderColor: color,
        },
        Platform.OS === 'web' ? { outlineColor: color } : {},
        style,
      ]}
    />
  );
};

export default Skin02;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: scale(10),
  },
  inputContainer: {
    width: '100%',
    borderRadius: scale(4),
    borderWidth: scale(1),
    height: scale(48),
    paddingHorizontal: scale(16),
  },
  label: {
    color: '#000000',
    ...fontSize.txt16,
    marginBottom: scale(3),
    zIndex: 3,
  },
});
