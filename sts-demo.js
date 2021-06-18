import { ApiFactory } from 'https://deno.land/x/aws_api/client/mod.ts';
const factory = new ApiFactory();

import { STS } from 'https://deno.land/x/aws_api/services/sts/mod.ts';
const sts = new STS(factory);


const identity = await sts.getCallerIdentity();

import { S3 } from 'https://deno.land/x/aws_api/services/s3/mod.ts'
const s3 = new S3(factory)
/*
const b = await s3.createBucket({
  Bucket: 'hello-hyper'
})
*/
/*
const doc = await s3.putObject({
  Bucket: 'hello-hyper',
  Body: JSON.stringify({
    hello: 'world'
  }),
  Key: 'foo.json'
})
*/
const doc = await s3.getObject({
  Bucket: 'hello-hyper',
  Key: 'foo.json'
})



console.log('created doc', new TextDecoder().decode(doc.Body))

console.log('You are', identity.UserId, 'in account', identity.Account);
console.log('Identity ARN:', identity.Arn);


