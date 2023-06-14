module.exports = {
    apps : [
        {
          name: "pcv",
          script: "./lib",
          env: {
              "PORT": 8081,
              "NODE_ENV": "development"
          },
          env_test: {
              "PORT": 8081,
              "NODE_ENV": "test",
          },
          env_production: {
              "PORT": 8081,
              "NODE_ENV": "production",
          }
        }
    ]
  }