import { Request, Response, Router } from 'express';
import { AcademyController } from './../controllers/AcademyController';

const academyRoutes = Router();

const academyController = new AcademyController();

academyRoutes.get('/:id', async (req: Request, res: Response) =>
  academyController.findAcademyById(req, res)
);

academyRoutes.get('/', async (req: Request, res: Response) =>
  academyController.findAllAcademys(req, res)
);

academyRoutes.post('/', async (req: Request, res: Response) =>
  academyController.createAcademy(req, res)
);

academyRoutes.put('/:id', (req: Request, res: Response) =>
  academyController.updateAcademy(req, res)
);

academyRoutes.patch('/:id', (req: Request, res: Response) =>
  academyController.patchAcademy(req, res)
);

academyRoutes.delete('/:id', (req: Request, res: Response) =>
  academyController.deleteAcademy(req, res)
);

export { academyRoutes };
