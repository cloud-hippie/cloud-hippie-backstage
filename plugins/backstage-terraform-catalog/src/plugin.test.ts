import { backstageTerraformCatalogPlugin } from './plugin';

describe('backstage-terraform-catalog', () => {
  it('should export plugin', () => {
    expect(backstageTerraformCatalogPlugin).toBeDefined();
  });
});
