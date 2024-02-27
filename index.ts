import { StatusCodes } from 'http-status-codes';
import { Context, StructuredReturn } from 'faas-js-runtime';

export const handle = async (context: Context, body: any): Promise<StructuredReturn> => {
    context.log.info(body);
    return {
        statusCode: StatusCodes.OK,
        body
    }
}