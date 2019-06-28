import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cyclemaster',
  templateUrl: './cyclemaster.component.html',
  styleUrls: ['./cyclemaster.component.scss']
})
export class CyclemasterComponent implements OnInit {

  posts = [];
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post = {
      billcycle: form.value.billcycle,
      months: form.value.months
    };
    this.posts.push(post);
    form.resetForm();
  }

  constructor() { }

  ngOnInit() {
  }

}
