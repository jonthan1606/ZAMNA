import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';




@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-50%)', opacity: 0 }),
        animate('150ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('150ms', style({ transform: 'translateY(-50%)', opacity: 0 }))
      ])
    ]
    )
  ]
})
export class ContactFormComponent implements OnInit {

  public contactForm!: FormGroup;
  public isLoading: boolean = false;
  public invalid: boolean = false;
  public invalidFlag: string = '';
  public invalidCaptcha: string = '';
  public url: string = '';
  public language: string = 'ESP';
  public activeLang = 'es';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,6}$')]],
      message: [''],
    });





  }

  ngOnInit(): void { }

  formValidation() {
    if (this.contactForm.controls['name'].errors) {
      this.invalidFlag = 'invalid-name';
      this.invalid = true;
    }
    if (this.contactForm.controls['email'].errors) {
      this.invalidFlag = 'invalid-email';
      this.invalid = true;
    }
    if (this.contactForm.controls['phone'].errors) {
      this.invalidFlag = 'invalid-phone';
      this.invalid = true;
    }
    if (this.contactForm.invalid) {
      this.invalidFlag = 'invalid-all';
      return;
    }
    this.submit(this.contactForm.value);
  }

  resetValidations(flag?: string) {
    this.invalid = false;
    this.invalidFlag = '';
  }

  errorMessage(formControl: string): any {
    if (this.contactForm.get(formControl)?.hasError('required')) {
      return "* Requerido."
    } else {
      if (this.contactForm.get(formControl)?.hasError('pattern')) {
        return "Email inválido"
      } else {
        return "Inválido"
      }
    }
  }

  async submit(formValue: any) {
    this.isLoading = true;
    console.log(formValue);
    this.invalidCaptcha = '';
    try {



    } catch (error) {

      console.log(error);
    }
  }

}
