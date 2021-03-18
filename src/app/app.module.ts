import { FormProdutoComponent } from "./Componentes/produto/form-produto/form-produto.component";
import { ListProdutoComponent } from "./Componentes/produto/list-produto/list-produto.component";
import { CardProdutoComponent } from "./Componentes/produto/card-produto/card-produto.component";
import { CarregamentoComponent } from "./Componentes/carregamento/carregamento.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LOCALE_ID } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TabsModule } from "ngx-bootstrap/tabs";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxCurrencyModule } from "ngx-currency";
import { ToastrModule } from "ngx-toastr";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { NgSelectModule } from "@ng-select/ng-select";
import { MatIconModule } from "@angular/material/icon";
import { NgxSelectModule, INgxSelectOptions } from "ngx-select-ex";

import { AppComponent } from "./app.component";
import { TituloComponent } from "./_shared/titulo/titulo.component";

import { DateTimeFormatPipePipe } from "./_helps/DateTimeFormatPipe.pipe";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgWizardModule, NgWizardConfig, THEME } from "ng-wizard";
import { NgxCpfCnpjModule } from "ngx-cpf-cnpj";
import { NgxLoadingModule } from "ngx-loading";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BreadcrumbModule } from "angular-crumbs";
import { LoginComponent } from "./Componentes/usuario/login/login.component";
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default,
};

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    LoginComponent,
    DateTimeFormatPipePipe,
    CarregamentoComponent,
    CardProdutoComponent,
    ListProdutoComponent,
    FormProdutoComponent,
  ],
  imports: [
    BreadcrumbModule,
    NgSelectModule,
    BrowserModule,
    MatIconModule,
    MatStepperModule,
    NgxSelectModule,
    NgxCpfCnpjModule,
    NgxLoadingModule.forRoot({}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    MatFormFieldModule,
    NgWizardModule.forRoot(ngWizardConfig),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: true,
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
