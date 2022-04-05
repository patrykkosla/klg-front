import { Component, OnInit, ViewChild } from '@angular/core';
import { SchemesService } from '../../services/schemes.service';
import { SchemeInterface } from '../types/scheme.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-shemes-list',
  templateUrl: './shemes-list.component.html',
  styleUrls: ['./shemes-list.component.scss'],
})
export class ShemesListComponent implements OnInit {
  schemesList = new MatTableDataSource();

  displayedColumns: string[] = [
    'name',
    'description',
    'triger',
    'interimtrigger',
    'lbmanEffectivedeadlineinfo',
    'buttons'
  ];
  constructor(private schemesSerivises: SchemesService) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.schemesList.data = this.schemesSerivises.getSchemesFromJson();
  }

  ngAfterViewInit() {
    this.schemesList.sort = this.sort;
  }
} 
