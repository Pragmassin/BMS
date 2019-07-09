import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-reminder-config',
	templateUrl: './reminder-config.component.html',
	styleUrls: ['./reminder-config.component.scss'],
})
export class ReminderComponent implements OnInit {
	posts = [];
	onAddPost(form: NgForm) {
		if (form.invalid) {
			return;
		}
		const post = {
			vendor: form.value.vendor,
			service: form.value.service,
			toemail: form.value.toemail,
			ccemail: form.value.ccemail,
			bccmail: form.value.bccmail,
		};
		this.posts.push(post);
		form.resetForm();
	}

	constructor() {}

	ngOnInit() {}
}
