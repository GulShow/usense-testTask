import { Directive } from "@angular/core";
import { EventEmitter } from "@angular/core";


import { PasswordStrengthService } from "./password-strength.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Directive({
  selector: "input[passwordStrength]",
  outputs: [ "strengthEvents: strength" ],
  host: {
    "(input)": "evaluateInputValue( $event.target.value )"
  },
  exportAs: "passwordStrength"
})
export class StrengthEventDirective {

  public strength: number;
  public strengthEvents: EventEmitter<number>;

  private passwordStrengthService: PasswordStrengthService;

  constructor( passwordStrengthService: PasswordStrengthService ) {

    this.passwordStrengthService = passwordStrengthService;
    this.strength = 1;
    this.strengthEvents = new EventEmitter();

  }


  public evaluateInputValue( value: string ) : void {

    this.strength = this.passwordStrengthService.evaluatePassword( value );
    this.strengthEvents.emit( this.strength );

  }

}
