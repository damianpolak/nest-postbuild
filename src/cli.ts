import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const cliArgsParse = () => {
  return yargs(hideBin(process.argv))
    .usage('$ nest-postbuild-cli [options]')
    .example(
      '$ nest-postbuild-cli --json-src-dir=<path> --json-dst-dir=<path> --files-to-copy=<files>',
      ''
    )
    .options({
      j: { type: 'string', alias: 'json-src-dir', default: '.' },
      k: { type: 'string', alias: 'json-dst-dir', default: './dist' },
      c: { type: 'string', alias: 'zip-dir', default: './dist' },
      d: { type: 'string', alias: 'zip-out', default: './dist-zip' },
      f: { type: 'array', alias: 'files-src-to-copy', default: [] },
      g: { type: 'array', alias: 'files-dst-to-copy', default: [] },
    })
    .parse();
};