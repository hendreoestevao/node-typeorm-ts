import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Movie } from "./Movie"
import { Subject } from "./Subject"

@Entity("rooms")
export class Room {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number
  @Column({ type: "varchar" })
  nome!: string
  @Column({ type: "varchar", nullable: true })
  description!: string
  @OneToMany(() => Movie, (movie) => movie.room)
  movies!: Movie[]
  @ManyToMany(() => Subject, (subject) => subject.rooms)
  subjects!: Subject[]
}
