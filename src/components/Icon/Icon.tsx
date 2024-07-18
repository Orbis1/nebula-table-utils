import type { Color, Palette, PaletteColor } from '@mui/material';
import type { PaletteAugmentColorOptions } from '@mui/material/styles/createPalette';
import React from 'react';

const Icon = (title: string, props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return <div key={props.key}>{title}</div>;
};
// Argument of type 'Element' is not assignable to parameter of type 'keyof IntrinsicElements'
// styles.ts
export const Menu = (props: any): JSX.Element => {
  return (
    <button {...props}>
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
    </button>
  );
};

//HeadCellMenuItem.icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
//MenuItemGroup
//utils.ts
export const Descending = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('Descending', props);
export const Ascending = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('Ascending', props);
export const ColumnSize = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('ColumnSize', props);
export const Search = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('Search', props);
export const Selection = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('Selection', props);
export const SelectAll = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('SelectAll', props);
export const ClearSelections = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('ClearSelections', props);
export const SelectPossible = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('SelectPossible', props);
export const SelectAlternative = (props: React.SVGProps<SVGSVGElement>): JSX.Element =>
  Icon('SelectAlternative', props);
export const SelectExcluded = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('SelectExcluded', props);

//use-pagination-button.ts
export const ArrowRight = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('ArrowRight', props);
export const ArrowLeft = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('ArrowLeft', props);
export const ArrowRightStop = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('ArrowRightStop', props);
export const ArrowLeftStop = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('ArrowLeftStop', props);

export const createV5ThemeOptions = () => {
  const palette: Palette = {
    text: {
      primary: '#404040',
      secondary: '#9900ff',
      disabled: '#e6ff00',
    },
    action: {
      hover: 'createV5ThemeOptions.HOVER!',
      active: '',
      hoverOpacity: 0,
      selected: '',
      selectedOpacity: 0,
      disabled: '',
      disabledOpacity: 0,
      disabledBackground: '',
      focus: '',
      focusOpacity: 0,
      activatedOpacity: 0,
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    mode: 'dark',
    contrastThreshold: 0,
    tonalOffset: 0,
    primary: {
      light: '#ffff99',
      main: '#ffff99',
      dark: '#ffff99',
      contrastText: '#ffff99',
    },
    secondary: {
      light: '#ffff99',
      main: '#ffff99',
      dark: '#ffff99',
      contrastText: '#ffff99',
    },
    error: {
      light: '#ffff99',
      main: '#ffff99',
      dark: '#ffff99',
      contrastText: '#ffff99',
    },
    warning: {
      light: '#ffff99',
      main: '#ffff99',
      dark: '#ffff99',
      contrastText: '#ffff99',
    },
    info: {
      light: '#ffff99',
      main: '#ffff99',
      dark: '#ffff99',
      contrastText: '#ffff99',
    },
    success: {
      light: '#ffff99',
      main: '#ffff99',
      dark: '#ffff99',
      contrastText: '#ffff99',
    },
    grey: GREY,
    divider: '',
    background: { default: '#ffff99', paper: '#ffff99' },

    getContrastText: function (background: string): string {
      return this.primary.contrastText;
    },
    augmentColor: function (options: PaletteAugmentColorOptions): PaletteColor {
      return this.success;
    },
  };
  return {
    palette,
  };
};

const GREY: Color = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161',
};

export const COLORS = {
  GREYSCALE_100: GREY['100'],
  GREYSCALE_95: '#545454',
  GREYSCALE_90: '#545454',
  GREYSCALE_85: '#545454',
  GREYSCALE_50: '#545454',
  GREYSCALE_70: '#545454',
  GREYSCALE_20: '#545454',
};
