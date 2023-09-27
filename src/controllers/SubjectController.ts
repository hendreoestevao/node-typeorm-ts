import { subjectRepository } from "@/repositories/subjectRepository"
import { Request, Response } from "express"

export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ error: "Nome Obrigatório" })
    }
    try {
      const newSubject = subjectRepository.create({ name })

      await subjectRepository.save(newSubject)

      return res.status(201).json(newSubject)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: "Erro ao criar" })
    }
  }
}
