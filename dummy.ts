import { MinecraftQuery, MinecraftServerListPing } from '.';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout as any
});

async function prompt(message: string) {
  return new Promise<string>((resolve, reject) => {
    rl.question(message, (input) => resolve(input));
  });
}


async function main() {
  const addr = await prompt('Enter minecraft server IP address (in the format `<ip_address>:<port>` (Port part is optional) ) :');
  const [ip, portStr = '25565'] = addr.split(':');
  const res = await MinecraftServerListPing.ping(4, ip, Number(portStr));
  console.log(res);
}

main();