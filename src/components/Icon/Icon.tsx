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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="12px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M15 4H1V2h14zm0 10H1v-2h14zm0-5H1V7h14z"></path>
    </svg>
  );
};

//HeadCellMenuItem.icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
//MenuItemGroup
//utils.ts
export const Descending = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M3 2h1v10.293l1.5-1.5.707.707L3.5 14.207.793 11.5l.707-.707 1.5 1.5zm12 2H8v1h7zM8 7h6v1H8zm5 3H8v1h5z"></path>
    </svg>
  );
};
export const Ascending = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M3.5 1.793 6.207 4.5l-.707.707-1.5-1.5V14H3V3.707l-1.5 1.5L.793 4.5zM8 4h5v1H8zm0 3h6v1H8zm0 3h7v1H8z"></path>
    </svg>
  );
};
export const ColumnSize = (props: React.SVGProps<SVGSVGElement>): JSX.Element => Icon('ColumnSize', props);
export const Search = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M9.057 11.164a6 6 0 1 1 2.112-2.116 1 1 0 0 1 .052.044l4.176 4.08a1 1 0 0 1 .009 1.422l-.707.707a1 1 0 0 1-1.406.008l-4.185-4.087a1 1 0 0 1-.05-.058ZM10.5 6a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0"></path>
    </svg>
  );
};
export const Selection = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M1 1.5a.5.5 0 0 1 .5-.5H3V0H1.5A1.5 1.5 0 0 0 0 1.5V3h1zM14.5 1a.5.5 0 0 1 .5.5V3h1V1.5A1.5 1.5 0 0 0 14.5 0H13v1zM1 14.5a.5.5 0 0 0 .5.5H3v1H1.5A1.5 1.5 0 0 1 0 14.5V13h1zm14 0a.5.5 0 0 1-.5.5H13v1h1.5a1.5 1.5 0 0 0 1.5-1.5V13h-1zM6 0h4v1H6zM0 6h1v4H0zm15 0h1v4h-1zm-9 9h4v1H6z"></path>
    </svg>
  );
};
export const SelectAll = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M3 4v1H1v10h10v-2h1v2a1 1 0 0 1-.883.993L11 16H1a1 1 0 0 1-.993-.883L0 15V5a1 1 0 0 1 .883-.993L1 4zm12-4a1 1 0 0 1 .993.883L16 1v10a1 1 0 0 1-.883.993L15 12H5a1 1 0 0 1-.993-.883L4 11V1a1 1 0 0 1 .883-.993L5 0zm0 1H5v10h10zm-2.36 2.653.72.694L9.143 8.72 6.64 6.125l.72-.694L9.143 7.28z"></path>
    </svg>
  );
};
export const ClearSelections = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M6 15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5m-5-2v1a.5.5 0 0 0 .5.5h1a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1v-1.5a.5.5 0 1 1 1 0m0-7v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0m-1-4V1a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0m6-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 .5m9 2v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 1 1 0-1H15a1 1 0 0 1 1 1v1.5a.5.5 0 1 1-1 0M9.166 6.166c1.555-1.555 4.113-1.555 5.668 0s1.555 4.113 0 5.668-4.113 1.555-5.668 0-1.555-4.063 0-5.668m4.966 1.555a.56.56 0 0 0 0-.803.56.56 0 0 0-.803 0l-1.304 1.305-1.304-1.305a.522.522 0 0 0-.803 0 .524.524 0 0 0 0 .803l1.305 1.304-1.305 1.304c-.25.2-.25.552 0 .803.251.25.602.25.803 0l1.304-1.304 1.304 1.304c.2.25.552.25.803 0 .2-.201.25-.602 0-.803l-1.304-1.304z"></path>
    </svg>
  );
};
export const SelectPossible = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M6 15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5m-5-2v1a.5.5 0 0 0 .5.5h1a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1v-1.5a.5.5 0 1 1 1 0m14 0a.5.5 0 1 1 1 0V15a1 1 0 0 1-1 1h-1.5a.5.5 0 1 1 0-1h1a.5.5 0 0 0 .5-.5zm-14-7v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0m15 0v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0m-16-4V1a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0m6-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 .5m9 2v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 1 1 0-1H15a1 1 0 0 1 1 1v1.5a.5.5 0 1 1-1 0M4 4v8h8V4zm0-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></path>
    </svg>
  );
};
export const SelectAlternative = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M6 15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5m-5-2v1a.5.5 0 0 0 .5.5h1a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1v-1.5a.5.5 0 1 1 1 0m14 0a.5.5 0 1 1 1 0V15a1 1 0 0 1-1 1h-1.5a.5.5 0 1 1 0-1h1a.5.5 0 0 0 .5-.5zm-14-7v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0m15 0v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0m-16-4V1a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0m6-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 .5m9 2v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 1 1 0-1H15a1 1 0 0 1 1 1v1.5a.5.5 0 1 1-1 0M4 4v8l8-8zm0-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></path>
    </svg>
  );
};
export const SelectExcluded = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M6 15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5m-5-2v1a.5.5 0 0 0 .5.5h1a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1v-1.5a.5.5 0 1 1 1 0m14 0a.5.5 0 1 1 1 0V15a1 1 0 0 1-1 1h-1.5a.5.5 0 1 1 0-1h1a.5.5 0 0 0 .5-.5zm-14-7v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0m15 0v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0m-16-4V1a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0m6-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 .5m9 2v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 1 1 0-1H15a1 1 0 0 1 1 1v1.5a.5.5 0 1 1-1 0M4 3h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></path>
    </svg>
  );
};

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
  GREYSCALE_100: '#ffffff',
  GREYSCALE_95: '#545454',
  GREYSCALE_90: '#545454',
  GREYSCALE_85: '#545454',
  GREYSCALE_50: '#545454',
  GREYSCALE_70: '#545454',
  GREYSCALE_20: '#545454',
};
