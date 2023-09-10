import { CounterSchema } from 'entitie/Counter';
import { UserSchema } from 'entitie/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema
}
