import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  languages = [
    { name: 'English', id: 'en' },
    { name: 'Russian', id: 'ru' }
  ];
  selected = 'en';

  constructor(
    public translate: TranslateService
  ) {}

  public changeLang(lang: string) {
    this.translate.use(lang);
  }
}
