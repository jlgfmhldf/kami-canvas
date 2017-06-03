import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, number, color } from '@storybook/addon-knobs'

import PalletColor from '../PalletColor';

const defaultKnobs = () => ({
  id: number('Id', 1),
  color: color('Color', 'red'),
})

storiesOf('PalletColor', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <PalletColor />
  ))
  .add('Data', () => (
    <PalletColor
      {...defaultKnobs()}
      onSelect={action('select color')}
    />
  ))

