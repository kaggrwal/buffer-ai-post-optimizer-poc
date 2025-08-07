import { gql } from "apollo-server-express";

export const typeDefs = gql`
  enum Platform {
    INSTAGRAM
    LINKEDIN
    TWITTER
    FACEBOOK
    TIKTOK
    YOUTUBE
    REDDIT
    PINTEREST
    SNAPCHAT
       
  }

  input OptimizePostInput {
    baseText: String!
    platforms: [Platform!]!
    tone: String
  }

  type OptimizedPost {
    platform: Platform!
    optimizedText: String!
    hashtags: [String!]!
    characterCount: Int!
  }

  type Mutation {
    optimizePost(input: OptimizePostInput!): [OptimizedPost!]!
  }

  type Query {
    _empty: String
  }
`;
