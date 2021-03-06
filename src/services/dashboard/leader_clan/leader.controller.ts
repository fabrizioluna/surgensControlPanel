import { Request, Response } from 'express';
import { statusResolve } from '../../../utils/status';
import { hasRank } from '../utilities/checkRank.utilites';
import { changeStatus, getObjectives } from './leader.dao';
import { ReciveObjectives } from './leader.types';

export const getSpecificObjectives = async (req: Request, res: Response) => {
  if (req.query.invoice) return res.sendStatus(statusResolve.badRequest);

  if (
    !hasRank(req.body.member_role).leaderClan()
  )
  await getObjectives(req.query.invoice as string)
    .then((e: ReciveObjectives) =>
      res.status(statusResolve.success).json({
        status: true,
        data: e,
      })
    )
    .catch((error: string) => {
      res.status(statusResolve.success).json({
        status: false,
        error,
      });
    });
};

export const changeSpecificStatus = async (req: Request, res: Response) => {
  if (req.body.id) return res.sendStatus(statusResolve.badRequest);
  if (req.body.task_status) return res.sendStatus(statusResolve.badRequest);

  if (
    !hasRank(req.body.member_role).leaderClan()
  )
  await changeStatus(req.body.id as string, req.body.task_status as boolean)
    .then((message: string) =>
      res.status(statusResolve.success).json({
        status: true,
        message,
      })
    )
    .catch((error: string) => {
      res.status(statusResolve.success).json({
        status: false,
        error,
      });
    });
};
