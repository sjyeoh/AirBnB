import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase21572482552379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "payment" ("id" int NOT NULL IDENTITY(1,1), "status" nvarchar(255) NOT NULL, "amount" decimal(5,2) NOT NULL, "booking_id" int, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tags" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "property_tag" ("tag_id" int NOT NULL, "property_id" int NOT NULL, CONSTRAINT "PK_c84ae679330226be47fd0c60e62" PRIMARY KEY ("tag_id", "property_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ee90c13a747758229ea07dbdc6" ON "property_tag" ("tag_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_b284e4492a952d01442e9d7ad6" ON "property_tag" ("property_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_cee78453638dfaf440f1aa63c26" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_tag" ADD CONSTRAINT "FK_ee90c13a747758229ea07dbdc62" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_tag" ADD CONSTRAINT "FK_b284e4492a952d01442e9d7ad66" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property_tag" DROP CONSTRAINT "FK_b284e4492a952d01442e9d7ad66"`, undefined);
        await queryRunner.query(`ALTER TABLE "property_tag" DROP CONSTRAINT "FK_ee90c13a747758229ea07dbdc62"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_cee78453638dfaf440f1aa63c26"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_b284e4492a952d01442e9d7ad6" ON "property_tag"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ee90c13a747758229ea07dbdc6" ON "property_tag"`, undefined);
        await queryRunner.query(`DROP TABLE "property_tag"`, undefined);
        await queryRunner.query(`DROP TABLE "tags"`, undefined);
        await queryRunner.query(`DROP TABLE "payment"`, undefined);
    }

}
