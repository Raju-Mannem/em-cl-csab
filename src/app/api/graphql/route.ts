import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "../../../../prisma/generated/prisma/client";
import { prisma } from "../../../../prisma/db";
import typeDefs from '@/graphql/schema';
import resolvers from '@/graphql/resolvers';

export type Context = {
	prisma: PrismaClient;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server,{
	context: async () => ({ prisma }),
});

export { handler as GET, handler as POST };