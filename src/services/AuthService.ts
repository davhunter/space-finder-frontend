import { User, UserAttribute } from '../model/Model';

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === 'user' && password === '1234') {
      return {
        userName: userName,
        email: 'some@email.com',
      };
    } else {
      return undefined;
    }
  }

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];

    result.push({
      Name: 'description',
      Value: 'best user ever',
    });
    result.push({
      Name: 'job',
      Value: 'dev',
    });
    result.push({
      Name: 'age',
      Value: '47',
    });
    result.push({
      Name: 'experience',
      Value: '25+ years',
    });

    return result;
  }
}
