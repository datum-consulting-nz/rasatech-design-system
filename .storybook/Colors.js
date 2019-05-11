import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  Box,
  Flex,
  Text,
  Heading,
  theme,
  extendedSpectrumColors
} from '../src';

const getKeys = function(colorObject) {
  let keys = Object.keys(colorObject).filter(
    key => !Array.isArray(colorObject[key])
  );
  return keys.map(key => ({ key, value: colorObject[key] }));
};

const Chip = props => <Box w={1} p={3} {...props} />;

const Pre = styled(Text.withComponent('pre'))`
  font-family: ${theme.monoFont};
`;

const Card = ({ name, color }) => (
  <Box>
    <Chip name={name} bg={color} />
    <Text fontSize={3} m={0} bold>
      {name}
    </Text>
    <Pre fontSize={2} m={0} color="muted">
      {color}
    </Pre>
  </Box>
);

const WholePalette = ({ name, list }) => (
  <>
    <Heading.h1 p={3} f={[4, 5]}>
      {name}
    </Heading.h1>
    <Flex flexWrap={'wrap'}>
      {getKeys(list).map(color =>
        !color.key[color.key.length - 1].match(/^\d+$/) ? (
          <Box key={color.key} p={3} width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
            <Card name={color.key} color={color.value} />
          </Box>
        ) : null
      )}
    </Flex>
  </>
);

storiesOf('Color', module).add('All colors', () => (
  <div>
    <WholePalette name={'Brand'} list={theme.brandColors} />
    <WholePalette name={'Gray'} list={theme.grayColors} />
    <WholePalette name={'Full spectrum'} list={theme.spectrumColors} />
    <WholePalette
      name={'Extended spectrum'}
      list={theme.extendedSpectrumColors}
    />
    <WholePalette name={'All'} list={theme.colors} />
  </div>
));
