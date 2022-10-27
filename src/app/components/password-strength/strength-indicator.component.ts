import { Component } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";


import { Strength } from "./password-strength.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
  selector: "password-strength-indicator",
  inputs: [ "strength" ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [ "./strength-indicator.component.scss" ],
  templateUrl: "./strength-indicator.component.html"
})
export class StrengthIndicatorComponent {

  public strength: Strength = Strength.VERY_WEAK;

}
