import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { QuestionService, CategoryService } from '../../services';
import { Question, Category } from '../../model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  questions: Question[];
  categories: Category[];
  sub: any;

  constructor(private questionService: QuestionService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.sub = this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
