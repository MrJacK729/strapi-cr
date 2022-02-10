module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '06f6b4aab36da450f54655c57cbf5a53'),
  },
});
