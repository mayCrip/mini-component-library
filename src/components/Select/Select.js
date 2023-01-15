import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <DisplayThing>
        {displayedValue}
        <IconWrapper>
          <Icon id={"chevron-down"} size={24} />
        </IconWrapper>
      </DisplayThing>
    </Wrapper>
  );
};



const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: 24px;
  width: 24px;
  pointer-events: none;
`;

const DisplayThing = styled.div`
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 56px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #121212;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
