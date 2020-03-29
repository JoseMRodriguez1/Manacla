import { Injectable } from '@angular/core';
import * as Parse from 'parse';

import { environment } from '../../../environments/environment';
import { CARDS_INFO } from 'src/app/constants/cardsInfo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    Parse.initialize(environment.parse.APP_ID, environment.parse.JS_KEY);
    Parse.serverURL = environment.parse.serverURL;
  }

  public createObject = (): void => {
    // const pictures = Parse.Object.extend('pictures');

    // CARDS_INFO.forEach(card => {
    //   const pics = new pictures();
    //   pics.set("image", card.image);
    //   pics.set("title", card.title);
    //   pics.set("description", card.description);
    //   pics.save();
    // });
  }

  public get2DArray = (list: (any)[], split: number) => {
    const result = []
    const input = list.slice(0)
    while (input[0]) {
      result.push(input.splice(0, split))
    }
    return result
  }
}
