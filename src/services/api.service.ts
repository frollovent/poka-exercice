import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiHttpService {
  private urlApi = 'https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev';

  constructor(
    // Angular Modules
    private http: HttpClient,

  ) {}

  // tslint:disable-next-line:typedef
  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }
}
