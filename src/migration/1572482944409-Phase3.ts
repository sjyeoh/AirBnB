import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase31572482944409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "locality" ("id" int NOT NULL IDENTITY(1,1), "locality" nvarchar(255) NOT NULL, CONSTRAINT "PK_c0445d9b8706ac2d31be91c9b6b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" int NOT NULL IDENTITY(1,1), "booking_id" nvarchar(255) NOT NULL, "user_id" nvarchar(255) NOT NULL, "ratings" nvarchar(255) NOT NULL, "title" nvarchar(255) NOT NULL, "comments" nvarchar(255) NOT NULL, "updated_at" date NOT NULL, "created_at" date NOT NULL, "property_id" int, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "property_locality" ("locality_id" int NOT NULL, "property_id" int NOT NULL, CONSTRAINT "PK_3cf7d6fc5df0202a21061f0de2e" PRIMARY KEY ("locality_id", "property_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_5e0a85276d5873eae3c10cde10" ON "property_locality" ("locality_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_eba048eb827ffd0407f2bf9baa" ON "property_locality" ("property_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_2b1e1cd13649e9315b28b7f2f0c" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_locality" ADD CONSTRAINT "FK_5e0a85276d5873eae3c10cde100" FOREIGN KEY ("locality_id") REFERENCES "locality"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_locality" ADD CONSTRAINT "FK_eba048eb827ffd0407f2bf9baa0" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property_locality" DROP CONSTRAINT "FK_eba048eb827ffd0407f2bf9baa0"`, undefined);
        await queryRunner.query(`ALTER TABLE "property_locality" DROP CONSTRAINT "FK_5e0a85276d5873eae3c10cde100"`, undefined);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_2b1e1cd13649e9315b28b7f2f0c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_eba048eb827ffd0407f2bf9baa" ON "property_locality"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_5e0a85276d5873eae3c10cde10" ON "property_locality"`, undefined);
        await queryRunner.query(`DROP TABLE "property_locality"`, undefined);
        await queryRunner.query(`DROP TABLE "reviews"`, undefined);
        await queryRunner.query(`DROP TABLE "locality"`, undefined);
    }

}
