import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DenemeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DenemeSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DenemeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DenemeSharedModule {
  static forRoot() {
    return {
      ngModule: DenemeSharedModule
    };
  }
}
