import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { prisma } from "../../../../prisma/db";
import typeDefs from "@/graphql/schema";
import resolvers from "@/graphql/resolvers";

const yoga = createYoga({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: () => ({ prisma }),
});

export async function GET(req: Request) {
  return yoga.fetch(req);
}

export async function POST(req: Request) {
  return yoga.fetch(req);
}