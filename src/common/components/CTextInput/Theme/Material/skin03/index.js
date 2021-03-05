import React from 'react';
import { View, StyleSheet, Animated, Text, Platform } from 'react-native';
import CInput from '@Component/Widgets/FormContent/component/CInput';
import { useInputEvent, useLabelEvent } from '@Component/Widgets/FormContent/Util';
import CommonStyle from '@Common/Styles';
import chroma from 'chroma-js';
import Util from '@Common/Util';
import _ from 'lodash';

const { fontSize, viewStyle } = CommonStyle;
const { scale } = Util;

const Skin03 = React.memo(props => {
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

  return (
    <View style={[{ width: '100%', marginVertical: scale(10) }, styleContainer]}>
      <InputSkin03
        active={active}
        error={error}
        focus={focus}
        event={event}
        data={data}
        style={style}
        otherProps={otherProps}
      />
      {!!label && (
        <LabelSkin03
          active={active}
          error={error}
          focus={focus}
          data={data}
          event={event}
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

const InputSkin03 = props => {
  const { focus, active, error, event, data, style, otherProps } = props;
  const { subtype, placeholder, primaryColor, secondaryColor, warningColor, defaultValue } = data;
  let color = _.get(error, 'length', 0) > 0 ? warningColor : secondaryColor;
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
        ...otherProps,
      }}
      style={[
        styles.inputContainer,
        {
          borderBottomColor: color,
        },
        Platform.OS === 'web' ? { outlineWidth: 0 } : {},
        style,
      ]}
    />
  );
};

const LabelSkin03 = props => {
  const { focus, active, error, data, event, styleLabel } = props;
  const { label, primaryColor, secondaryColor, warningColor } = data;

  const { action } = useLabelEvent(focus);

  let color = _.get(error, 'length', 0) > 0 ? warningColor : secondaryColor;

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: scale(0),
        top: action.interpolate({
          inputRange: [0, 1],
          outputRange: [scale(14), scale(-10)],
        }),
      }}>
      <Text
        style={[
          styles.label,
          {
            color,
            backgroundColor: 'transparent',
          },
          styleLabel,
        ]}>
        {label}
      </Text>
    </Animated.View>
  );
};

export default Skin03;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: scale(10),
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    // borderRadius: scale(4),
    borderBottomWidth: scale(1),
    borderBottomColor: '#828282',
    height: scale(48),
    paddingRight: scale(16),
    zIndex: 2,
  },
  label: {
    color: '#000000',
    ...fontSize.txt16,
    zIndex: 1,
  },
});
