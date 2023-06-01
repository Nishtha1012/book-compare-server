const axios = require('axios')

const resolvers = {
    Query: {
        searchBooks: async (parent, { term, start }) => {
            console.log(start);
            try {
                const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${start}&key=AIzaSyCQRbymDHOn41KEyY19un3WGOSiqXoomZk`)

                console.log(data.items);
                return data.items
            }
            catch (error) {
                console.log(error);
                throw new Error('failed to search books')
            }
        },
        bookByID: async (parent, { id }) => {
            try {
                const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
                console.log(data);
                return data
            }
            catch (error) {
                console.log(error);
                throw new Error('failed to search books')
            }
        },
        booksByFilter: async (parent, { term, filter, start }) => {

            try {
                const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=${filter}&startIndex=${start}&key=AIzaSyCQRbymDHOn41KEyY19un3WGOSiqXoomZk`)
                console.log("------------------>", data.items);
                return data.items
            }
            catch (error) {
                console.log(error);
                throw new Error("failed to filter books")
            }
        },
        booksByOrder: async (parent, { term, order, start }) => {
            try {
                const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&orderBy=${order}&startIndex=${start}&key=AIzaSyCQRbymDHOn41KEyY19un3WGOSiqXoomZk`)
                console.log(data.items);
                return data.items
            }
            catch (error) {
                console.log(error);
                throw new Error("failed to sort books")
            }
        }
    }
}

module.exports = { resolvers }