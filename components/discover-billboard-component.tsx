import getBillboard from "@/app/api/get-billboard";

import Billboard from "@/components/billboard";

export const revalidate = 0

export const Billboards = async () => {

    const billboard = await getBillboard("504c15ff-f16c-4cac-a75a-3f893449cd95");

    return (
        <div>
            <Billboard data={billboard} />
        </div>
    );
}

