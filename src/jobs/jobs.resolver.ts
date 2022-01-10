import { Resolver, Query } from "@nestjs/graphql";
import { JobsService } from "./jobs.service";
import { Job } from "./models/job";


@Resolver(() => Job)
export class JobsResolver {
    constructor(private readonly jobsService: JobsService) {}
    
    @Query(() => Job, { jobName: 'Tester', nullable: true })
    getJob(): Job {
        return this.jobsService.getJob();
    }
}