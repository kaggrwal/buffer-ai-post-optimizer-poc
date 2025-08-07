// lib/apolloClient.ts
'use client'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

