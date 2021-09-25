import { Space } from '../model/Model';

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];

    result.push({
      location: 'Toronto',
      name: '1 Yonge',
      spaceId: '123',
    });
    result.push({
      location: 'Paris',
      name: '1 Rue de Yonge',
      spaceId: '124',
    });
    result.push({
      location: 'Cleveland',
      name: '1 Cleveland St.',
      spaceId: '125',
    });

    return result;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === '123') {
      return '5555';
    }

    return undefined;
  }
}
