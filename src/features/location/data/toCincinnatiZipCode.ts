import { CINCINNATI_ZIP_CODES, type CincinnatiZipCode } from "./ZipCodes.data";

export function toCincinnatiZipCode(zip: string): CincinnatiZipCode | null {
  return (CINCINNATI_ZIP_CODES as readonly string[]).includes(zip)
    ? (zip as CincinnatiZipCode)
    : null;
}
