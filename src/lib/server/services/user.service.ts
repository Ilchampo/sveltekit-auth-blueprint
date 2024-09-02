import type {
  IUser,
  IUserCreateArgs,
  IUserUpdateArgs,
} from '$lib/interfaces/user.interface';
import type { ICustomResponse } from '$lib/interfaces/customResponse.interface';

import handleError from '$lib/helpers/handleError';
import prisma from '$lib/server/database';
import httpCodes from '$lib/constants/httpCodes';

export const createUserService = async (
  args: IUserCreateArgs,
): Promise<ICustomResponse<IUser | undefined>> => {
  const { firstName, lastName } = args;

  try {
    const user = await prisma.tblUser.create({
      data: {
        firstName,
        lastName,
      },
    });

    return { code: httpCodes.CREATED, data: user, error: undefined };
  } catch (error) {
    return handleError(error);
  }
};

export const getUserByIdService = async (
  id: string,
): Promise<ICustomResponse<IUser | undefined>> => {
  try {
    const user = await prisma.tblUser.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return {
        code: httpCodes.NOT_FOUND,
        data: undefined,
        error: 'User not found',
      };
    }
    return { code: httpCodes.OK, data: user, error: undefined };
  } catch (error) {
    return handleError(error);
  }
};

export const updateUserByIdService = async (
  args: IUserUpdateArgs,
): Promise<ICustomResponse<IUser | undefined>> => {
  const { id, firstName, lastName } = args;

  try {
    const user = await prisma.tblUser.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
      },
    });

    return { code: httpCodes.OK, data: user, error: undefined };
  } catch (error) {
    return handleError(error);
  }
};

export const deleteUserByIdService = async (
  id: string,
): Promise<ICustomResponse<IUser | undefined>> => {
  try {
    const user = await prisma.tblUser.delete({
      where: {
        id,
      },
    });

    return { code: httpCodes.OK, data: user, error: undefined };
  } catch (error) {
    return handleError(error);
  }
};
