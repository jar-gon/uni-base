const isDev = process.env.NODE_ENV === 'development';
export const BaseUrl = isDev ? 'https://bg-fat.zmlearn.com/' : 'https://bg-shield.zmlearn.com/';
