import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalDeleteService {

  loading$ = new Subject<boolean>();
  visibleModal$ = new Subject<void>();

  constructor() { }

  onLoading(){ this.loading$.next(true) }

  offLoading(){ this.loading$.next(false) }

}
