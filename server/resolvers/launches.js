module.exports = {

    launch: async (_source, { launchId }, { dataSources }) => {
        return dataSources.spaceX.getLaunch(launchId);
    },

    launches: async (_source, args, { dataSources }) => {
        return dataSources.spaceX.getAllLaunches();
    },

};
