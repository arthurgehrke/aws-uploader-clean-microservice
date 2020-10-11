export class FileController {
  handle (httpRequest: any): any {
    const requiredFields = ['fileName', 'fileType']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400
        }
      }
    }

    return {}
  }
}
