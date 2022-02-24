const devBaseURL = "https://api.liyunfu.xyz";
const proBaseURL = "https://api.liyunfu.xyz";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000