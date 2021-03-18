import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "EnumToArrayPipe",
})
export class EnumToArrayPipePipe implements PipeTransform {
  transform(value, args: string[]): any {
    let result = [];
    var keys = Object.keys(value);
    var values = Object.values(value);
    for (var i = 0; i < keys.length; i++) {
      result.push({ key: keys[i], value: values[i] });
    }
    return result;
    //or if you want to order the result:
    //return result.sort((a, b) => a.value < b.value ? -1 : 1);
  }
}
