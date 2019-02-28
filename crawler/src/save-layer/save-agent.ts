import * as fs from 'fs';

export class SaveAgent {
  saveObjectToFile(data: any, fileName: string): void {
    let finalJson = JSON.stringify(data);
    fs.writeFile(fileName, finalJson, 'utf8', err => {console.error(err)});
  }
}
