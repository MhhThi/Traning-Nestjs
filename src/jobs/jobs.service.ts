import { Injectable} from "@nestjs/common";
import { Job } from "./models/job";

@Injectable()
export class JobsService{
    private jobs: Job[] = [];

    public createJob(): Job {

    }

    public updateJob(): Job {
        
    }

    public getJob(): Job {
        
    }

    public getJobs(): Job[] {
        
    }

    public DeleteJob(): Job {
        
    }
}