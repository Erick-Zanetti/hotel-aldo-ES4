import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApartamentoService {
  
  constructor(private http: HttpClient) {}
  
  getAll(): object[] {
    return JSON.parse(localStorage.getItem('apartamentos') || '[]');
  }
  
  getById(id): object {
    const all = this.getAll();
    return all.find((c) => c['id'] === id);
  }
  
  delete(id): object[] {
    const all = this.getAll();
    let index = all.findIndex((c) => c['id'] === id);
    if (index >= 0) {
      all.splice(index, 1);
    }
    localStorage.setItem('apartamentos', JSON.stringify(all));
    return all;
  }
  
  salvar(id, data: object): object {
    let all = this.getAll();
    if (id) {
      let index = all.findIndex((c) => c['id'] === id);
      if (index >= 0) {
        all[index] = data;
      }
    } else {
      all.sort((a, b) => a['id'] > b['id'] ? 1 : a['id'] < b['id'] ? -1 : 0);
      let maxCod = 1;
      if (all.length) {
        maxCod = all[all.length - 1]['id'] + 1;
      }
      data['id'] = maxCod;
      all.push(data);
    }
    localStorage.setItem('apartamentos', JSON.stringify(all));
    return data;
  }
}
