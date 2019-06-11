import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn } from "typeorm";

@Entity()
export class Articals{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  context: string;

  @Column()
  author: string;

  @CreateDateColumn()
  createTime: Date;

  @Column('simple-array')
  common: object[];

  @Column('simple-array')
  tags: string[];
}