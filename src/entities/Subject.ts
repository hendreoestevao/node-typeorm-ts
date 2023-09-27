import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Room } from "./Room"

@Entity("subjects")
export class Subject {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number

  @Column({ type: "varchar" })
  name!: string

  @ManyToMany(() => Room, (room) => room.subjects)
  @JoinTable({
    name: "room_subject",
    joinColumn: {
      name: "room_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "subject_id",
      referencedColumnName: "id",
    },
  })
  rooms!: Room[]
}
