import type { User } from "better-auth";

// override the h3 event context type inside of h3 module
// for type safety for our routes
declare module "h3" {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface H3EventContext {
    user?: Omit<User, "id"> & {
      id: number;
    };
  }
}

export default {};
