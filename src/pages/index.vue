<template>
    <div class="container">
        <div class="font-semibold text-[16px]">
            <div>
                <span>Поиск сотрудников</span>
                <div class="mt-5">
                    <BaseInput v-model="valueModel" />
                </div>
            </div>
            <div>
                <span class="text-[#333] font-Montserrat font-semibold mt-5 block">
                    Результаты
                </span>
                <span
                    class="text-[#76787D] font-normal mt-[10px] block"
                    v-if="false"
                >
                    Нет результатов
                </span>
                <span
                    class="text-[#76787D] font-normal mt-[10px] block"
                    v-if="true"
                >
                    Начте поиск
                </span>
                <template v-if="true">
                    <template v-if="users?.length">
                        <div
                            v-for="user in filterUsers"
                            class="text-[#76787D] font-normal mt-[10px]"
                        >
                            <div class="flex">
                                <img
                                    class="mr-[15px]"
                                    src="../assets/img/img1.jpg"
                                    alt=""
                                />
                                <div>
                                    <span class="block"> {{ user.name }} </span>
                                    <span class="block"> Sincere@april.biz</span>
                                </div>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
        </div>
        <div></div>
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
