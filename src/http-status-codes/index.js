import { HttpCodes20x } from "./20x.js";
import { HttpCodes30x } from "./30x.js";
import { HttpCodes40x } from "./40x.js";

export const HttpCodesIndex = [
  {
    httpCode: '20x',
    description: 'Codes related with successful requests',
    details: HttpCodes20x,
  },
  {
    httpCode: '30x',
    description: 'Codes related with redirection responses',
    details: HttpCodes30x,
  },
  {
    httpCode: '40x',
    description: 'Codes related wrong requests or validations',
    details: HttpCodes40x,
  },
  {
    httpCode: '50x',
    description: 'Codes related with server errors and downsides',
    details: [],
  },
]

