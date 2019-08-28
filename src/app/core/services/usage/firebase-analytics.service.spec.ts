import { TestBed } from '@angular/core/testing'
import { Firebase } from '@ionic-native/firebase/ngx'
import { Platform } from 'ionic-angular'
import { PlatformMock } from 'ionic-mocks'

import {
  FirebaseMock,
  LogServiceMock
} from '../../../shared/testing/mock-services'
import { LogService } from '../misc/log.service'
import { FirebaseAnalyticsService } from './firebase-analytics.service'

describe('FirebaseAnalyticsService', () => {
  let service

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        FirebaseAnalyticsService,
        { provide: Firebase, useClass: FirebaseMock },
        { provide: LogService, useClass: LogServiceMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  )

  beforeEach(() => {
    service = TestBed.get(FirebaseAnalyticsService)
  })

  it('should create', () => {
    expect(service instanceof FirebaseAnalyticsService).toBe(true)
  })
})
