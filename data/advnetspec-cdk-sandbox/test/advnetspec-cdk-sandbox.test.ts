import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import AdvnetspecCdkSandbox = require('../lib/advnetspec-cdk-sandbox-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AdvnetspecCdkSandbox.AdvnetspecCdkSandboxStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});