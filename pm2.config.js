module.exports = {
    apps: [
      {
        name: "test_app", 
        script: "npm",
        args: "run start", 
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: "1G", // Restart if memory exceeds 1GB
        env: {
          NODE_ENV: "production",
          PORT: 8081,
        },
      },
    ],
  };
  