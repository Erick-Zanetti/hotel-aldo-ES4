import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
// Pipe qeu transforma um data em string no formato HH:mm:ss
@Pipe({ name: 'horaToString' })
export class HoraToStringPipe implements PipeTransform {

    transform(data: Date, utc, newDate): string {
        if (data) {
            let date = new Date(data);
            if (utc) {
                return moment.utc(date).format('HH:mm');
            } else if (newDate) {
                let hora = ' ' + moment.utc(date).format('HH:mm:ss') + 'Z';
                let dia = moment().format('YYYY-MM-DD');
                return moment(dia + hora).format('HH:mm');
            }
            return moment(date).format('HH:mm');
        } else {
            return '';
        }
    }
}
