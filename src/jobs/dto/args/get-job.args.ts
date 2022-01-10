import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetJobArgs {
    @Field()
    jobId: string;
}

