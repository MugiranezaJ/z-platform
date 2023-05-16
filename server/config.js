const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "your_secret_key",
  jwtExpiration: process.env.JWT_EXPIRATION || "7d",
  db: {
    connectionString:
      process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/zplatform",
  },
};

export default config;
