import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy,Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Constant } from 'src/app/models/constant';
import { Toast } from './utilityClasses/toastController';
import { Network } from '@ionic-native/network/ngx';
import { ErrorInterceptor } from 'src/app/Interceptors/error-interceptors';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { HomePageModule } from './home/home.module';
import { FormBuilder } from '@angular/forms';





// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { IonicStorageModule } from '@ionic/storage';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    
    
    // IonicStorageModule.forRoot(),

    // BrowserAnimationsModule,
    // MatButtonModule, 
    // MatCheckboxModule
    
  ],
  providers: [     //All Custom Services are Defined here
    StatusBar,
    SplashScreen,
    Constant,
    Toast,
    Network,
    Platform,
    NativeStorage,
    SQLite,
    SQLitePorter,
    
  //  { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

