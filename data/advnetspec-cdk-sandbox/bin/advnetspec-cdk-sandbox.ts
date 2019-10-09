#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AdvnetspecCdkSandboxStack } from '../lib/advnetspec-cdk-sandbox-stack';

const app = new cdk.App();
new AdvnetspecCdkSandboxStack(app, 'AdvnetspecCdkSandboxStack');
