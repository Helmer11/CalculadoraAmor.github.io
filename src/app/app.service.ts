import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL, cabecera } from '../shared/APIURL';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AppService {

constructor(private _http: HttpClient) { }


 getPorcentage(param: any): Observable<any>{

  const params  = 'fname=' + param.chica +
                  '&sname=' + param.chico
return this._http.get(APIURL.consulta + params, {headers: cabecera});
}





}
