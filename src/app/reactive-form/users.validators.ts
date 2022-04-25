import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";

export class UsersValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0)
      return { cannotContainSpace: true };

    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        if (control.value == "mosh") {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
  }
}
