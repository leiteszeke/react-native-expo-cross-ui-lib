import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
// @ts-ignore
import { C, classNames } from '@mas1-tech/ui';

export const Container = ({
  children,
  noPadding,
}: PropsWithChildren<{ noPadding?: boolean }>) => (
  <View
    style={classNames('flex itemsCenter justifyCenter px3', {
      px0: noPadding,
    })}
  >
    {children}
  </View>
);

export const Separator = () => <View style={C.h2} />;
