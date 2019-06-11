import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { ArticalController } from './artical/artical.controller';
import { ArticalService } from './artical/artical.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articals } from './entity/articals.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'artical',
      entities: [Articals],
      synchronize: true,
      logging: false
  }),
  // GraphQLModule.forRoot({}),
  ],
  controllers: [ArticalController],
  providers: [ArticalService],
})
export class AppModule {}
