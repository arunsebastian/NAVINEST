import AppConfig
 from "@/constants/config";
export const validateAppKey = async (
    key: string,
    options?: RequestInit
): Promise<Record<string, boolean>> => {
    // This function simulates an API call to validate the app key.
    // In a real application, you would replace this with an actual API call.
    /*
    const status = await new Promise(
        (resolve: (value: Record<string, boolean>) => void) => {
            // Simulate an API call with a timeout
            setTimeout(() => {
                if (key && String(key).length === 4) {
                    resolve({ success: true });
                } else {
                    resolve({ success: false });
                }
            }, 1000);
        }
    );
    */
    if(key){
        const url = `${AppConfig.propertyDataPath}/${key}`;
        console.log("url",url)
        return await new Promise(
            async(resolve: (value: Record<string, boolean>) => void) => {
                const data = await (await fetch(url) as any).json()
                if(!data?.error && data?.id?.toLowerCase() === String(key).toLowerCase()){
                    resolve({ success: true });
                }else{
                    resolve({success:false})
                }
            }
        );
    }
    return Promise.resolve({success:false})
};
