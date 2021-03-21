import { FormSaidaComponent } from './Component/Saida/form-saida/form-saida.component';
import { FormEntradaComponent } from './Component/Entrada/form-entrada/form-entrada.component';
import { ListEntradaComponent } from './Component/Entrada/list-entrada/list-entrada.component';
import { ListSaidaComponent } from './Component/Saida/list-saida/list-saida.component';
import { CardSaidaComponent } from './Component/Saida/card-saida/card-saida.component';
import { ExtratoComponent } from './Pages/extrato/extrato.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardEntradaComponent } from './Component/Entrada/card-entrada/card-entrada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExtratoComponent,
    CardEntradaComponent,
    CardSaidaComponent,
    ListSaidaComponent,
    ListEntradaComponent,
    FormEntradaComponent,
    FormSaidaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
