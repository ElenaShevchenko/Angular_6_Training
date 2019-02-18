import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingStatus = new BehaviorSubject<boolean>(false);

  get loading(): Boolean {
    return this.loadingStatus.getValue();
  }

  set loading(value) {
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}
