import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt } from 'graphql';
import { UUIDType } from '../types/uuid.js';
import { MemberTypes } from '../types/member-type.js';

export const createProfileInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'CreateProfileInput',
    fields: () => ({
        userId: { type: UUIDType },
        memberTypeId: { type: MemberTypes },
        isMale: { type: GraphQLBoolean },
        yearOfBirth: { type: GraphQLInt },
    }),
});

export const changeProfileInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'ChangeProfileInput',
    fields: () => ({
        isMale: { type: GraphQLBoolean },
    }),
});