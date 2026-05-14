const typeDefs = `#graphql

    type csab2025 {
        sno: ID!
        round: Int
        institute: String
        academicProgramName: String
        quota: String
        seatType: String
        gender: String
        openingRank: String
        closingRank: String
        priority: Int
        type: String
        new_priority: Int
    }

    input RankFilterInput {
        instituteNames: [String!]
        minOpeningRank: Int!
        # maxOpeningRank: Int!
        # minclosingRank: Int!
        maxclosingRank: Int!
        rounds: [Int!]!
        academicProgramName: [String!]!
        quota: [String!]!
        seatType: [String!]!
        gender: [String!]
        type: [String!]
        priorityOption: Int!
    }

    type csab2025Res {
        sno: ID!
        rounds: [Int!]
        institute: String
        academicProgramName: String
        quota: String
        seatType: String
        gender: String
        openingRank: String
        closingRank: String
        priority: Int
        type: String
        new_priority: Int
  }
    scalar JSON
    
    type Query {
        csab2025ByRank(filter: RankFilterInput!): [csab2025Res!]!
    }
    
`;
export default typeDefs;
