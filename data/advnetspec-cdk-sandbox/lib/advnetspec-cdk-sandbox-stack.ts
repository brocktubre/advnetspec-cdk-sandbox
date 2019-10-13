import cdk = require('@aws-cdk/core');
import { SubnetType, Vpc } from '@aws-cdk/aws-ec2';

export class AdvnetspecCdkSandboxStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const customVpc = new Vpc(this, 'Test-VPC-From-CDK', {
          cidr: "10.0.0.0/16",
    });
  }

  // private createVPC(scope: cdk.Construct) {
  //   const vpc = new Vpc(scope, 'Test-VPC-From-CDK', {
  //     cidr: "10.0.0.0/16",
      
  //   });
    
  //   // // Iterate the private subnets
  //   // const selection = vpc.selectSubnets({
  //   //     subnetType: SubnetType.PRIVATE
  //   // });
    
  //   // for (const subnet of selection.subnets) {
  //   //     // ...
  //   // }
  // }
}
