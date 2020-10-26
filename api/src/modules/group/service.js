const groupQueries = require("./query");
const { v4: uuidv4 } = require('uuid'); 

const groupService = {
    creatGroup: async (body) => {
        const id = uuidv4();
        body.id = id; 
        return groupQueries.creatGroup(body)
                .then((result) => ({status: 201, message: "Creation Success"}))
                .catch((err) => ({status: 400, message: err}));
    },
    readGroup: async () => {
        return groupQueries.readGroup()
                .then((result) => ({status: 200, data: result}))
                .catch((err) => ({status: 400, message: err}));
    },
    readOneGroup: async (id) => {
        return groupQueries.readOneGroup(id)
                .then((result) => ({status: 200, data: result}))
                .catch((err) => ({status: 400, message: err}));
    },
    updateGroup: async (id, body) => {
        return groupQueries.updateGroup(id, body)
                .then((result) => ({status: 201, message: "Update Success"}))
                .catch((err) => ({status: 400, message: err}));
    },
    deleteGroup: async (id) => {
        return groupQueries.deleteGroup(id)
                .then((result) => ({status: 200, message: "Deleted"}))
                .catch((err) => ({status: 400, message: err}));
    }
}; 

module.exports = groupService;