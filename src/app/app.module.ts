import { BrowserModule } from "@angular/platform-browser";
import { Provider } from "@angular/core";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {PasswordStrengthService, Strength} from "./components/password-strength/password-strength.service";
import {PasswordStrengthModule} from "./components/password-strength/password-strength.module";




// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //


export class SillyPasswordStrengthService implements PasswordStrengthService {


  public evaluatePassword( value: string ) : number {

    console.log( "Evaluating silly password:", value );

    if ( value.length < 20 ) {

      return( Strength.VERY_WEAK );

    } else {

      return( Strength.EXCELLENT );

    }

  }

}

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

const demoProviders: Provider[] = [];


if ( window.location.search.indexOf( "?silly" ) === 0 ) {

  console.warn( "Using silly override service!" );

  demoProviders.push({
    provide: PasswordStrengthService,
    useClass: SillyPasswordStrengthService
  });

}

@NgModule({
  imports: [
    BrowserModule,
    PasswordStrengthModule
  ],
  providers: demoProviders,
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
