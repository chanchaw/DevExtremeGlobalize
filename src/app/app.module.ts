import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';



// 下面开始是国际化代码
import "devextreme/localization/globalize/number";
import "devextreme/localization/globalize/date";
import "devextreme/localization/globalize/currency";
import "devextreme/localization/globalize/message";
 
// Dictionaries for German and Russian languages
// import deMessages from "devextreme/localization/messages/de.json!json";
// import ruMessages from "devextreme/localization/messages/ru.json!json";
 
// Common and language-specific CLDR JSONs
// 在 2019年6月22日 09:38:24 测试这里代码要注释掉，使用下面的方式导入对应语言的json
// import supplemental from "devextreme-cldr-data/supplemental.json!json";
// import deCldrData from "devextreme-cldr-data/de.json!json";
// import ruCldrData from "devextreme-cldr-data/ru.json!json";

 
// In projects created with Angular CLI 6+
import deMessages from "devextreme/localization/messages/de.json";
import ruMessages from "devextreme/localization/messages/ru.json";
import zhMessages from "devextreme/localization/messages/zh.json";
import jaMessages from "devextreme/localization/messages/ja.json";

import supplemental from "devextreme-cldr-data/supplemental.json";
import deCldrData from "devextreme-cldr-data/de.json";
import ruCldrData from "devextreme-cldr-data/ru.json";
import zhCldrData from "devextreme-cldr-data/zh.json";
import jaCldrData from "devextreme-cldr-data/ja.json";
 
import Globalize from "globalize";
 
Globalize.load(
    supplemental, deCldrData, ruCldrData,zhCldrData,jaCldrData
);
 
Globalize.loadMessages(deMessages);
Globalize.loadMessages(ruMessages);
Globalize.loadMessages(zhMessages);
Globalize.loadMessages(jaMessages);
 
Globalize.locale(navigator.language);
// 国际化代码结束



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
