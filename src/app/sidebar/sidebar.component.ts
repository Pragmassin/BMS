import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-sidebar',
templateUrl: './sidebar.component.html',
styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
menuItems: any[] = [
{ title: 'VendorMaster', loc: '/vendormaster', iconName: 'assignment', stat: 'active' },
{ title: 'Create Bill', loc: '/create', iconName: 'receipt', stat: 'active' },
{ title: 'Bill Cycle Master', loc: '/cyclemaster', iconName: 'restore', stat: 'active' }
];

constructor() {}

ngOnInit() {}

}
