import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ranger_model' })
export class RangerModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'model_year' })
  modelYear: string;

  @Column({ type: 'varchar', length: 255, name: 'model' })
  model: string;

  @Column('decimal', { precision: 5, scale: 2, name: 'consume' })
  consume: number;

  @Column('text', { nullable: true, name: 'ranger_manual' })
  rangerManual: string;
}
