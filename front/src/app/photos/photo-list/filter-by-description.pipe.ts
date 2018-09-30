import { Pipe, PipeTransform } from '@angular/core';

import { IPhoto } from '../photo/IPhoto';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {
  transform(photos: IPhoto[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter(photo => {
        return photo.description.toLocaleLowerCase().includes(descriptionQuery);
      });
    } else {
      return photos;
    }
  }
}
