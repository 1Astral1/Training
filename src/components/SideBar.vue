<template>
    <div class="border rounded-[10px_0_0_0] px-5 py-[27px] shadow-md z-0 h-[575px]">
        <span>Поиск сотрудников</span>
        <div class="mt-5">
            <BaseInput v-model="valueModel" />
        </div>
        <div>
            <span class="text-[#333] font-Montserrat font-semibold mt-5 block"> Результаты </span>
            <span
                class="text-[#76787D] font-normal mt-[10px] block"
                v-if="!filterUsers?.length && valueModel"
            >
                Нет результатов
            </span>
            <span
                class="text-[#76787D] font-normal mt-[10px] block"
                v-if="!valueModel"
            >
                Начте поиск
            </span>
            <template v-if="valueModel">
                <template v-if="users?.length">
                    <div
                        v-for="user in filterUsers"
                        class="text-[#76787D] font-normal mt-[10px]"
                    >
                        <NuxtLink :to="`/${user.id}`">
                            <div class="flex">
                                <img
                                    class="mr-[15px] w-[70px] h-[70px] object-cover"
                                    src="@/assets/img/Dark-Souls-Artorias-of-the-Abyss_Nekro-Bandai-1600.jpg"
                                    alt=""
                                />
                                <div>
                                    <span class="block"> {{ user.name }} </span>
                                    <span class="block"> Sincere@april.biz</span>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
    const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users', {
        transform: (
            data: any
        ):
            | {
                  id: string;
                  name: string;
              }[]
            | null => {
            return data.map((user: any) => ({
                id: user.id,
                name: user.name,
            }));
        },
    });
    const filterUsers = computed(() => {
        return valueModel.value
            ? users.value?.filter((o) =>
                  o.name.toLowerCase().includes(valueModel.value?.toLowerCase())
              )
            : users.value;
    });

    const valueModel = ref('');
</script>
