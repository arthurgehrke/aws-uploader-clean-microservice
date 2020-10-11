import { HttpRequest, HttpResponse } from '../../protocols/http'
import { badRequest } from '../../helpers/http-helper'

export class FileController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['fileName', 'fileType']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(`Missing required field: ${field}`)
      }
    }

    return {
      statusCode: 200,
      body: 'ok'
    }
  }
}
