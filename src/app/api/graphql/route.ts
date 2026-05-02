import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { prisma } from "../../../../prisma/db";
import typeDefs from "@/graphql/schema";
import resolvers from "@/graphql/resolvers";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
  context: () => ({
    prisma,
  }),
});

export const GET = yoga;
export const POST = yoga;