import { Injectable } from '@angular/core';
import { ALL_NAMES } from './all-names';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  delay(millis: number): Promise<void> {
    return new Promise<void>(res => setTimeout(res, millis));
  }

   async search(keyword: string) {  
    if (!keyword) return [];

    console.log('starting search for "', keyword, '"');

    keyword = keyword.toLowerCase();

    await this.delay(3000);
    console.log('completed search for "', keyword, '"');
    return ALL_NAMES.filter((val: string) => val.toLowerCase().includes(keyword))
  }

  async init() {
    console.log('The application is now initializing');

    await this.delay(5000);

    console.log('initialization completed');

  }

}
