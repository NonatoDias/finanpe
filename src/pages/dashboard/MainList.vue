<template>
    <q-list highlight class="bg-white">
        <q-list-header style="text-align: center">Últimos lançamentos de {{currentMonth}}</q-list-header>
        <q-item-separator />
        <template v-for="(expense, item) in expenses">
            <q-item :separator="true" :key="item" :class="expense.id ? '': 'offline-item'">
                <q-item-side :color="expense.id ? 'light-blue' : 'text-blue-grey-5'" :icon="expense.category_icon || 'attach_money'" />
                <q-item-main :label="expense.value + ''" :sublabel="expense.description"/>
                <q-item-tile>{{ expense.date | formatDate}}</q-item-tile>
            </q-item>
        </template>
    </q-list>
</template>

<script>
export default {
    props: ['expenses'],
    data () {
        return {
            months: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Septembro', 'Outubro', 'Novembro', 'Dezembro'],
            currentMonth: ''
        }
    },
    mounted () {
        this.currentMonth = this.months[new Date().getMonth()]
    },
    filters: {
        formatDate: function (value) {
            if (!value) return ''
            value = value.toString()
            return new Date(value).toLocaleString().split(',')[0].replace(/\./g, '/')
        }
    }
}
</script>

<style>
.offline-item{
    opacity: 0.6;
}
</style>
