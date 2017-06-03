import React, { PureComponent } from 'react'
import {
  number,
  string,
  bool,
  func,
  oneOfType,
} from 'react-proptypes'
import emptyFunction from 'fbjs/lib/emptyFunction'

import styled, { css } from 'styled-components'

const ItemElem = styled.div`
  background: ${props => props.color};
  width: 50px;
  height: 75px;
  cursor: pointer;
  
  ${props => props.active && css`
  outline: 2px solid blue;
  `}
`

export default class PalletColor extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: oneOfType([
      string,
      number,
    ]),
    color: string,
    active: bool,
    onSelect: func,
  }

  static defaultProps = {
    color: '#607D8B',
    onSelect: emptyFunction,
  }

  handleSelect = () =>
    this.props.onSelect(this.props.id)

  render() {
    const {
      color,
      active,
    } = this.props

    return (
      <ItemElem
        onClick={this.handleSelect}
        color={color}
        active={active}
      />
    );
  }
}
