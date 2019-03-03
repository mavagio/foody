import sources from '../assets/sources.json';
import measurments from '../assets/measurments.json';

export class LoadAgent {
  public static async loadSourceUrls(): Promise<Array<any>> {
    return await Promise.all(sources.map(source => Promise.resolve(source.url)));
  }

  public static async loadSingularMeasurements(): Promise<Array<any>> {
    return await Promise.all(measurments.map(measurment => Promise.resolve(measurment.name)));
  }

  public static async loadPluralMeasurements(): Promise<Array<any>> {
    const measurmentNames = await this.loadSingularMeasurements();
    let pluralMeasurments = await measurmentNames.reduce((arr, e) => arr.push(e, e+'s') && arr, []);
    return pluralMeasurments;
  }

}
