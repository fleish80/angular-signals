import { JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CountriesTableComponent } from './countries-table.component';
import { CountriesStoreService } from './countries-store.service';
import { CountriesControlsService } from './countries-controls.service';

@Component({
  selector: 'df-countries',
  standalone: true,
  imports: [MatFormFieldModule, JsonPipe, MatInputModule, ReactiveFormsModule, CountriesTableComponent, MatProgressSpinnerModule, NgIf],
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Countries</mat-label>
      <input matInput [formControl]="nameCtrl">
    </mat-form-field>

    <mat-spinner *ngIf="loaded()"/>
    <span *ngIf="error()">{{ error()!.message }}</span>
    <df-countries-table *ngIf="!loaded() && !error()"[countries]="countries()" />
  `,
  styles: [`
    :host {
        padding-block-start: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-inline: 10px;
      }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountriesComponent {

  #countriesStoreService = inject(CountriesStoreService);
  countries = this.#countriesStoreService.countries;
  loaded = this.#countriesStoreService.loaded;
  loading = this.#countriesStoreService.loading;
  error = this.#countriesStoreService.error;
  #countriesControlsService = inject(CountriesControlsService);
  nameCtrl = this.#countriesControlsService.nameCtrl;

}
