const ConfigModule = {
  config: {},
  setConfig(config) {
    if (typeof config === 'object') {
      this.config = config;
    }
  },
  putConfig(config) {
    if (typeof config === 'object') {
      this.config = {...this.config, ...config};
    }
  },
  resetConfig() {
    this.config = {};
  },
  reportConfig() {
    console.log('Config:', this.config);
  }
};

ConfigModule.setConfig({name: 'New Config'});
ConfigModule.reportConfig();
ConfigModule.putConfig({value: 'configuration'});
ConfigModule.reportConfig();
