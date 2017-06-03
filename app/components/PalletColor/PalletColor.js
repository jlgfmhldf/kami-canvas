import React, { PureComponent } from 'react'
import {
  number,
  string,
  func,
  oneOfType,
} from 'react-proptypes'
import emptyFunction from 'fbjs/lib/emptyFunction'

import styled from 'styled-components';

export default class PalletColor extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: oneOfType([
      string,
      number,
    ]),
    color: string,
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
    } = this.props

    const ItemElem = styled.div`
      background: ${color};
      width: 50px;
      height: 75px;
      cursor: pointer;
    `

    return (
      <ItemElem
        onClick={this.handleSelect}
      />
    );
  }
}
