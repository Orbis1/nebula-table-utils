import React from 'react';
import { DEFAULT_FONT_SIZE } from '../../../constants';
import handleLastTab from '../../../utils/handle-last-tab';
import { usePaginationContext } from '../context/PaginationProvider';
import { StyledButton } from '../styles';
import { ButtonTypes, VisibilityThresholds } from '../types';
import usePaginationButton from '../use-pagination-button';

const LastPage = () => {
  const { pageInfo, keyboard, totalPages, isSelectionMode, width } = usePaginationContext();
  const onLastPage = pageInfo.page >= totalPages - 1;
  const { IconComponent, styledProps } = usePaginationButton({
    type: ButtonTypes.LastPage,
    disabledCondition: onLastPage,
    pageNumber: totalPages - 1,
  });

  const handleLastButtonTab = keyboard.enabled
    ? (event: React.KeyboardEvent) => handleLastTab(event, keyboard, isSelectionMode)
    : null;

  if (width <= VisibilityThresholds.LastPage) {
    return null;
  }

  return (
    <StyledButton {...styledProps} onKeyDown={handleLastButtonTab}>
      <IconComponent height={DEFAULT_FONT_SIZE} />
    </StyledButton>
  );
};

export default LastPage;
