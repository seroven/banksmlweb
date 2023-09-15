import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateInputClass } from 'src/app/shared/classes/validate-input.class';
import { ErrorInputMessage } from 'src/app/shared/constants/error-input-messages';
import { ClientService } from '../../services/client.service';
import { PlacesCountryService } from 'src/app/shared/services/places-country.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { RegexValidator } from 'src/app/shared/constants/regex-validator';
import { DistrictInterface, ProvinceInterface } from 'src/app/shared/interfaces/place-country.interface';
import { EnumTypeMessage } from 'src/app/shared/constants/type-message.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnDestroy, OnInit{

  public subscription:Subscription|null;

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
      id: new FormControl(null),
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
    this.subscription = null;
  }

  ngOnInit(): void {
      this.subscription = this.clientService.selectedClient$.subscribe(client => {
        this.formClient.patchValue({
          id: client.id,
          dni: client.dni,
          names: client.names,
          lastnames: client.lastnames,
          address: client.address,
          district: this.placeCountryService.getDistrictByName(client.district),
          province: this.placeCountryService.getProvinceByName(client.province),
          phone: client.phone,
          email_address: client.email_address,
          state: client.state
        })
        this.onChangeDistrict();
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  submit(){
    if (this.formClient.invalid) return;
  
    const client = this.formClient.value;
    console.log({
      ...client,
      district: client.district.name,
      province: client.province.name
    });
    this.loadSubmit = true;
    this.clientService.editClient({
      ...client,
      district: client.district.name,
      province: client.province.name,
      state: true
    }).subscribe({
      next: response  => {
        this.loadSubmit = false;
        this.toastService.showMessage(EnumTypeMessage.EDIT_SUCCESS);
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
