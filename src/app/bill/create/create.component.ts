import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']})
export class CreateComponent implements OnInit {
  posts = [];
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post = {
      vendor: form.value.vendor,
      service: form.value.service,
      date: form.value.date,
      value: form.value.value,
      bill: form.value.bill
    };
    this.posts.push(post);
    form.resetForm();
  }

  ngOnInit() {
  }
}
