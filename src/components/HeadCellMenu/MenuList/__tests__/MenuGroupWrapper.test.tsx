import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import type { MenuItemGroup } from '../../types';
import MenuGroupWrapper from '../MenuGroupWrapper';

describe('<MenuGroupWrapper />', () => {
  const renderer = (itemGroups: MenuItemGroup[]) => {
    render(<MenuGroupWrapper itemGroups={itemGroups} />);
  };

  test('should render menu group without divider', () => {
    renderer([[{ items: [{ id: 1, icon: () => <i />, itemTitle: 'Menu#01', enabled: true }] }]]);
    expect(screen.queryByText('Menu#01')).toBeVisible();
    expect(screen.queryByTestId('group-divider')).not.toBeInTheDocument();
  });

  test('should render menu group with divider', () => {
    renderer([
      [{ items: [{ id: 1, icon: () => <i />, itemTitle: 'Menu#01', enabled: true }] }],
      [{ items: [{ id: 2, icon: () => <i />, itemTitle: 'Menu#02', enabled: true }] }],
    ]);
    expect(screen.queryByText('Menu#01')).toBeVisible();
    expect(screen.queryByText('Menu#02')).toBeVisible();
    expect(screen.getByTestId('group-divider')).toBeVisible();
  });
});
