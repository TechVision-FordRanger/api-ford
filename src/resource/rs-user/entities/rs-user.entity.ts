import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ranger_user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, nullable: true, name: 'uuid' })
  uuid: string;

  @Column({ type: 'varchar', length: 255, name: 'first_name' })
  firstName: string;

  @Column({ type: 'varchar', length: 255, unique: true, name: 'email' })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'Celphone' })
  celphone: string;

  @Column({ nullable: true, name: 'id_ranger_model' })
  idRangerModel: number;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'renavam' })
  renavam: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'ranger_color' })
  rangerColor: string;

  @Column({ type: 'varchar', length: 255, name: 'password' })
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    name: 'ranger_nickname',
  })
  rangerNickname: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'ranger_plate' })
  rangerPlate: string;

  @Column({ type: 'varchar', nullable: false, name: 'birth_date' })
  birthDate: string;
}
