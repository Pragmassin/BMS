import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	@ViewChild('Username',{static: false}) UsernameRef: ElementRef;

	constructor(private router: Router) {}

	ngOnInit() {}
	onLogin() {
		const username = this.UsernameRef.nativeElement.value;
		this.router.navigate([username]);
	}
}
