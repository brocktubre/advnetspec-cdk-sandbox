FROM alpine

ENV AWS_ACCESS_KEY_ID $AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY $AWS_SECRET_ACCESS_KEY
ENV AWS_DEFAULT_REGION $AWS_DEFAULT_REGION

RUN apk --no-cache update && \
    apk --no-cache add py3-setuptools && \
    apk --no-cache add ca-certificates groff less git && \
    apk --no-cache add nodejs-current && \
    apk --no-cache add --update npm && \
    #pip3 --no-cache-dir install awscli==${AWS_CLI_VERSION} && \
    pip3 --no-cache-dir install awscli && \
    npm install -g aws-cdk && \
    rm -rf /var/cache/apk/*

RUN aws --version && node --version && cdk --version

RUN mkdir /home/data
RUN mkdir /home/data/advnetspec-cdk-sandbox
WORKDIR /home/data/advnetspec-cdk-sandbox

RUN cdk init --language typescript