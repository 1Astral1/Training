<template>
    <div class="shadow-sm border border-2px px-[21px] py-7 z-10 h-[575px]">
        <div class="font-semibold text-[14px]">
            <div class="ml-[21px] w-full flex">
                <img
                    class="w-[424px] h-[286px] object-cover mr-[61px] border border-1px"
                    src="@/assets/img/Dark-Souls-Artorias-of-the-Abyss_Nekro-Bandai-1600.jpg"
                    alt=""
                />
                <div class="text-[#76787D] font-Montserrat w-[440px]">
                    <span class="text-[16px] text-[#000] font-semibold">{{ user?.name }}</span>
                    <div class="mt-[10px]">
                        <span class="text-[16px] text-[#333] font-semibold mr-2">email:</span>
                        <span class="font-normal">{{ user?.email }}</span>
                    </div>
                    <div class="mt-[10px]">
                        <span class="text-[16px] text-[#333] font-semibold mr-2">phone:</span>
                        <span class="font-normal">{{ user?.phone }}</span>
                    </div>

                    <div class="mt-[20px]">
                        <span class="text-[#333] font-semibold block mb-[25px] text-[16px]"
                            >О себе</span
                        >
                        <span class="text-sm leading-[16px] font-normal block">{{
                            user?.text
                        }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const route = useRoute();

    const { data: user } = await useFetch(
        `https://jsonplaceholder.typicode.com/users/${route.params.id}`,
        {
            transform: (
                data: any
            ): {
                id: string;
                name: string;
                phone: string;
                email: string;
                text: string;
            } | null => {
                return {
                    id: data.id,
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    text: data.company.catchPhrase,
                };
            },
        }
    );
</script>
