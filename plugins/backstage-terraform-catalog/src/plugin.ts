import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const backstageTerraformCatalogPlugin = createPlugin({
  id: 'backstage-terraform-catalog',
  routes: {
    root: rootRouteRef,
  },
});

export const BackstageTerraformCatalogPage = backstageTerraformCatalogPlugin.provide(
  createRoutableExtension({
    name: 'BackstageTerraformCatalogPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
