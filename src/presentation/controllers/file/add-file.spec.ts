import { FileController } from './add-file'

const makeSut = (): any => {
  const sut = new FileController()

  return {
    sut
  }
}

describe('File Controller', () => {
  test('Should return 404 if no file name is provided', () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        fileType: 'any_type'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
