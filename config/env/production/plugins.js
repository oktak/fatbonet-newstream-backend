// File: config/env/production/plugins.js

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('S3_ACCESS_KEY_ID'),
          secretAccessKey: env('S3_ACCESS_SECRET'),
        },
        region: env('S3_REGION'),
        baseUrl: `https://s3.`+env('S3_REGION')+`.amazonaws.com/` + env('S3_BUCKET'),
        params: {
          ACL: env('AWS_ACL', 'private'),
          signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
          Bucket: env('S3_BUCKET'),
        },
      },
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
})
