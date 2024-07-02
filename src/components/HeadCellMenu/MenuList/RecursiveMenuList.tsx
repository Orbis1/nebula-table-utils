/* eslint-disable import/no-cycle */
import type { PopoverOrigin } from '@mui/material';
import React from 'react';
import { StyledMenu } from '../styles';
import type { MenuItemGroup } from '../types';
import MenuGroupWrapper from './MenuGroupWrapper';

interface RecursiveMenuListProps {
  open: boolean;
  anchorEl: HTMLDivElement | null;
  onClose: (evt: React.MouseEvent) => void;
  menuGroups: MenuItemGroup[];
  transformOrigin?: PopoverOrigin;
  anchorOrigin?: PopoverOrigin;
  ariaLabel?: string;
  isSubMenu?: boolean;
  handleHeadCellMenuKeyDown?: (evt: React.KeyboardEvent<HTMLLIElement>) => void;
}

const RecursiveMenuList = ({
  anchorEl,
  open,
  onClose,
  ariaLabel,
  menuGroups,
  transformOrigin,
  anchorOrigin,
  isSubMenu,
  handleHeadCellMenuKeyDown,
}: RecursiveMenuListProps) => {
  if (!menuGroups.length) return null;
  return (
    <StyledMenu
      className="nebula-table-utils-head-menu"
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      aria-labelledby={ariaLabel}
      {...(anchorOrigin ? { anchorOrigin } : {})}
      {...(transformOrigin ? { transformOrigin } : {})}
    >
      {MenuGroupWrapper({ itemGroups: menuGroups, isSubMenu, handleHeadCellMenuKeyDown })}
    </StyledMenu>
  );
};

export default RecursiveMenuList;
