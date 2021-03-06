import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconField, Input, Select, Icon } from '../src';

storiesOf('IconField', module)
  .add('Icon and Input', () => (
    <IconField>
      <Icon name="calendar" color="blue" />
      <Input placeholder="Choose Date" />
    </IconField>
  ))
  .add('Input and Icon', () => (
    <IconField>
      <Input placeholder="Choose Date" />
      <Icon name="calendar" color="blue" />
    </IconField>
  ))
  .add('Icon, Input, and Icon', () => (
    <IconField>
      <Icon name="calendar" color="blue" />
      <Input placeholder="Choose Date" />
      <Icon name="check" color="green" />
    </IconField>
  ))
  .add('Icon and Select', () => (
    <IconField>
      <Icon name="calendar" color="blue" />
      <Select>
        <option>Choose Date</option>
        <option>January 2019</option>
      </Select>
    </IconField>
  ));
