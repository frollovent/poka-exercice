import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'poka-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {
  readonly moreResult = 10;

  private GET_URL = 'https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev';

  private results = this.moreResult;

  private plants: any[] = [];

  public allLoaded = false;

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
      if (this.moreResult <= (data.count - this.moreResult)) {
        this.plants = this.plants.concat(data.results);
        this.results += this.moreResult;

        if (this.results === data.count) {
          this.allLoaded = true;
        }
      }
    });
  }
}
