/**
*
* Pallet
*
*/

import React from 'react';
import {
  array,
} from 'react-proptypes';
import styled from 'styled-components';

import PalletItem from './item';

const Wrapper = styled.div`
  display: flex;
`;

class Pallet extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderItem = ({
    id,
    color,
  }) => (
    <div key={id}>
      <PalletItem
        id={id}
        color={color}
      />
    </div>
  );

  render() {
    const { colors } = this.props;

    return (
      <Wrapper>
        {colors.map(this.renderItem)}
      </Wrapper>
    );
  }
}

Pallet.propTypes = {
  colors: array,
};

export default Pallet;
