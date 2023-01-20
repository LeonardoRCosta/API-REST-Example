import { Request, Response } from 'express';
import { z } from 'zod';
import { AcademyService } from '../services/AcademyService';

const academyService = new AcademyService();

export class AcademyController {
  async createAcademy(req: Request, res: Response) {
    try {
      const createAcademyBody = z.object({ name: z.string(), age: z.string() });

      const { name, age } = createAcademyBody.parse(req.body);

      const created = await academyService.create({ name, age });

      return res.status(201).json(created);
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  }

  async findAllAcademys(req: Request, res: Response) {
    try {
      const academys = await academyService.findAll();

      return res.status(201).json(academys);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAcademyById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const academy = await academyService.findById(id);

      return res.status(200).json(academy);
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  }

  async updateAcademy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const updateAcademyBody = z.object({
        name: z.string(),
        age: z.string(),
      });

      const { name, age } = updateAcademyBody.parse(req.body);

      const updated = await academyService.update({ id, name, age });

      return res.status(200).json(updated);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async patchAcademy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const patchedAcademy = z.object({
        prop: z.string(),
        value: z.string(),
      });

      const { prop, value } = patchedAcademy.parse(req.body);

      const patched = await academyService.patch({ id, prop, value });
      return res.status(200).json(patched);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async deleteAcademy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await academyService.delete(id);

      return res.status(204).send();
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  }
}
