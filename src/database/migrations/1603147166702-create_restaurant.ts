import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createRestaurant1603147166702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'restaurants', 
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
                name: 'name',
                type: 'varchar'
              },
              {
                name: 'address',
                type: 'varchar',
              },
              {
                name: 'week_opens_at',
                type: 'varchar'
              },
              {
                name: 'week_closes_at',
                type: 'varchar'
              },
              {
                name: 'weekend_opens_at',
                type: 'varchar'
              },
              {
                name: 'weekend_closes_at',
                type: 'varchar'
              }
            ]
          }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('restaurants')
    }

}
