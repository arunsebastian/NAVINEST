const AppConfig = {
    minKeyCodeLength: 3,
    propertyDataPath:
        process.env.NODE_ENV === 'production'
            ? 'https://navinest.co.nz/customer-config'
            : 'http://localhost:3000/customer-config',
    homeScreenTransitionDelay: 2.4 //in seconds
};
export default AppConfig;
