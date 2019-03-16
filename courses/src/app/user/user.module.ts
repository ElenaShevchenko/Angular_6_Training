import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [UserComponent]
})
export class UserModule { }
