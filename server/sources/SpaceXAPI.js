const { RESTDataSource } = require('apollo-datasource-rest');

class SpaceXAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.spacexdata.com/v4/'
    }

    async getAllLaunches() {
        return this.get('launches');
    }

    async getLaunch(launchId) {
        return this.get(`launches/${launchId}`);
    }

    async getAllRockets() {
        return this.get('rockets');
    }

    async getRocket(rocketId) {
        return this.get(`rockets/${rocketId}`);
    }
}

module.exports = SpaceXAPI;