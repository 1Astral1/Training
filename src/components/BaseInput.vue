<template>
    <div class="">
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event?.target?.value)"
            class="w-[240px] p-[16px] border border-solid disabled:border-[#76787D] rounded-[10px] placeholder:text-[14px] font-normal"
            placeholder="Введите Id или имя "
            type="text"
        />
    </div>
</template>
<script setup lang="ts">
    const props = defineProps<{
        modelValue: any;
    }>();
    defineEmits(['update:modelValue']);
</script>
