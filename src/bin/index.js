#!/usr/bin/env node

import { program } from 'commander';
import { version } from '../../package.json';

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv)