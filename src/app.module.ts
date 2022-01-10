import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    JobsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
