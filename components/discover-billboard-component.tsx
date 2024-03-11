import getBillboard from "@/actions/get-billboard";

import Billboard from "@/components/billboard";


export const Billboards = async () => {

    const billboard = await getBillboard("43a07cf8-11ca-425d-9199-bd2b887c69e6");

    return (
        <div>
            <Billboard data={billboard} />
        </div>
    );
}

