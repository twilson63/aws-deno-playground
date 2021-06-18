// create bucket
import sdk from 'https://jspm.dev/aws-sdk';

const s3 = new sdk.S3({
  credentials: {
    accessKeyId: Deno.env.get('AWS_ACCESS_KEY_ID'),
    secretAccessKey: Deno.env.get('AWS_SECRET_ACCESS_KEY')
  }
})

s3.listBuckets((err, results) => {
  if (err) { return console.log(err) }
  console.log(results)
})