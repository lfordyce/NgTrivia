import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

import { Question } from '../model/question';
import { Category } from '../model/category';
import { CategoryService } from './category.service';

@Injectable()
export class QuestionService {

  private questionsUrl = 'http://localhost:3000/questions';

  constructor(private http: Http, private categoryService: CategoryService) {}

  getQuestions(): Observable<Question[]> {

    const url = this.questionsUrl;

    return Observable.forkJoin( this.http.get( url ).map< any, Question[]>(this.extractData), this.categoryService.getCategories()  )
      .map((combine, index) => {
        const questions: Question[] = combine[0];
        const categories: Category[] = combine[1];
        questions.forEach(q => {
          q.categories = [];
          q.categoryIds.forEach(id => q.categories.push(categories.find(element => element.id === id)))
        })
        return questions;
      })
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError( error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response ) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
