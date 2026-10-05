import { getStateByName } from "@/data/states";

import { ApiError, fetchJson } from "./http";

/** India Post PIN code lookup (api.postalpincode.in) — verified CORS `*`. */
type PinRaw = Array<{ Status: string; PostOffice: Array<{ District: string; State: string }> | null }>;

export async function lookupPincode(pin: string) {
  if (!/^\d{6}$/.test(pin)) throw new ApiError("invalid");
  const d = await fetchJson<PinRaw>(`https://api.postalpincode.in/pincode/${pin}`);
  const po = d?.[0]?.PostOffice?.[0];
  if (!po) throw new ApiError("empty");
  return { district: po.District, stateCode: getStateByName(po.State)?.code, stateName: po.State };
}
