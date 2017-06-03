/**
 *
 * Pallet
 *
 */

import React from 'react';
import {
  string,
  number,
  oneOfType,
} from 'react-proptypes';
import styled from 'styled-components';


class Item extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { color } = this.props;

    const ItemElem = styled.div`
      background: ${color};
      width: 50px;
      height: 75px;
    
      &:hover {
        color: #6cc0e5;
      }`;

    return (
      <ItemElem />
    );
  }
}


Item.propTypes = {
  id: oneOfType([
    string,
    number,
  ]),
  color: string,
};

export default Item;

