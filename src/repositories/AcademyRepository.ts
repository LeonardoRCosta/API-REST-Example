import { ICreateAcademyDTO } from '../dtos/create-academy-dto';
import { IPatchAcademyDTO } from '../dtos/patch-academy-dto';
import { prisma } from '../lib/prisma';
import { IUpdateAcademyDTO } from './../dtos/update-academy-dto';

export class AcademyRepository {
  async create({ name, age }: ICreateAcademyDTO) {
    return prisma.academy.create({ data: { name, age } });
  }

  async findAll() {
    return prisma.academy.findMany();
  }

  async findById(id: string) {
    return prisma.academy.findUnique({ where: { id } });
  }

  async update({ id, name, age }: IUpdateAcademyDTO) {
    return prisma.academy.update({ where: { id }, data: { name, age } });
  }

  async patch({ id, prop, value }: IPatchAcademyDTO) {
    return prisma.academy.update({ where: { id }, data: { [prop]: value } });
  }

  async delete(id: string) {
    return prisma.academy.delete({ where: { id } });
  }
}
