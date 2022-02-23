<template>
    <div>
        <!--Breadcrumb-->
        <div v-if="this.items.length" class="mb-4">
            <div class="content-manage-breadcrumb">
                <ul>
                    <li v-for="item in items">
                        {{ item }}
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import FolderSystem from "../../apis/FolderSystem";
export default {
    data() {
        return {
            items: []
        };
    },

    mounted() {
        this.$root.$on("breadcrumb", data => {
            let id = data.id;
            FolderSystem.getBreadcrumb(id)
                .then(response => {
                    this.items = [];
                    for (let i = 0; i < response.data.length; i++) {
                        this.items.push(response.data[i].name);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }
};
</script>
