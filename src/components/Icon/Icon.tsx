import React from 'react';

const Icon = (title: string): JSX.Element => {
  return <div>{title}</div>;
};
// Argument of type 'Element' is not assignable to parameter of type 'keyof IntrinsicElements'
// styles.ts
export const Menu = (props: any): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="12px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
    >
      <path d="M15 4H1V2h14zm0 10H1v-2h14zm0-5H1V7h14z"></path>
    </svg>
  );
};

//HeadCellMenuItem.icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
//MenuItemGroup
//utils.ts
export const Descending = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('Descending');
export const Ascending = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('Ascending');
export const ColumnSize = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('ColumnSize');
export const Search = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('Search');
export const Selection = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('Selection');
export const SelectAll = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('SelectAll');
export const ClearSelections = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('ClearSelections');
export const SelectPossible = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('SelectPossible');
export const SelectAlternative = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('SelectAlternative');
export const SelectExcluded = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('SelectExcluded');

//use-pagination-button.ts
export const ArrowRight = Icon('ArrowRight');
export const ArrowLeft = Icon('ArrowLeft');
export const ArrowRightStop = Icon('ArrowRightStop');
export const ArrowLeftStop = Icon('ArrowLeftStop');

export const createV5ThemeOptions = () => {
  const palette = {};
  return { palette };
};
export const COLORS = {
  GREYSCALE_100: 100,
  GREYSCALE_95: 95,
  GREYSCALE_90: 90,
  GREYSCALE_85: 85,
  GREYSCALE_70: 70,
  GREYSCALE_50: 50,
  GREYSCALE_20: 20,
};
