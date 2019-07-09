import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-vendormaster',
	templateUrl: './vendormaster.component.html',
	styleUrls: ['./vendormaster.component.scss'],
})
export class VendormasterComponent implements OnInit {

  posts = [];
	onAddPost(form: NgForm) {
		if (form.invalid) {
			return;
		}
		const post = {
			name: form.value.user,
			ad1: form.value.ad1,
			ad2: form.value.ad2,
			ad3: form.value.ad3,
			area: form.value.area,
			city: form.value.city,
			state: form.value.state,
			pin: form.value.pin,
			email: form.value.email,
			phone: form.value.phone,
			contact: form.value.contact,
			escemail: form.value.esc,
			escphone: form.value.escph,
			gst: form.value.gst,
		};
		this.posts.push(post);
		form.resetForm();
	}

	constructor() {}

	ngOnInit() {}
}
