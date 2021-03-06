import { injectable } from 'inversify';
import { GenericRepositoryImp } from './repository';
import { Vehicle } from '../entity/vehicle';
import { getRepository } from 'typeorm';

@injectable()
export class VehicleRepository extends GenericRepositoryImp<Vehicle> {

    constructor() {
        super(getRepository(Vehicle));
    }
}