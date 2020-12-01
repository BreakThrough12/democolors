<template>
<div  style="text-align:center" >
    <h1>Listado de Colores</h1>
    <div>

        <input v-model="filterName"  placeholder="Ingrese el nombre del color que desea buscar"></input>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th><h3>Nombre</h3></th>
                <th><h3>Codigo</h3></th>
                <th><h3>Color</h3></th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="(color, index) in filterByName" :key="index">
            <td>{{ color[0] }}</td>
            <td>{{ color[1] }}</td>
            <td>
                <div :style="{ 'background-color': color[1],  'width': '100%',  'min-height': '20px','display':'inline-block' }"></div>
            </td>
        </tr>
        </tbody>

    </table>
</div>
</template>

<script>

import {mapActions, mapState} from 'vuex';
export default {
    name: "Color",
    data() {
        return {
            
            filterName: "",
            
        };
    },
    mounted() {
        
        this.loadColors();
    },
    methods:{
        ...mapActions(['loadColors'])
    },
    computed: {
        ...mapState(['colors']),
        filterByName() {
            return this.colors.filter((color) => {
                return color[0].includes(this.filterName);
            });
        },
    },
};
</script>



