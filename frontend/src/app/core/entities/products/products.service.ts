import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStorageService } from '../../app-storage/app-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient,
    private appStorage: AppStorageService
  ) { }

  public getProducts() {
    const teacher = this.appStorage.getTeacher();
    return this.httpClient.get(`${environment.api}/products/${teacher.id}`);
  }
}
