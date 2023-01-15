import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 120,
  size,
  placeholder,
}) => {
  return (
    <Wrapper>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={24} />
      </IconWrapper>
      <NativeInput style={{ '--width': width + 'px' }} placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 28px;
  margin: auto;
  pointer-events: none;
`;

const NativeInput = styled.input`
  font-size: 18px;
  padding-left: 36px;
  padding-bottom: 6px;
  padding-top: 6px;
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  width: var(--width);
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
