import { gql } from "@apollo/client";

export const GET_CSAB_2025 = gql`
  query Csab2025($filter: RankFilterInput!) {
    csab2025ByRank(filter: $filter) {
        sno
        institute
        academicProgramName
        quota
        seatType
        gender
        openingRank
        closingRank
        priority
        rounds
        type
    }
  }
`;