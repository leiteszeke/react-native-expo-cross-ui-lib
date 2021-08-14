import C, {
  boxShadow,
  classNames,
  extend,
  apply,
  theme,
  responsive,
} from 'consistencss';
import Color from './Colors';
import { Easing } from 'react-native';

extend({
  classes: {
    grow: apply({ flexGrow: 1 }),
  },
  colors: Color,
  sizing: {
    middle: 0.5,
    minimum: 1,
    double: 2,
  },
});

const modalAnimation = {
  0: { transform: [{ translateY: 700 }] },
  1: { transform: [{ translateY: 0 }] },
  easing: Easing.bezier(0.17, 0.59, 0.4, 0.77),
};

export {
  C,
  boxShadow,
  classNames,
  extend,
  apply,
  theme,
  responsive,
  modalAnimation,
};

export default {
  C,
  boxShadow,
  classNames,
  extend,
  apply,
  theme,
  responsive,
  modalAnimation,
};
