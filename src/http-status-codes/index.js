import { HttpCodes20x } from "./20x.js"

export const HttpCodesIndex = [
  {
    httpCode: '20x',
    description: 'Codes related with successful requests',
    details: HttpCodes20x,
  },
  {
    httpCode: '30x',
  description: 'Codes related with redirection responses',
  details: [],
},
  {
    httpCode: '40x',
    description: 'Codes related wrong requests or validations',
    details: [],
  },
  {
    httpCode: '50x',
    description: 'Codes related with server errors and downsides',
    details: [],
  },
]

