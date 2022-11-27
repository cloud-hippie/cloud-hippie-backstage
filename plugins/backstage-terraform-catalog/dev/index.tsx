import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { backstageTerraformCatalogPlugin, BackstageTerraformCatalogPage } from '../src/plugin';

createDevApp()
  .registerPlugin(backstageTerraformCatalogPlugin)
  .addPage({
    element: <BackstageTerraformCatalogPage />,
    title: 'Root Page',
    path: '/backstage-terraform-catalog'
  })
  .render();
