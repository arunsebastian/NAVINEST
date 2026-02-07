import AppConfig from '@/config';

const manifestJson = 'manifest.json';

export const validateAppKey = async (
    key: string
): Promise<Record<string, boolean>> => {
    // a temporary timer to enforce a bit delay
    const timer = new Promise((resolve: (reason: void) => void) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
    if (key) {
        const url = `${AppConfig.propertyDataPath}/${key}/${manifestJson}`;
        const status = new Promise(
            async (resolve: (value: Record<string, boolean>) => void) => {
                const data = await ((await fetch(url)) as any).json();
                if (
                    !data?.error &&
                    data?.property?.id?.toLowerCase() ===
                        String(key).toLowerCase()
                ) {
                    resolve({ success: true });
                } else {
                    resolve({ success: false });
                }
            }
        );
        return timer.then(() => status);
    }
    return timer.then(() => Promise.resolve({ success: false }));
};

export const getPropertyData = async (key: string): Promise<any> => {
    if (key) {
        const url = `${AppConfig.propertyDataPath}/${key}/${manifestJson}`;
        return await new Promise(async (resolve: (value: any) => void) => {
            const data = await ((await fetch(url)) as any).json();
            if (
                !data?.error &&
                data?.property?.id?.toLowerCase() === String(key).toLowerCase()
            ) {
                resolve(data);
            } else {
                resolve(null);
            }
        });
    }
    return Promise.resolve(null);
};
