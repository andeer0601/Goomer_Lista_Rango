import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProducts1603156380082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'products', 
            columns: [
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
              },
              {
                name: 'restaurant_id',
                type: 'integer'
              },
              {
                name: 'name',
                type: 'varchar'
              },
              {
                name: 'price',
                type: 'decimal',
                scale: 15,
                precision: 2
              },
              {
                name: 'category',
                type: 'varchar'
              },
              {
                name: 'sale',
                type: 'boolean',
                default: false
              },
              {
                name: 'sale_description',
                type: 'varchar'
              },
              {
                name: 'sale_price',
                type: 'decimal',
                scale: 15,
                precision: 2
              },
              {
                name: 'sale_dow',
                type: 'integer',
                isArray: true
              },
              {
                name: 'sale_schedule_start',
                type: 'varchar'
              },
              {
                name: 'sale_schedule_end',
                type: 'varchar'
              },
            ]
          }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
