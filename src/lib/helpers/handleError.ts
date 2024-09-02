import type { ICustomResponse } from '$lib/interfaces/customResponse.interface';
import httpCodes from '$lib/constants/httpCodes';

const handleError = (error: unknown): ICustomResponse<undefined> => {
  if (error instanceof SyntaxError) {
    return {
      code: httpCodes.INTERNAL_SERVER_ERROR,
      data: undefined,
      error: error.message,
    };
  }

  return {
    code: httpCodes.INTERNAL_SERVER_ERROR,
    data: undefined,
    error: String(error),
  };
};

export default handleError;
