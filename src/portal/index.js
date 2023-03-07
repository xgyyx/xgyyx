import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from './Layout';

const Index = () => {
  return (
    <>
      <Layout />
    </>
  );
};

createRoot(document.getElementById('main')).render(<Index />);