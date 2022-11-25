import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './theme/theme.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    ThemeModule,
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// @Component({
//   selector: 'app-test',
//   template:'<div>HELLO</div>'
// })

// export class TestCmp {

//}

// @NgModule({
//   declarations:[
//     TestCmp,
//   ],
//   imports: [
//     CommonModule
//   ]
// })
// class MyModule {
//   static withProviders(): ModuleWithProviders<MyModule> {
//     return {
//       ngModule: MyModule,
//       providers: [

//       ]
//     }
//   }
// }
