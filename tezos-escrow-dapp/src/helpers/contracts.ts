import { TEZOS_API_URL, TOURNABOND_URL } from "../app-config";

export const getTournamentContracts = async (address: string) => {
    const response = await fetch(`${TOURNABOND_URL}/api/constracts/?owner_address=${address}`);

    return response;
}