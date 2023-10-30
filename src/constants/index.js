export const inProduction = process.env.NODE_ENV === "production" ? true : false;

export const GATSBY_API_ENDPOINT = process.env.GATSBY_API_ENDPOINT;

export const poValidationKeys = {
  production: {
    userId: '551AREA25237',
    userPassword: '112CL24WL100',
    protocol: 'https',
  },
  staging: {
    userId: '387AREA24253',
    userPassword: '712BS28OS488',
    protocol: 'https',
  },
  development: {
    userId: '450AREA20025',
    userPassword: '488HU04XZ468',
    protocol: 'http',
  },
};