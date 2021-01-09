import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ng-form-array',
  templateUrl: './ng-form-array.component.html',
  styleUrls: ['./ng-form-array.component.css']
})
export class NgFormArrayComponent implements OnInit {
  orderForm:FormGroup;
  rows = [
    {
      id: 1,
      item: 'Laptop',
      unit: 'set',
      qty: 1,
      price: 1000,
      subTotal: 1000
    },
    {
      id: 2,
      item: 'Printer',
      unit: 'set',
      qty: 1,
      price: 1500,
      subTotal: 1500
    }
  ];
  constructor(private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      orders: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.rows.forEach(row => {
      this.orders.push(this.newOrderForm(row));
    });
    this.changeListenerByForm();
  }

  get orders(): FormArray {
    return this.orderForm.get('orders') as FormArray;
  }

  newOrderForm(row: any): FormGroup {
    return this.formBuilder.group({
      id: [row.id, Validators.required],
      item: [row.item],
      qty: [row.qty, [Validators.required, Validators.min(1)]],
      price: [row.price, [Validators.required, Validators.min(1000)]],
      subTotal: [row.subTotal, [Validators.required]]
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.orderForm.value));
  }

  changeListenerByForm() {
    //this.orderForm.valueChanges.subscribe(selectedValue => {
      //this.orderForm.get('subTotal')?.setValue(parseInt(selectedValue.qty) * parseInt(selectedValue.price), {onlySelf:true, emitEvent:false});
      //console.log('form value changed');
      //console.log(selectedValue);
    //});
    this.orderForm.get('orders')?.valueChanges.subscribe(
      data => {
        console.log('orders changed :');
        console.log(data);
        console.log(this.orders.length);
        for(let i=0; i<this.orders.length; i++) {
          this.orders.at(i).get('subTotal')?.setValue(parseInt(data[i].qty) * parseInt(data[i].price), {onlySelf:true, emitEvent:false});
        }
      }
    )
  }

}
