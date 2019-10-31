import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase1UpdateDecimal1572482069942 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "price" decimal(5,2) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "price" decimal(18,0) NOT NULL`, undefined);
    }

}
