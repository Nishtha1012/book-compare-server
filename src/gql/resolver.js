const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const key = process.env.API_KEY;
console.log(key);
const resolvers = {
  Query: {
    searchBooks: async (parent, { term, start, filter }) => {
      console.log(term, start, filter);
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${start}${
            filter ? `&filter=${filter}` : ""
          }&key=${key}`
        );

        console.log(data.items);
        return data.items;
      } catch (error) {
        console.log(error.message);
        throw new Error("failed to search books");
      }
    },
    bookByID: async (parent, { id }) => {
      console.log(id);
      try {
        const result = await Promise.all(
          id.map(async (ids) => {
            const { data } = await axios.get(
              `https://www.googleapis.com/books/v1/volumes/${id}`
            );
            console.log(data, "data ======");
            return data;
          })
        );
        console.log(result, "result-----------------");
        return result;
      } catch (error) {
        console.log(error);
        throw new Error("failed to search books");
      }
    },
  },
};

module.exports = { resolvers };
