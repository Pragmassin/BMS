import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-bill-schedule',
	templateUrl: './bill-schedule.component.html',
	styleUrls: ['./bill-schedule.component.scss'],
})
export class BillScheduleComponent implements OnInit {
	posts = [];
	onAddPost(form: NgForm) {
		if (form.invalid) {
			return;
		}
		const post = {
			vendor: form.value.vendor,
			service: form.value.service,
			billcycle: form.value.billcycle,
			firstrem: form.value.firstrem,
			followup: form.value.followup,
		};
		this.posts.push(post);
		form.resetForm();
	}

	constructor() {}

	ngOnInit() {}
}
