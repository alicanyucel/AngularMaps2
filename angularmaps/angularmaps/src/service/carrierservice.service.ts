import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapsModel } from 'src/model/mapsmodel';
import { ResultModel } from 'src/model/result';
@Injectable({
  providedIn: 'root'
})
export class CarrierService {
  api: string = "https://gotur-bunu-api-dev.azurewebsites.net/api" + "/CarrierLocation";
  constructor(
    private _http: HttpClient,
  ) { }
  getList(callBack: (res:{data:MapsModel[]}) => void) {
    this._http.get<{data:MapsModel[]}>(this.api,{headers:{'Authorization':'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdvdHVyYnVudS5jb20iLCJqdGkiOiI1ZDdlYjE5MS0yZjU0LTRjNmUtODUzMy1lMjg3ZmE2MWI1MmEiLCJuYmYiOjE2Nzk0NzYwNzEsImV4cCI6MTY3OTQ3NjM3MSwiaWF0IjoxNjc5NDc2MDcxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTQ1IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.vYxF47VHSGcx3JDYN0jA9ajFlt6VS6wAWU2eqp0zSn-5Fen0FqGBlUVqZkaJTLgggvAyuXwmtZ3os5--sdfQ-w'}}).subscribe({
      next: (res) => {
        callBack(res)
      }
    })
  }
}
