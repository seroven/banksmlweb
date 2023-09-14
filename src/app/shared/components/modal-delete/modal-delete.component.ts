import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDeleteService } from '../../services/modal-delete.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit{

  @Input() visible:boolean = false;
  loading:boolean = false;

  @Output() onCancel = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  constructor(private modalDeleteService:ModalDeleteService){}

  ngOnInit(): void {
    this.modalDeleteService.loading$.subscribe(value => {
      this.loading = value;
    })
  }

  confirm(){

  }

}
