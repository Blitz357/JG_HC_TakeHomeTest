import {PersonAddress} from "./person-address";

export interface Person {
    Id: number;
    FirstName: string;
    LastName: string;
    DateOfBirth: string;
    Interests: string;
    PersonAddress: PersonAddress;
}
