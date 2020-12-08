import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'poka-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  private GET_URL = 'https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev';

  public data: any;

  public moreResult = 10;

  public allLoaded = false;

  public plants: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants() {
    this.http.get<any>(this.GET_URL).subscribe(data => {
      this.plants = data.results;
    });
  }

  getMorePlants() {
    this.http.get<any>(this.GET_URL + '?offset=' + this.moreResult).subscribe(data => {
      if (this.moreResult <= 40) {
        this.plants = this.plants.concat(data.results);
        this.moreResult += 10;

        if (this.moreResult === data.count) {
          this.allLoaded = true;
        }
      }
    });
  }
}
