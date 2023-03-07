import React, { lazy } from 'react';

const entries = [
  {
    module: 'index',
    path: './index',
    Component: lazy(() => import('./index'))
  },
  {
    module: 'index',
    path: './index',
    Component: lazy(() => import('./index'))
  },
]