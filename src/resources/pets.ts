// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Pets extends APIResource {
  /**
   * Returns a pet based on a single ID
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Pet> {
    return this._client.get(path`/pets/${id}`, options);
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

export declare namespace Pets {
  export { type NewPet as NewPet, type Pet as Pet };
}
