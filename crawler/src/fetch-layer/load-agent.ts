import sources from '../assets/sources.json';

export class LoadAgent {
  public static async loadSourceUrls(): Promise<Array<any>> {
    return await Promise.all(sources.map(source => Promise.resolve(source.url)));
  }
}
