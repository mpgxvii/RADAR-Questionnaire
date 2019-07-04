import 'moment/locale/da'
import 'moment/locale/de'
import 'moment/locale/es'
import 'moment/locale/it'
import 'moment/locale/nl'

import { Injectable } from '@angular/core'

import { Localisations } from '../../../assets/data/localisations'
import { LocKeys } from '../../shared/enums/localisations'
import { StorageKeys } from '../../shared/enums/storage'
import { LanguageSetting } from '../../shared/models/settings'
import { MultiLanguageText } from '../../shared/models/text'
import { StorageService } from './storage.service'

import moment = require('moment')

@Injectable()
export class LocalizationService {
  readonly defaultLanguage: LanguageSetting = {
    label: LocKeys.LANGUAGE_ENGLISH.toString(),
    value: 'en'
  }

  private language: LanguageSetting = { ...this.defaultLanguage }
  private localeMoment: moment.Moment

  constructor(private storage: StorageService) {
    this.localeMoment = moment()
    this.update()
  }

  update(): Promise<LanguageSetting> {
    return this.storage
      .get(StorageKeys.LANGUAGE)
      .then(language => this.updateLanguage(language))
  }

  setLanguage(language: LanguageSetting): Promise<LanguageSetting> {
    return this.storage
      .set(StorageKeys.LANGUAGE, language)
      .then(() => this.updateLanguage(language))
  }

  getLanguage(): LanguageSetting {
    return this.language
  }

  private updateLanguage(language: LanguageSetting) {
    this.language = language ? language : { ...this.defaultLanguage }
    this.localeMoment = moment().locale(this.language.value)
    moment.locale(this.language.value)
    return this.language
  }

  translateKey(locKey: LocKeys) {
    return this.translate(locKey.toString())
  }

  translate(value: string) {
    const loc = Localisations[value]
    if (!loc) {
      console.log('Missing localization ' + value)
      return value
    }
    return this.chooseText(loc, value)
  }

  chooseText(loc: MultiLanguageText, defaultValue?: string) {
    let translation = loc[this.language.value]
    if (translation !== undefined) {
      return translation
    }
    translation = loc['default']
    if (translation !== undefined) {
      console.log(
        'Using fallback language "default" for message ' + defaultValue
      )
      return translation
    }
    const keys = Object.keys(loc)
    if (keys.length > 0) {
      const lang = keys[0]
      console.log(
        'Using fallback language "' + lang + '" for message ' + defaultValue
      )
      return loc[lang]
    } else {
      console.log('Missing localization ' + defaultValue)
      return defaultValue
    }
  }

  moment(time?: number | Date) {
    if (time !== undefined) {
      return moment(time).locale(this.language.value)
    } else {
      return moment(this.localeMoment)
    }
  }
}
