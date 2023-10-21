import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  header = {
    headers: new HttpHeaders()
      .set('Authorization', `Bearer 5NNMnLU5JRrpTHrP9RXKWEdKzI8B3QiwUkay1K7c`)
      .set('have_opt', '0')
      .set('field_type', 'text')
      .set('is_mandatory', '1'),
  };
  constructor(private httpClient: HttpClient) {}

  //or your api
  getMockApiData() {
    return this.httpClient.get(
      'https://653143e04d4c2e3f333cc2b7.mockapi.io/api/v1/benepik'
    );
  }

  //expected response
  // [({
  //   field_type: 'text',
  //   is_mandatory: 'true',
  //   form_name: 'name',
  //   form_label: 'First Name',
  //   placeholder: 'Enter first name',
  //   id: '1',
  // },
  // {
  //   field_type: 'text',
  //   is_mandatory: 'true',
  //   form_name: 'lastname',
  //   form_label: 'Last Name',
  //   placeholder: 'Enter last name',
  //   id: '2',
  // },
  // {
  //   field_type: 'text',
  //   is_mandatory: 'true',
  //   form_name: 'age',
  //   form_label: 'Age',
  //   placeholder: 'Enter age',
  //   id: '3',
  // },
  // {
  //   field_type: 'text',
  //   is_mandatory: 'true',
  //   form_name: 'gender',
  //   form_label: 'Gender',
  //   placeholder: 'Enter gender',
  //   id: '4',
  // },
  // {
  //   field_type: 'text',
  //   is_mandatory: 'true',
  //   form_name: 'profession',
  //   form_label: 'Profession',
  //   placeholder: 'Enter profession',
  //   id: '5',
  // },
  // {
  //   field_type: 'text',
  //   is_mandatory: 'false',
  //   form_name: 'hobby',
  //   form_label: 'Hobby',
  //   placeholder: 'Enter hobby',
  //   id: '6',
  // })];
}
