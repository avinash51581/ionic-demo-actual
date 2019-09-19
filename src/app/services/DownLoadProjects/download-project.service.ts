import { Injectable } from '@angular/core';

import { Constant } from 'src/app/models/constant';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DownloadProjectRequestModule } from 'src/app/models/DownloadProjects/downloadProjectRequestModule';
import { DownloadProjectResponseModule } from 'src/app/models/DownloadProjects/downloadProjectResponseModule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadProjectService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    })};
    
  constructor(private http:HttpClient,private constant:Constant) { }

  downLoadProjects(downloadProjectrequest:DownloadProjectRequestModule): Observable<DownloadProjectResponseModule> {
    return this.http.post<DownloadProjectResponseModule>(this.constant.API_URL + 'downloadprojects', downloadProjectrequest, this.httpOptions);
  }


}
