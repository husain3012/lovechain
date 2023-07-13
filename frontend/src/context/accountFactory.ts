import { createContext } from 'react';
import { AccountFactory } from '../typechain-types';

export const accountFactoryCtx = createContext<null|AccountFactory>(null);
