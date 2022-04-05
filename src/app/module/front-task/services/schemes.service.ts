import { Injectable } from '@angular/core';
import { SchemeInterface } from '../components/types/scheme.interface';
import schemsJson from 'src/assets/schemes.json';
import fileSelectJson from 'src/assets/fileSelect.json';
import { SelectInterface } from '../components/types/select.interface';


@Injectable({
  providedIn: 'root'
})
export class SchemesService {
  constructor() { }

  getSchemesFromJson(): SchemeInterface[] {
    return schemsJson as unknown as SchemeInterface[];
  }

  getSelectListOptions(): SelectInterface[] {
    return fileSelectJson as unknown as SelectInterface[];
  }

}
