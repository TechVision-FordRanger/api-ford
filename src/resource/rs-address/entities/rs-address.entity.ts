import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'address' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10, name: 'zip_code' })
  zipCode: string;

  @Column({ type: 'varchar', length: 255, name: 'street_name' })
  streetName: string;

  @Column({ nullable: true, name: 'number' })
  number: number;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'complement' })
  complement: string;

  @Column({ type: 'varchar', length: 255, name: 'city' })
  city: string;

  @Column({ type: 'varchar', length: 2, name: 'uf' })
  uf: string;

  @Column({ nullable: true, name: 'id_user' })
  idUser: number;
}
