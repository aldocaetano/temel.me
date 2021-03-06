import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'stadtanzeiger-announcement-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css'],
})
export class StadtanzeigerAnnouncementCreateComponent {
	@Output() public createAnnouncement: EventEmitter<Object> = new EventEmitter<Object>();

	public form: FormGroup;

	constructor(private _formBuilder: FormBuilder) {
		this.form = this._formBuilder.group({
			anonymous: [false],
			email: [''],
			password: [''],
			price: [''],
			street: [''],
			title: [''],
			town: [''],
			zipCode: [''],
		});

		this.createAnnouncement.subscribe(() => {
			this.form.reset();
		});
	}

	public submit(): void {
		if (this.form.valid) {
			this.createAnnouncement.emit(this.form.value);
		}
	}
}
