import InvalidUuidError from "../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";
import { validate as uuidValidate, validate } from "uuid";

// function spyValidateMethod() {
//   return jest.spyOn(UniqueEntityId.prototype as any, "validate"); //ele verifica se teve algum movimento em algum prototype da classe que passamos
// }

//OUTRO TIPO DE LIMPAGEM DE MOCK
// beforeEach(() => {
//   jest.clearAllMocks();
// });

const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");

// OUTRO TIPO DE LIMPAGEM DE MOCK
// beforeEach(() => validateSpy.mockClear());

describe("UniqueEntityId Unit Tests", () => {
  it("should throw new error when uuid is invalid", () => {
    // const validateSpy = spyValidateMethod();
    expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUuidError()); //testando se vai retornar o erro que criamos
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    // const validateSpy = spyValidateMethod();
    const uuid = "4b068bdd-db29-4a96-958a-76c799c17670";
    const vo = new UniqueEntityId(uuid);
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    // const validateSpy = spyValidateMethod();
    const vo = new UniqueEntityId();
    expect(uuidValidate(vo.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
