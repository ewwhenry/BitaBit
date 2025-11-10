import { User } from "@repo/types/DBEntities"; // tu tipo de usuario personalizado

declare global {
  namespace Express {
    export interface Request {
      user?: User; // o el tipo exacto que devuelves en la autenticación
    }
  }
}
