import type {Schema} from '../../data/resource';

type handlerType = Schema['sayHello']['functionHandler'];

export const handler: handlerType = async (event) => {
  const { name } = event.arguments;
  return `Hello, ${name || 'World'}!`;
};