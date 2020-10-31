module.exports = {

    rocket: async (_source, { id }, { dataSources }) => {
        return dataSources.spaceX.getRocket(id);
    },

    rockets: async (_source, args, { dataSources }) => {
        return dataSources.spaceX.getAllRockets();
    },

};
