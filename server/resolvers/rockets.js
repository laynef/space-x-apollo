module.exports = {

    rocket: async (_source, { rocketId }, { dataSources }) => {
        return dataSources.spaceX.getRocket(rocketId);
    },

    rockets: async (_source, args, { dataSources }) => {
        return dataSources.spaceX.getAllRockets();
    },

};
