import { findModuleChild } from '../webpack';

/**
 * Contains static methods that are responsible for initializing
 * the library and reporting the initialization state.
 *
 * @note at the moment not all methods are exposed.
 */
export interface LibraryInitializer {
  /**
   * Returns the status whether all the libraries are initialized or not.
   *
   * @note the libraries are initialized when user logs in.
   */
  GetServicesInitialized: () => boolean;

  /**
   * Waits until the services are initialized.
   *
   * @see GetServicesInitialized
   */
  WaitForServicesInitialized: () => Promise<boolean>;
}

export const LibraryInitializer = findModuleChild((mod: { [key: string]: Partial<LibraryInitializer> }): unknown => {
  if (typeof mod !== "object") {
    return undefined;
  }

  for (const prop in mod) {
    if (mod[prop]?.WaitForServicesInitialized) {
      return mod[prop];
    }
  }

  return undefined;
}) as LibraryInitializer;
