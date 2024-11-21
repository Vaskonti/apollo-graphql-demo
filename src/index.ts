import { ApolloServer} from '@apollo/server';
import {startStandaoloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql

	type Book {
		title: String
		author: String
	}
	
`;
