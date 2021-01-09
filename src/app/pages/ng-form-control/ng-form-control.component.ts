import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-form-control',
  templateUrl: './ng-form-control.component.html',
  styleUrls: ['./ng-form-control.component.css']
})
export class NgFormControlComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName: [''],
      qty: ['1', [Validators.required, Validators.min(1)]],
      price: ['1000', [Validators.required, Validators.min(1000)]],
      subTotal: ['1000', Validators.required]
    });
  }

  ngOnInit(): void {
    this.changeListenerByForm();
    //this.initOrderForm();
  }

  changeListenerByForm() {
    this.registerForm.valueChanges.subscribe(selectedValue => {
      this.registerForm.get('subTotal')?.setValue(parseInt(selectedValue.qty) * parseInt(selectedValue.price), {onlySelf:true, emitEvent:false});
      console.log('form value changed');
      console.log(selectedValue);
    });
  }

  changeListenerByControl() {
    this.registerForm.get('firstName')?.valueChanges.subscribe(x => {
      console.log('firstName value changed');
      console.log(x);
    });
    this.registerForm.get('lastName')?.valueChanges.subscribe(x => {
      console.log('lastName value changed');
      console.log(x);
    });
  }

  onSubmit() {
    console.log(this.registerForm.valid);
    alert(JSON.stringify(this.registerForm.value));
  }

  onSetDefault() {
    this.registerForm.get('firstName')?.setValue('Asep');
    this.registerForm.get('lastName')?.setValue('Maryana');
  }

  play(file: string): void {
    let audio = new Audio(file);
    audio.load();

    audio.play().then((res)=> {
      console.log('play '+file+' succeed');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async onCall() {
    let files = [
      '../../../assets/sound/noan.wav',
      '../../../assets/sound/a.wav',
      '../../../assets/sound/limabelas.wav',
      '../../../assets/sound/menuju.wav',
      '../../../assets/sound/loket.wav',
      '../../../assets/sound/enam.wav'
    ];
    for(let i=0; i<files.length; i++) {
      this.play(files[i]);
      await this.delay(1500);
    }
  }

}
