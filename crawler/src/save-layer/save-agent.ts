import * as fs from 'fs';

export class SaveAgent {
  public static saveObjectToFile(data: any, fileName: string): void {
    let finalJson = JSON.stringify(data);
    fs.writeFile(fileName, finalJson, 'utf8', err => {if(err) console.error(err)});
  }
}
