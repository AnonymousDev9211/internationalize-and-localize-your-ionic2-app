import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { LanguageService } from "../../providers/language.service";
import { LanguageModel } from "../../models/language.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  languageSelected : any = 'en';
  languages : Array<LanguageModel>;

  constructor(
    public navCtrl: NavController,
    public translate: TranslateService,
    public languageService: LanguageService
  )
  {
    this.languages = this.languageService.getLanguages();
  }

  setLanguage(){
    this.translate.setDefaultLang(this.languageSelected);
    this.translate.use(this.languageSelected);
  }
}
