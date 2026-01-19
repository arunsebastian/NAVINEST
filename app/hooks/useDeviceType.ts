import { useWindowDimensions } from 'react-native';

export const useDeviceType = () => {
    const { width } = useWindowDimensions();
    // Arbitrary breakpoint: often 768 is used to differentiate phone from tablet
    const isTablet = width >= 768;
    const deviceType = isTablet ? 'tablet' : 'phone';

    return { deviceType, isTablet };
};
