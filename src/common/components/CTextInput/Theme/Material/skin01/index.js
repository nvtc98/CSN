import React, { useRef, useCallback } from 'react';
import { View, StyleSheet, Animated, Text, Platform } from 'react-native';
import CInput from '@Component/Widgets/FormContent/component/CInput';
import { useInputEvent, useLabelEvent } from '@Component/Widgets/FormContent/Util';
import CommonStyle from '@Common/Styles';
import chroma from 'chroma-js';
import Util from '@Common/Util';
import _ from 'lodash';

const { fontSize, viewStyle } = CommonStyle;
const { scale } = Util;

const Skin01 = React.memo(props => {
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

  const { focus, active, event } = useInputEvent({
    value: defaultValue,
    onChangeValue,
  });

  const inputRef = useRef(null);

  const onLabelClick = useCallback(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <View style={[{ width: '100%', marginVertical: scale(10) }, styleContainer]}>
      <InputSkin01
        inputRef={inputRef}
        active={active}
        error={error}
        focus={focus}
        event={event}
        data={data}
        style={style}
        otherProps={otherProps}
      />
      {!!label && (
        <LabelSkin01
          active={active}
          error={error}
          focus={focus}
          data={data}
          onLabelClick={onLabelClick}
          styleLabel={styleLabel}
        />
      )}
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

const InputSkin01 = props => {
  const { focus, active, error, event, data, style, otherProps, inputRef } = props;
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
        onFocus: event.onFocus,
        onBlur: event.onBlur,
        keyboardType:
          subtype === 'email' ? 'email-address' : subtype === 'tel' ? 'phone-pad' : 'default',
        multiline: false,
        ref: inputRef,
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

const LabelSkin01 = props => {
  const { focus, active, error, data, onLabelClick, styleLabel } = props;
  const { label, primaryColor, secondaryColor, warningColor } = data;

  const { action } = useLabelEvent(focus);

  let color =
    _.get(error, 'length', 0) > 0
      ? warningColor
      : active
      ? primaryColor
      : chroma(secondaryColor)
          .alpha(0.75)
          .css();

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: scale(0),
        marginLeft: scale(16),
        top: action.interpolate({
          inputRange: [0, 1],
          outputRange: [scale(14), scale(-10)],
        }),
      }}>
      <Text
        onPress={onLabelClick}
        style={[
          styles.label,
          focus ? fontSize.txt12 : fontSize.txt16,
          {
            color,
            backgroundColor: 'transparent',
            paddingHorizontal: focus ? scale(3) : 0,
          },
          styleLabel,
        ]}>
        {label}
      </Text>
      {focus && (
        <View
          style={{
            height: scale(2),
            width: '100%',
            backgroundColor: 'white',
            position: 'absolute',
            top: scale(10),
            left: 0,
          }}
        />
      )}
    </Animated.View>
  );
};

export default Skin01;

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
    // zIndex: 2,
  },
  label: {
    color: '#000000',
    ...fontSize.txt16,
    zIndex: 1,
  },
});
