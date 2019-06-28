import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-service-master',
  templateUrl: './service-master.component.html',
  styleUrls: ['./service-master.component.scss']
})
export class ServiceComponent implements OnInit {

  posts = [];
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post = {
      service: form.value.service
    };
    this.posts.push(post);
    form.resetForm();
  }

  constructor() { }
  ngOnInit() {
  }

}
