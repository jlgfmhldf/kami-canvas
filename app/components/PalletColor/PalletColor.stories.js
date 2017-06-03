import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, number, color, boolean } from '@storybook/addon-knobs'

import PalletColor from '../PalletColor';

const defaultKnobs = () => ({
  id: number('Id', 1),
  color: color('Color', '#00bcd4'),
  active: boolean('Active', false),
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

