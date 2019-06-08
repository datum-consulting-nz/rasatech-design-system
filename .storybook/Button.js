import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  Button,
  AccentButton,
  InfoButton,
  OutlineButton,
  StyledButton,
  AccentStyledButton,
  InfoStyledButton,
  DropdownButton
} from '../src';

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text:
        'Use the <Button />,  <AccentButton />, <InfoButton />,  <OutlineButton/ > components to render a primitive button.'
    })(() => <Button size="large">Button</Button>)
  )
  .add('dropdown', () => (
    <div>
      <DropdownButton>Action</DropdownButton>
    </div>
  ))
  .add('Change text size', () => (
    <div>
      <Button size="large" fontSize={[5]}>Action</Button>
    </div>
  ))
  .add('color', () => (
    <div>
      <Button m={2}>Primary</Button>
      <AccentButton m={2}>Accent</AccentButton>
      <InfoButton m={2}>Info</InfoButton>
      <OutlineButton m={2}>InfoButton</OutlineButton>
      <StyledButton m={2}>StyledButton</StyledButton>
      <AccentStyledButton m={2}>StyledButton</AccentStyledButton>
      <InfoStyledButton m={2}>StyledButton</InfoStyledButton>
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
      <StyledButton size="large" m={2} shiftLeft={'60px'}>
        Large
      </StyledButton>
      <AccentStyledButton size="medium" m={2} shiftLeft={'65px'}>
        Medium
      </AccentStyledButton>
      <InfoStyledButton size="small" m={2} shiftLeft={'40px'}>
        Small
      </InfoStyledButton>
    </div>
  ))
  .add('width', () => <Button width={1}>Full Width</Button>)
  .add('disabled', () => <Button disabled>Disabled</Button>);
