/**
 * App Server
 * RADAR App Server Api Documentation
 *
 * OpenAPI spec version: 0.0.1-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from '@angular/common/http'
import { Inject, Injectable, Optional } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { RadarProjectDto, RadarProjects } from '../../../shared/models/models'
import { Configuration } from './configuration'
import { CustomHttpUrlEncodingCodec } from './encoder'
import { BASE_PATH, COLLECTION_FORMATS } from './variables'

@Injectable()
export class RadarProjectControllerService {
  protected basePath = 'http://localhost:8080'
  public defaultHeaders = new HttpHeaders()
  public configuration = new Configuration()

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath
    }
    if (configuration) {
      this.configuration = configuration
      this.basePath = basePath || configuration.basePath || this.basePath
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data'
    for (const consume of consumes) {
      if (form === consume) {
        return true
      }
    }
    return false
  }

  /**
   * addProject
   *
   * @param projectDto projectDto
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addProjectUsingPOST(
    projectDto: RadarProjectDto,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<RadarProjectDto>
  public addProjectUsingPOST(
    projectDto: RadarProjectDto,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<RadarProjectDto>>
  public addProjectUsingPOST(
    projectDto: RadarProjectDto,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<RadarProjectDto>>
  public addProjectUsingPOST(
    projectDto: RadarProjectDto,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (projectDto === null || projectDto === undefined) {
      throw new Error(
        'Required parameter projectDto was null or undefined when calling addProjectUsingPOST.'
      )
    }

    let headers = this.defaultHeaders

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['*/*']
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json']
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected)
    }

    return this.httpClient.post<RadarProjectDto>(
      `${this.basePath}/projects`,
      projectDto,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    )
  }

  /**
   * getAllProjects
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAllProjectsUsingGET(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<RadarProjects>
  public getAllProjectsUsingGET(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<RadarProjects>>
  public getAllProjectsUsingGET(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<RadarProjects>>
  public getAllProjectsUsingGET(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['*/*']
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    // to determine the Content-Type header
    const consumes: string[] = []

    return this.httpClient.get<RadarProjects>(`${this.basePath}/projects`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    })
  }

  /**
   * getProjectsUsingId
   *
   * @param id id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getProjectsUsingIdUsingGET(
    id?: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<RadarProjectDto>
  public getProjectsUsingIdUsingGET(
    id?: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<RadarProjectDto>>
  public getProjectsUsingIdUsingGET(
    id?: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<RadarProjectDto>>
  public getProjectsUsingIdUsingGET(
    id?: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['*/*']
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    // to determine the Content-Type header
    const consumes: string[] = []
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected)
    }

    return this.httpClient.get<RadarProjectDto>(
      `${this.basePath}/projects/project`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    )
  }

  /**
   * getProjectsUsingProjectId
   *
   * @param projectId projectId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getProjectsUsingProjectIdUsingGET(
    projectId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<RadarProjectDto>
  public getProjectsUsingProjectIdUsingGET(
    projectId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<RadarProjectDto>>
  public getProjectsUsingProjectIdUsingGET(
    projectId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<RadarProjectDto>>
  public getProjectsUsingProjectIdUsingGET(
    projectId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (projectId === null || projectId === undefined) {
      throw new Error(
        'Required parameter projectId was null or undefined when calling getProjectsUsingProjectIdUsingGET.'
      )
    }

    let headers = this.defaultHeaders

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['*/*']
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    // to determine the Content-Type header
    const consumes: string[] = []

    return this.httpClient.get<RadarProjectDto>(
      `${this.basePath}/projects/${encodeURIComponent(String(projectId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    )
  }

  /**
   * updateProject
   *
   * @param projectDto projectDto
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateProjectUsingPUT(
    projectDto: RadarProjectDto,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<RadarProjectDto>
  public updateProjectUsingPUT(
    projectDto: RadarProjectDto,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<RadarProjectDto>>
  public updateProjectUsingPUT(
    projectDto: RadarProjectDto,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<RadarProjectDto>>
  public updateProjectUsingPUT(
    projectDto: RadarProjectDto,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (projectDto === null || projectDto === undefined) {
      throw new Error(
        'Required parameter projectDto was null or undefined when calling updateProjectUsingPUT.'
      )
    }

    let headers = this.defaultHeaders

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['*/*']
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json']
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected)
    }

    return this.httpClient.put<RadarProjectDto>(
      `${this.basePath}/projects`,
      projectDto,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    )
  }
}
