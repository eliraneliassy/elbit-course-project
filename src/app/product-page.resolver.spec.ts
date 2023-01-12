import { TestBed } from '@angular/core/testing';

import { ProductPageResolver } from './product-page.resolver';

describe('ProductPageResolver', () => {
  let resolver: ProductPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
