import { ObjectType, Field, Int, ID, registerEnumType } from 'type-graphql';
import TagGQLType from "@/graphql/types/tag";
import withId from './mixin';

export enum DomainState {
    NONE = "NONE",
    ENABLED = "ENABLED",
    DISABLED = "DISABLED",
}

registerEnumType(DomainState, {
    name: "DomainState",
    description: "Identity Domain State",
});



@ObjectType()
export class Domain extends withId(TagGQLType){
    @Field(() => ID)
    domain_id: string;

    @Field()
    name: string;

    @Field(type=>DomainState)
    state: DomainState;
}

