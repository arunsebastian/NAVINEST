const AppConfig = {
    minKeyCodeLength: 3,
    propertyDataPath:
        process.env.NODE_ENV === 'production'
            ? 'https://navinest.co.nz/data'
            : 'http://localhost:3000/data',
    homeScreenTransitionDelay: 2.4 //in seconds
};
export default AppConfig;
