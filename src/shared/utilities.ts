import { WikiResponse, Profile, Births } from "./types";

export function paginateData(data: Profile[], pageNum: number, pageSize: number) {
    return data.slice((pageNum - 1) * pageSize, pageNum * pageSize);
}
export function birthYearSort(a: Profile,b: Profile) {
  return parseInt(b.birthYear) - parseInt(a.birthYear);
}
export function splitDataIntoPages(data: Profile[], totalPages: number, pageSize: number) {
  let pagedArray = [];
  for(let i = 0; i < totalPages; i++) {
    pagedArray[i] = data.slice(i*pageSize, (i+1)*pageSize);
  }
  return pagedArray;
}

export const processWikiBirthsData = (data: WikiResponse, totalPages: number, pageNum: number) => {
    let mData: Profile[] = data.births.map( (row: Births) => {
      return {
        name: row.text.split(',')[0], 
        title: row.pages[0].description ? row.pages[0].description.split('(')[0] : '', 
        birthYear: row.year, 
        extract: row.pages[0].extract, 
        thumbnail: row.pages[0].thumbnail?.source};
  }, []);
  return splitDataIntoPages(mData.sort(birthYearSort), totalPages, pageNum);
};