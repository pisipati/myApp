import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './list-filter-pipe.component.html',
  styleUrls: ['./list-filter-pipe.component.css']
})
export class ListFilterPipeComponent implements OnInit {
  searchTerm!: string;
  page = 1;
  pageSize = 4;
  collectionSize!: number;
  currentRate = 8;
  countries!: Country[];
  allCountries!: Country[];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Country[]>('./assets/data/countries.json')
      .subscribe((data: Country[]) => {
        this.collectionSize = data.length;

        this.countries = data;
        this.allCountries = this.countries;
      });
  }

  search(value: string): void {
    this.countries = this.allCountries.filter((val) => val.name.toLowerCase().includes(value));
    this.collectionSize = this.countries.length;
  }

}
