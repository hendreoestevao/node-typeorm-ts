import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1695678478448 implements MigrationInterface {
  name = "Default1695678478448"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movies" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "url" character varying NOT NULL, "room_id" integer, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "rooms" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "movies" ADD CONSTRAINT "FK_bba800baf51285ea1c9a54245f6" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movies" DROP CONSTRAINT "FK_bba800baf51285ea1c9a54245f6"`,
    )
    await queryRunner.query(`DROP TABLE "rooms"`)
    await queryRunner.query(`DROP TABLE "movies"`)
  }
}
