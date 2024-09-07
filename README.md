# Fatbonet Newstream

News stream

## Development

```bash
npx create-strapi-app@4.4.7 --use-npm --no-run fatbonet-newstream-backend
npx create-strapi-app@latest --use-npm --no-run  fatbonet-newstream-backend
cd fatbonet-newstream-backend
npm install knex@0.21.1 objection@2.1.3 pg@8.0.3 @strapi/provider-upload-aws-s3 strapi-health-plugin
```

### Troubleshoot

- Knex: Timeout acquiring a connection. The pool is probably full. Are you missing a .transacting(trx) call?

**Solution**

```
"knex": "^0.21.1",
"objection": "^2.1.3",
"pg": "^8.0.3"
```

[Reference](https://stackoverflow.com/questions/40435315/knex-timeout-acquiring-a-connection-the-pool-is-probably-full-are-you-missing)
