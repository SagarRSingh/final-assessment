import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PersonFormComponent } from '../person-form/person-form.component';

@Injectable()
export class PersonFormCanDeactivateGuardService implements CanDeactivate<PersonFormComponent> {
  canDeactivate(component: PersonFormComponent): boolean {
    if(component.personForm.dirty) return confirm('Do you want to leave this page?')
    else return true;
  }

}