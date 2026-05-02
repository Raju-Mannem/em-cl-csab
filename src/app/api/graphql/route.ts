import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { prisma } from "../../../../prisma/db";
import typeDefs from "@/graphql/schema";
import resolvers from "@/graphql/resolvers";

const yoga = createYoga({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: () => ({ prisma }),
});

export async function GET(request: Request) {
  return yoga.fetch(request);
}

export async function POST(request: Request) {
  return yoga.fetch(request);
}