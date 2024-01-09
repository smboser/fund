import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FundraiserData } from '../interfaces/fundraiser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviornment';

@Injectable({
  providedIn: 'root',
})
export class FundraiserService {
  fundraiserList$: BehaviorSubject<FundraiserData[]> = new BehaviorSubject<
    FundraiserData[]
  >([]);
  constructor(protected http: HttpClient) {}

  list(): Observable<any> {
    console.log('calling api');
    return this.http.get<any>(`${environment.apiUrl}/fundraisers/getall`);
  }

  getLists() {
    this.list().subscribe((res) => {
      if (res && res.status === true && res.data) {
        this.fundraiserList$.next(res.data);
      }
    });
  }
}
