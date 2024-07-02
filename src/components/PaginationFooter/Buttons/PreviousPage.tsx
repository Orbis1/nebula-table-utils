import React from 'react';
import { DEFAULT_FONT_SIZE } from '../../../constants';
import { usePaginationContext } from '../context/PaginationProvider';
import { StyledButton } from '../styles';
import { ButtonTypes } from '../types';
import usePaginationButton from '../use-pagination-button';

const PreviousPage = () => {
  const { pageInfo } = usePaginationContext();
  const onFirstPage = pageInfo.page === 0;
  const { IconComponent, styledProps } = usePaginationButton({
    type: ButtonTypes.PreviousPage,
    disabledCondition: onFirstPage,
    pageNumber: pageInfo.page - 1,
  });

  return (
    <StyledButton {...styledProps}>
      <IconComponent height={DEFAULT_FONT_SIZE} />
    </StyledButton>
  );
};

export default PreviousPage;
