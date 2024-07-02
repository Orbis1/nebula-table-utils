import React, { memo } from 'react';
import FirstPage from './Buttons/FirstPage';
import LastPage from './Buttons/LastPage';
import NextPage from './Buttons/NextPage';
import PreviousPage from './Buttons/PreviousPage';
import DisplayedRowsLabel from './DisplayedRowsLabel';
import RowsPerPage from './Dropdowns/RowsPerPage';
import SelectPage from './Dropdowns/SelectPage';
import PaginationProvider from './context/PaginationProvider';
import type { PaginationContentProps } from './types';

const PaginationContent = (props: PaginationContentProps) => (
  <PaginationProvider {...props}>
    <RowsPerPage />
    <SelectPage />
    <DisplayedRowsLabel />
    <FirstPage />
    <PreviousPage />
    <NextPage />
    <LastPage />
  </PaginationProvider>
);

export default memo(PaginationContent);
