import { getServerSession } from "next-auth";

import { authOptions } from "@/app/utils/AuthOptions";

export default async function getSession () {
    return await getServerSession(authOptions);
}