import React from 'react';
import { DEFAULT_FONT_SIZE } from '../../../constants';
import { usePaginationContext } from '../context/PaginationProvider';
import { StyledButton } from '../styles';
import { ButtonTypes, VisibilityThresholds } from '../types';
import usePaginationButton from '../use-pagination-button';

const FirstPage = () => {
  const { pageInfo, width } = usePaginationContext();
  const onFirstPage = pageInfo.page === 0;
  const { IconComponent, styledProps } = usePaginationButton({
    type: ButtonTypes.FirstPage,
    disabledCondition: onFirstPage,
    pageNumber: 0,
  });

  if (width <= VisibilityThresholds.FirstPage) {
    return null;
  }

  return (
    <StyledButton {...styledProps}>
      <IconComponent height={DEFAULT_FONT_SIZE} />
    </StyledButton>
  );
};

export default FirstPage;
