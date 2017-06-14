import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { Http, Response } from '@angular/http'

@Injectable()
export class Utility {

  constructor(
    private http: Http
  ) {
  }
  private schemaUrl = 'assets/data/schema/schemas.json'
  private configUrl = 'assets/data/config.json'


  getConfigVersion() {

    var version = null
    this.getConfig(this.configUrl).subscribe(
      function(config) { version = config.version },
      function(error) { console.log("Error at" + error) },
      function() {
        return version
      })
  }

  getConfig(configUrl) {

    return this.http.get(configUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }

  getSchema(schemaUrl) {
    return this.http.get(schemaUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }


  private extractData(res: Response) {
    const body = res.json()
    return body || []

  }

  private handleError(error: Response | any) {
    let errMsg: string

    if (error instanceof Response) {
      const body = error.json() || ''
      const err = body.error || JSON.stringify(body)
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`
    } else {
      errMsg = error.message
        ? error.message
        : error.toString()
    }

    console.error(errMsg)
    return Observable.throw(errMsg)
  }

}
