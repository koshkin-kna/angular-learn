import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { AddProductService } from './addproduct/addproduct.service';

import { InMemoryDataService } from './api/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddproductComponent,
    ListproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    // Следующая строка реализует fake api, убрать на проде
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
  ],
  providers: [
    AddProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
var app = angular.module('exampleApp', ['ngDialog']);

app.controller('MainCtrl', function ($scope, ngDialog) {
    $scope.clickToOpen = function () {
        ngDialog.open({ template: 'popupTmpl.html', className: 'ngdialog-theme-default' });
    };
});
angular.module('HelloWorldApp', [])
  .controller('HelloWorldController', function($scope) {
    $scope.greeting = "Hello World";
  });
 */



