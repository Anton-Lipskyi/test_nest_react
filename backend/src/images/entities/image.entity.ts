import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    albumId: number;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    url: string;

    @Column({ nullable: true })
    thumbnailUrl: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdDate: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedDate: Date;
}
