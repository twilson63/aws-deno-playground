import { S3Client, ListBucketsCommand } from 'https://deno.land/x/aws_sdk@v3.17.0-2/client-s3/mod.ts'

const _s3 = new S3Client({ region: 'us-east-1' })
const cmd = new ListBucketsCommand()

const buckets = await _s3.send(cmd)

console.log('buckets', buckets)