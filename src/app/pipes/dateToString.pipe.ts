import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
// Pipe que transforma uma data em em string no formato DD/MM/AAAA
@Pipe({ name: 'dateToString' })
export class DateToStringPipe implements PipeTransform {

    transform(data: Date, utc): string {
        if (data) {
            let date = new Date(data);
            if (utc) {
                return moment.utc(date).format('DD/MM/YYYY');
            }
            return moment(date).format('DD/MM/YYYY');
        } else {
            return '';
        }
    }
}
