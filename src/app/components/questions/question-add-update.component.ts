import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { QuestionService, CategoryService } from '../../services';
import { Question, Category } from '../../model';

@Component({
  selector: 'app-questions-add-update',
  templateUrl: './question-add-update.component.html',
  styleUrls: ['./question-add-update.component.scss']
})
export class QuestionAddUpdateComponent implements OnInit {

  questions: Question[];
  categories: Category[];
  sub: any;

  constructor(private questionService: QuestionService,
              private categoryService: CategoryService) { }

  ngOnInit() {
  }

}
