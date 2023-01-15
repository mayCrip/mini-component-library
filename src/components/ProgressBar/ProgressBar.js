/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  'small': {
    '--height': 8 + 'px',
    '--padding': 0
  },
  'medium': {
    '--height': 12 + 'px',
    '--padding': 0
  },
  'large': {
    '--height': 16 + 'px',
    '--padding': 2 + 'px'
  }
};

const ProgressBar = ({ value, size }) => {
  const style = styles[size];

  return (
  <Wrapper style={style}>
    <ProgressLineWrapper>
      <ProgressLine value={value} style={style} />
    </ProgressLineWrapper>
  </Wrapper>);
};

const Wrapper = styled.div`
  width: 370px;
  padding: var(--padding);
  border-radius: 8px;
  border: 1px solid hsl(0deg 0% 75%);
  box-shadow: inset 0px 2px 4px
              rgba(128, 128, 128, 0.35);
`;

const ProgressLine = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value + "%"};
  min-height: var(--height);
`;

const ProgressLineWrapper = styled.div`
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

export default ProgressBar;
