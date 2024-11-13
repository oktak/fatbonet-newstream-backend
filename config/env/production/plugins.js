// File: config/env/production/plugins.js

module.exports = ({ env }) => ({
  // upload: {
  //   config: {
  //     provider: 'aws-s3',
  //     providerOptions: {
  //       s3Options: {
  //         credentials: {
  //           accessKeyId: env('S3_ACCESS_KEY_ID'),
  //           secretAccessKey: env('S3_ACCESS_SECRET'),
  //         },
  //         region: env('S3_REGION'),
  //         endpoint: 'https://' + env('S3_ENDPOINT'),
  //         params: {
  //           ACL: 'private',
  //           Bucket: env('S3_BUCKET'),
  //         },
  //       },
  //     },
  //   },
  // },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('S3_ACCESS_KEY_ID'),
        secretAccessKey: env('S3_ACCESS_SECRET'),
        region: env('S3_REGION'),
        endpoint: 'https://' + env('S3_ENDPOINT'),
        params: {
          ACL: env('S3_ACL', 'public-read'),
          signedUrlExpires: env('S3_SIGNED_URL_EXPIRES', 15 * 60),
          Bucket: env('S3_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
})
