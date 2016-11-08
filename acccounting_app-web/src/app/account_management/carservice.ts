import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Car} from './car';

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('showcase/resources/data/cars-small.json')
            .map(res => <Car[]> res.json().data);
    }

    getCarsMedium() {
        return this.http.get('showcase/resources/data/cars-medium.json')
            .map(res => <Car[]> res.json().data);
    }

    getCarsLarge() {
        return this.http.get('showcase/resources/data/cars-large.json')
            .map(res => <Car[]> res.json().data);
    }
}