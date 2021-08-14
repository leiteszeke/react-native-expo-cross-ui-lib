import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Container, Separator } from './utils';
// @ts-ignore
import { Button, ButtonColor, ButtonVariant } from '@mas1-tech/ui';

const buttonStories = storiesOf('Button', module);

buttonStories.add('Basic', () => (
  <Container>
    <Button text="Confirmar" />
    <Separator />
    <Button text="Confirmar" color={ButtonColor.info} />
    <Separator />
    <Button text="Confirmar" color={ButtonColor.warning} />
    <Separator />
    <Button text="Confirmar" color={ButtonColor.error} />
    <Separator />
    <Button text="Confirmar" disabled />
  </Container>
));

buttonStories.add('Flat', () => (
  <Container>
    <Button text="Confirmar" variant={ButtonVariant.Flat} />
    <Separator />
    <Button
      text="Confirmar"
      variant={ButtonVariant.Flat}
      color={ButtonColor.info}
    />
    <Separator />
    <Button
      text="Confirmar"
      variant={ButtonVariant.Flat}
      color={ButtonColor.warning}
    />
    <Separator />
    <Button
      text="Confirmar"
      variant={ButtonVariant.Flat}
      color={ButtonColor.error}
    />
    <Separator />
    <Button text="Confirmar" variant={ButtonVariant.Flat} disabled />
  </Container>
));

buttonStories.add('Outline', () => (
  <Container>
    <Button text="Confirmar" variant={ButtonVariant.Outline} />
    <Separator />
    <Button
      text="Confirmar"
      variant={ButtonVariant.Outline}
      color={ButtonColor.info}
    />
    <Separator />
    <Button
      text="Confirmar"
      variant={ButtonVariant.Outline}
      color={ButtonColor.warning}
    />
    <Separator />
    <Button
      text="Confirmar"
      variant={ButtonVariant.Outline}
      color={ButtonColor.error}
    />
    <Separator />
    <Button text="Confirmar" variant={ButtonVariant.Outline} disabled />
  </Container>
));
