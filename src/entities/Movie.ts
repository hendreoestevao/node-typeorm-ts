import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Room } from "./Room"

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number

  @Column({ type: "varchar" })
  title!: string

  @Column({ type: "varchar" })
  url!: string

  @ManyToOne(() => Room, (room) => room.movies)
  @JoinColumn({ name: "room_id" })
  room!: Room
}
