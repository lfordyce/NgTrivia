import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit, OnDestroy {

  tags: string[];
  sub: any;

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.sub = this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
