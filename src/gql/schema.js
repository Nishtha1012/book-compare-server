const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    searchBooks(term: String!, start: Int!, filter: String): [book]
    bookByID(id: [String]!): [book]
  }

  type book {
    id: String
    volumeInfo: volInfo
    saleInfo: saleinfo
  }

  type saleinfo {
    saleability: String
    isEbook: Boolean
    listPrice: price
  }

  type price {
    amount: Float
    currencyCode: String
  }
  type volInfo {
    title: String
    authors: [String]
    publisher: String
    description: String
    imageLinks: imgLink
    publishedDate: String
    pageCount: Int
    categories: [String]
    averageRating: Float
    contentVersion: String
    language: String
  }

  type imgLink {
    thumbnail: String
  }
`;

module.exports = { typeDefs };
