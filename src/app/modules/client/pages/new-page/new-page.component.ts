import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateInputClass } from 'src/app/shared/classes/validate-input.class';
import { ErrorInputMessage } from 'src/app/shared/constants/error-input-messages';
import { ClientService } from '../../services/client.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { RegexValidator } from 'src/app/shared/constants/regex-validator';
import { ClientReadInterface } from '../../interfaces/client-read.interface';
import { EnumTypeMessage } from 'src/app/shared/constants/type-message.enum';
import { DistrictsData } from 'src/app/shared/data/districts.data';
import { ProvincesData } from 'src/app/shared/data/provinces.data';
import { PlacesCountryService } from 'src/app/shared/services/places-country.service';
import { DistrictInterface, ProvinceInterface } from 'src/app/shared/interfaces/place-country.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent {
  @Input() visible:boolean = false;
  @Output() onHidePage = new EventEmitter<void>();

  public formClient:FormGroup;
  public validateFormClient:ValidateInputClass;
  public errorInputMessage = ErrorInputMessage;

  public loadSubmit:boolean = false;

  public districts:DistrictInterface[] = this.placeCountryService.getDistrict();
  public provinces:ProvinceInterface[] = [];


  constructor(private clientService:ClientService, private placeCountryService:PlacesCountryService, private formBuilder:FormBuilder, private toastService:ToastService){
    this.formClient = this.formBuilder.group({
      dni: new FormControl(null, [Validators.required, Validators.pattern(RegexValidator.dni), Validators.maxLength(8)]),
      names: new FormControl(null, [Validators.required, Validators.pattern(RegexValidator.onlyLetters), Validators.maxLength(100)]),
      lastnames: new FormControl(null, [Validators.required, Validators.pattern(RegexValidator.onlyLetters), Validators.maxLength(100)]),
      address: new FormControl(null, [Validators.required, Validators.maxLength(150)]),
      district: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      province: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(RegexValidator.onlyNumbers), Validators.maxLength(11)]),
      email_address: new FormControl(null, [Validators.required, Validators.pattern(RegexValidator.email), Validators.maxLength(150)]),
      state: new FormControl(true)
    })
    this.validateFormClient = new ValidateInputClass(this.formClient);  
  }

  submit(){
    if (this.formClient.invalid) return;
  
    const client = this.formClient.value;
    this.loadSubmit = true;
    this.clientService.saveClient({
      ...client,
      district: client.district.name,
      province: client.province.name
    }).subscribe({
      next: response  => {
        this.loadSubmit = false;
        this.toastService.showMessage(EnumTypeMessage.CREATE_SUCCESS);
        this.clientService.clientList$.next();
        this.reset();
        this.closeModal();
      },
      error:  err => {
        this.loadSubmit = false;
        this.toastService.showMessage(EnumTypeMessage.OPERATION_ERROR);
      }
    })
  }

  reset(){
    this.formClient.reset();
  }

  closeModal(){
    this.onHidePage.emit();
  }

  cancel(){
    this.reset();
    this.closeModal();
  }

  onChangeDistrict(){
    const district = this.formClient.get('district')?.value;
    if (district != null){
      this.provinces = this.placeCountryService.getProvinceByDistrict(district.id_ubigeo);      
    }
  }

}
