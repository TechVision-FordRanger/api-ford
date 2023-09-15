import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'panel_symbols' })
export class PanelSymbols {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'light_name' })
  lightName: string;

  @Column('text', { nullable: true, name: 'description' })
  description: string;

  @Column('text', { nullable: true, name: 'img_url' })
  imgUrl: string;
}
