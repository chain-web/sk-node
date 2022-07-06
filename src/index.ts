import { createNode, DidJson } from 'sk-chain';
import { resolve } from 'path';
import { homedir } from 'os';
import BigNumber from 'bignumber.js';
import { accounts } from './accounts';
const account: DidJson = {
  id: '12D3KooWL8qb3L8nKPjDtQmJU8jge5Qspsn6YLSBei9MsbTjJDr8',
  privKey:
    'CAESQOu2tC61UCD6utWQpWndm8HSVWxi88P7cP29ydv6iHaOmVBTlFvfBXPpjZJeFi/Ult6HUOcVd9OOkyDg5TDibdk=',
};

const run = async () => {
  const node = await createNode({
    networkid: 'testnet',
    account: accounts[2],
    storePath: { main: resolve(homedir(), './.skdb') },
  });
  // setTimeout(() => {
  //   node.transaction({
  //     amount: new BigNumber(10),
  //     recipient: '12D3KooWL1NF6fdTJ9cucEuwvuX8V8KtpJZZnUE4umdLBuK15eUZ',
  //     payload: '',
  //   });
  // }, 30000);
};

run();
