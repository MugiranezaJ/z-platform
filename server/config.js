const config = {
  port: process.env.PORT || 3200,
  jwtSecret: process.env.JWT_SECRET || "your_secret_key",
  jwtExpiration: process.env.JWT_EXPIRATION || "7d",
  appBaseUrl: process.env.appBaseUrl || `127.0.0.1:${process.env.PORT || 3200}`,
  db: {
    connectionString:
      process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/zplatform",
  },
};

export default config;
