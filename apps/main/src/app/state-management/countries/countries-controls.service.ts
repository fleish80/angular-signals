import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CountriesControlsService {

  nameCtrl = new FormControl('', {nonNullable: true});

}
