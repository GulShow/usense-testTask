import { forwardRef } from "@angular/core";
import { Injectable } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //


export enum Strength {
  VERY_WEAK = 1,
  WEAK = 2,
  GOOD = 3,
  STRONG = 4,
  EXCELLENT = 5
}


@Injectable({
  providedIn: "root",
  useClass: forwardRef( () => DefaultPasswordStrengthServiceImplementation )
})
export abstract class PasswordStrengthService {

  public abstract evaluatePassword( value: string ) : number;

}

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //


@Injectable({
  providedIn: "root"
})
export class DefaultPasswordStrengthServiceImplementation extends PasswordStrengthService {

  public evaluatePassword( value: string ) : number {

    if ( value.length <= 5 ) {

      return( Strength.VERY_WEAK );

    } else if ( value.length <= 10 ) {

      return( Strength.WEAK );

    } else if ( value.length <= 15 ) {

      return( Strength.GOOD );

    } else if ( value.length <= 20 ) {

      return( Strength.STRONG );

    } else {

      return( Strength.EXCELLENT );

    }

  }

}
