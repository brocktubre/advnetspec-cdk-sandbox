"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const aws_ec2_Vpc_1 = require("@aws-cdk/aws-ec2.Vpc");
class AdvnetspecCdkSandboxStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new aws_ec2_Vpc_1.Vpc(this, 'Test-VPC-From-CDK', {
            cidr: "10.0.0.0/16",
        });
    }
}
exports.AdvnetspecCdkSandboxStack = AdvnetspecCdkSandboxStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2bmV0c3BlYy1jZGstc2FuZGJveC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkdm5ldHNwZWMtY2RrLXNhbmRib3gtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBc0M7QUFDdEMsc0RBQTJDO0FBRTNDLE1BQWEseUJBQTBCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDdEQsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLGlCQUFHLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQzdCLElBQUksRUFBRSxhQUFhO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FpQkY7QUF4QkQsOERBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNkayA9IHJlcXVpcmUoJ0Bhd3MtY2RrL2NvcmUnKTtcbmltcG9ydCB7IFZwYyB9IGZyb20gJ0Bhd3MtY2RrL2F3cy1lYzIuVnBjJztcblxuZXhwb3J0IGNsYXNzIEFkdm5ldHNwZWNDZGtTYW5kYm94U3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgbmV3IFZwYyh0aGlzLCAnVGVzdC1WUEMtRnJvbS1DREsnLCB7XG4gICAgICAgICAgY2lkcjogXCIxMC4wLjAuMC8xNlwiLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBjcmVhdGVWUEMoc2NvcGU6IGNkay5Db25zdHJ1Y3QpIHtcbiAgLy8gICBjb25zdCB2cGMgPSBuZXcgVnBjKHNjb3BlLCAnVGVzdC1WUEMtRnJvbS1DREsnLCB7XG4gIC8vICAgICBjaWRyOiBcIjEwLjAuMC4wLzE2XCIsXG4gICAgICBcbiAgLy8gICB9KTtcbiAgICBcbiAgLy8gICAvLyAvLyBJdGVyYXRlIHRoZSBwcml2YXRlIHN1Ym5ldHNcbiAgLy8gICAvLyBjb25zdCBzZWxlY3Rpb24gPSB2cGMuc2VsZWN0U3VibmV0cyh7XG4gIC8vICAgLy8gICAgIHN1Ym5ldFR5cGU6IFN1Ym5ldFR5cGUuUFJJVkFURVxuICAvLyAgIC8vIH0pO1xuICAgIFxuICAvLyAgIC8vIGZvciAoY29uc3Qgc3VibmV0IG9mIHNlbGVjdGlvbi5zdWJuZXRzKSB7XG4gIC8vICAgLy8gICAgIC8vIC4uLlxuICAvLyAgIC8vIH1cbiAgLy8gfVxufVxuIl19