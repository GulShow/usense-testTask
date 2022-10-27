import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


import { PasswordStrengthService } from "./password-strength.service";
import { Strength } from "./password-strength.service";
import { StrengthEventDirective } from "./strength-event.directive";
import { StrengthIndicatorComponent } from "./strength-indicator.component";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

export { PasswordStrengthService };
export { Strength };

export { StrengthEventDirective };
export { StrengthIndicatorComponent };

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    StrengthEventDirective,
    StrengthIndicatorComponent
  ],
  providers: [

  ],
  declarations: [
    StrengthEventDirective,
    StrengthIndicatorComponent
  ]
})
export class PasswordStrengthModule {

}
