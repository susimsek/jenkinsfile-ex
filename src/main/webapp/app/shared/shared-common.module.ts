import { NgModule } from '@angular/core';

import { DenemeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [DenemeSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [DenemeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DenemeSharedCommonModule {}
