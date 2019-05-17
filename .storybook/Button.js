import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  Button,
  GreenButton,
  RedButton,
  OutlineButton,
  StyledButton,
  GreenStyledButton,
  RedStyledButton
} from '../src';

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text:
        'Use the <Button />,  <GreenButton />, <RedButton />,  <OutlineButton/ > components to render a primitive button.'
    })(() => <Button size="large">Button</Button>)
  )
  .add('color', () => (
    <div>
      <Button m={2}>Button</Button>
      <GreenButton m={2}>GreenButton</GreenButton>
      <RedButton m={2}>RedButton</RedButton>
      <OutlineButton m={2}>OutlineButton</OutlineButton>
      <StyledButton m={2}>StyledButton</StyledButton>
      <GreenStyledButton m={2}>StyledButton</GreenStyledButton>
      <RedStyledButton m={2}>StyledButton</RedStyledButton>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <Button size="large" m={2}>
        Large
      </Button>
      <Button size="medium" m={2}>
        Medium
      </Button>
      <Button size="small" m={2}>
        Small
      </Button>
      <br />
      <GreenStyledButton size="large" m={2} shiftLeft={'60px'}>
        Large
      </GreenStyledButton>
      <GreenStyledButton size="medium" m={2} shiftLeft={'65px'}>
        Medium
      </GreenStyledButton>
      <GreenStyledButton size="small" m={2} shiftLeft={'40px'}>
        Small
      </GreenStyledButton>
    </div>
  ))
  .add('width', () => <Button width={1}>Full Width</Button>)
  .add('disabled', () => <Button disabled>Disabled</Button>);
