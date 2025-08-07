import { gql } from "@apollo/client";

export const OPTIMIZE_POST = gql`
  mutation OptimizePost($input: OptimizePostInput!) {
    optimizePost(input: $input) {
      platform
      optimizedText
      hashtags
      characterCount
    }
  }
`;

