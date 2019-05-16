import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Text, Icon } from '../src';
import catNames from 'cat-names';
import Component from '@reach/component-component';
import { Autocomplete, LabelAuto, InputAuto, MenuAuto, ItemAuto } from '../src';

const cats = catNames.all;
const match = (item, value) => item.includes(value);

storiesOf('Autocomplete', module).add('default', () => (
  <Component
    initialState={{ value: '' }}
    children={({ state, setState }) => (
      <Box>
        <Autocomplete
          onChange={item => {
            setState({ value: item });
          }}
          match={match}
        >
          <LabelAuto mb={1}>Cat</LabelAuto>
          <InputAuto />
          <MenuAuto>
            {cats.map(cat => (
              <ItemAuto key={cat} item={cat}>
                <Icon name="Pin" color="blue" mr={2} />
                <Text fontSize={0}>{cat}</Text>
              </ItemAuto>
            ))}
          </MenuAuto>
        </Autocomplete>
        <Text my={2}>
          This text should be covered up by the Autocomplete. Menu when open.
        </Text>
        <Text my={2}>
          The current value is <code>{state.value}</code>
        </Text>
      </Box>
    )}
  />
));
