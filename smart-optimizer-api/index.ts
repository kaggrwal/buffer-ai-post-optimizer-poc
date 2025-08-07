import "dotenv/config";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

async function startServer() {
  const app: Express = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
