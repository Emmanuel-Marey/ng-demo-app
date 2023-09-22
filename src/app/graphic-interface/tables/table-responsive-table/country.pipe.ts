import { Pipe, PipeTransform } from "@angular/core";
import { Country } from "./countries";

@Pipe({
  name: "country"
})
export class CountryPipe implements PipeTransform {
  transform(values: Country[], filter: string|undefined): Country[] {
    if (!filter || filter.length == 0) {
      return values;
    }
    if (values.length == 0) {
      return values;
    }

    console.log(`Apply filter: ${filter}`)
    var filteredValues = values.filter(
      (value: Country) => {
        const nameFound = value.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        const capitalFound = value.capital.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        return (nameFound || capitalFound);
      });
    return filteredValues;
  }
}
