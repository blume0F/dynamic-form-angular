import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  dynamicForm!: FormGroup;
  formStructure: any;
  submittedValues: any;
  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({});
    this.formService.getMockApiData().subscribe((data: any) => {
      this.formStructure = data;
      let formGroup = {};
      this.formStructure.forEach((control) => {
        formGroup[control.form_name] = [control.value || ''];
      });
      this.dynamicForm = this.formBuilder.group(formGroup);
    });
  }

  onSubmit() {
    this.submittedValues = this.dynamicForm.value;
    console.log(this.dynamicForm.value);
  }
}
