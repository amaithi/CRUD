import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const API_URL = 'http://mcwaretechnologies.pythonanywhere.com';
@Injectable({
    providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public saveform1(req): Observable<any> {
    return this.http.post<any>(API_URL+'/DesignationInsert',req).pipe(map(res => res));
  }
  public saveform2(req): Observable<any> {
    return this.http.post<any>(API_URL+'/DepartmentInsert',req).pipe(map(res => res));
  }
  public saveform4(req): Observable<any> {
    return this.http.post<any>(API_URL+'/ZoneInsert',req).pipe(map(res => res));
  }
  public saveform5(req): Observable<any> {
    return this.http.post<any>(API_URL+'/WardsInsert',req).pipe(map(res => res));
  }
  public saveform3(req): Observable<any> {
    return this.http.post<any>(API_URL+'/StreetsInsert',req).pipe(map(res => res));
  }


  public saveform6(req): Observable<any> {
    return this.http.post<any>(API_URL+'/ReasonForNewWork',req).pipe(map(res => res));
  }
  public saveform7(req): Observable<any> {
    return this.http.post<any>(API_URL+'/RoadMaterialInsert',req).pipe(map(res => res));
  }
  public saveform8(req): Observable<any> {
    return this.http.post<any>(API_URL+'/SchemeInsert',req).pipe(map(res => res));
  }
  public saveform9(req): Observable<any> {
    return this.http.post<any>(API_URL+'/StreetTypeInsert',req).pipe(map(res => res));
  }
  public saveform10(req): Observable<any> {
    return this.http.post<any>(API_URL+'/WorkTypeInsert',req).pipe(map(res => res));
  }
  public saveform11(req): Observable<any> {
    return this.http.post<any>(API_URL+'/StreetsInsert',req).pipe(map(res => res));
  }
  public saveform12(req): Observable<any> {
    return this.http.post<any>(API_URL+'/ConstructorDetailsInsert',req).pipe(map(res => res));
  }
  public fetchDetails(): Observable<any> {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json',
       });
    let options = { headers: headers };
    return this.http.post<any>(API_URL+'/AllDepartmentFetch',options).pipe(map(res => res));
  }
  public editDetails(id): Observable<any> {
    return this.http.post<any>(API_URL+'/EditDepartment',id).pipe(map(res => res));
  }
  public deleteDetails(id): Observable<any> {
    return this.http.post<any>(API_URL+'/DeleteDepartment',id).pipe(map(res => res));
  }
}
// /api/users