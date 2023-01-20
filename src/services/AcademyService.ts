import { ICreateAcademyDTO } from '../dtos/create-academy-dto';
import { IPatchAcademyDTO } from '../dtos/patch-academy-dto';
import { IUpdateAcademyDTO } from '../dtos/update-academy-dto';
import { AcademyRepository } from '../repositories/AcademyRepository';

const repository = new AcademyRepository();

export class AcademyService {
  async create({ name, age }: ICreateAcademyDTO) {
    return repository.create({ name, age });
  }

  async findAll() {
    return repository.findAll();
  }

  async findById(id: string) {
    const academy = await repository.findById(id);
    if (!academy) throw new Error('Academy not found!');

    return academy;
  }

  async update({ id, name, age }: IUpdateAcademyDTO) {
    const academy = await repository.findById(id);
    if (!academy) throw new Error('Academy not found!');

    return repository.update({ id, name, age });
  }

  async patch({ id, prop, value }: IPatchAcademyDTO) {
    const academy = await repository.findById(id);

    if (!academy) throw new Error('Academy not found!');

    const props = ['name', 'age'];

    const isValidProp = props.find((p) => p === prop);

    if (!isValidProp) throw new Error('Invalid property!');

    return repository.patch({ id, prop, value });
  }

  async delete(id: string) {
    const academy = await repository.findById(id);
    if (!academy) throw new Error('Academy not found!');

    return repository.delete(id);
  }
}
