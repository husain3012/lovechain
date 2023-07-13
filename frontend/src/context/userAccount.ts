import { createContext } from 'react';
import { Account } from '../typechain-types';

export const userAccountCtx = createContext<null|Account>(null);
