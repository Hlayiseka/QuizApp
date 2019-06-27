import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class QuizDataProvider {
  questions: any;
  constructor(public http: HttpClient) {
    console.log('Hello QuizDataProvider Provider');
  }
  setData(value){
    this.questions = value;
  }

}
