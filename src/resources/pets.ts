// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Pets extends APIResource {
  /**
   * Creates a new pet in the store. Duplicates are allowed
   */
  create(body: PetCreateParams, options?: RequestOptions): APIPromise<Pet> {
    return this._client.post('/pets', { body, ...options });
  }

  /**
   * Returns a pet based on a single ID
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Pet> {
    return this._client.get(path`/pets/${id}`, options);
  }

  /**
   * Returns all pets from the system that the user has access to Nam sed condimentum
   * est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean
   * at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum
   * nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius
   * justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis
   * ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam.
   * Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna
   * volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent
   * enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor,
   * consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis
   * libero sed lacinia.
   *
   * Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu
   * condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In
   * a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh.
   * Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula
   * libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec
   * scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis
   * felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem,
   * molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia
   * mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit
   * eu, euismod sapien.
   */
  list(query: PetListParams | null | undefined = {}, options?: RequestOptions): APIPromise<PetListResponse> {
    return this._client.get('/pets', { query, ...options });
  }

  /**
   * deletes a single pet based on the ID supplied
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/pets/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface NewPet {
  /**
   * Name of the pet
   */
  name: string;

  /**
   * Type of the pet
   */
  tag?: string;
}

export interface Pet extends NewPet {
  /**
   * Unique id of the pet
   */
  id: number;
}

export type PetListResponse = Array<Pet>;

export interface PetCreateParams {
  /**
   * Name of the pet
   */
  name: string;

  /**
   * Type of the pet
   */
  tag?: string;
}

export interface PetListParams {
  /**
   * maximum number of results to return
   */
  limit?: number;

  /**
   * tags to filter by
   */
  tags?: Array<string>;
}

export declare namespace Pets {
  export {
    type NewPet as NewPet,
    type Pet as Pet,
    type PetListResponse as PetListResponse,
    type PetCreateParams as PetCreateParams,
    type PetListParams as PetListParams,
  };
}
