import { C, apply, classNames } from '../../styles';
import React, { useMemo } from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Color, { ButtonColor } from '../../Colors';
import { ButtonProps, ButtonVariant } from './Button.types';

const Button = ({
  color = ButtonColor.success,
  containerStyle,
  disabled,
  onPress,
  style,
  text,
  uppercase = true,
  variant = ButtonVariant.Basic,
  ...props
}: ButtonProps) => {
  const handlePress = (event: GestureResponderEvent) => {
    if (!disabled) {
      onPress?.(event);
    }
  };

  const { backgroundColor, borderColor, textColor } = useMemo(() => {
    if (disabled) {
      switch (variant) {
        default:
        case ButtonVariant.Basic:
          return {
            backgroundColor: Color.gray,
            borderColor: Color.gray,
            textColor: Color.white,
          };

        case ButtonVariant.Flat:
          return {
            backgroundColor: Color.transparent,
            borderColor: Color.transparent,
            textColor: Color.gray,
          };

        case ButtonVariant.Outline:
          return {
            backgroundColor: Color.transparent,
            borderColor: Color.gray,
            textColor: Color.gray,
          };
      }
    }

    switch (variant) {
      default:
      case ButtonVariant.Basic:
        return {
          backgroundColor: color,
          borderColor: color,
          textColor: Color.white,
        };

      case ButtonVariant.Flat:
        return {
          backgroundColor: Color.transparent,
          borderColor: Color.transparent,
          textColor: color,
        };

      case ButtonVariant.Outline:
        return {
          backgroundColor: Color.transparent,
          borderColor: color,
          textColor: color,
        };
    }
  }, [color, disabled, variant]);

  return (
    <View style={apply(containerStyle, C.wFull)}>
      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.8}
        style={apply(
          style,
          C.h10,
          C.radius2,
          C.borderMinimum,
          C.justifyCenter,
          C.px3,
          {
            backgroundColor,
            borderColor,
          }
        )}
        onPress={handlePress}
        {...props}
      >
        <Text
          style={apply(
            classNames('alignCenter font4 weightBold', {
              uppercase: !!uppercase,
            }),
            {
              color: textColor,
            }
          )}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
