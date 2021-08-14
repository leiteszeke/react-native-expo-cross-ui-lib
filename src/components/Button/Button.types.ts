import type { TouchableOpacityProps, ViewStyle } from 'react-native';
import type { ButtonColor } from 'src/Colors';

export type ButtonProps = TouchableOpacityProps & {
  color?: ButtonColor;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  text: string;
  uppercase?: boolean;
  variant?: ButtonVariant;
};

export enum ButtonVariant {
  Basic = 'Basic',
  Outline = 'Outline',
  Flat = 'Flat',
}
