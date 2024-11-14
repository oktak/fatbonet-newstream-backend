export default ({env}) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: `https://s3.`+env('S3_REGION')+`.amazonaws.com/` + env('S3_BUCKET'),
        s3Options: {
          credentials: {
            accessKeyId: env('S3_ACCESS_KEY_ID'),
            secretAccessKey: env('S3_ACCESS_SECRET'),
          },
          region: env('S3_REGION'),
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('S3_BUCKET'),
          },  
        },
      },
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
});
