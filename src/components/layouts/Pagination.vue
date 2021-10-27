<template>
    <div class="kt-section__content kt-section__content--border">
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item">
                    <a @click="gotoPage(pagination.pageable.pageNumber - 1)" v-if="!pagination.first" class="page-link">Previous</a>
                </li>
                <li @click="gotoPage(0)" v-if="pagination.pageable.pageNumber > 0" class="page-item"><a class="page-link">1</a></li>
                <li @click="gotoPage(1)" v-if="pagination.pageable.pageNumber > 1" class="page-item"><a class="page-link">2</a></li>
                <li @click="gotoPage(2)" v-if="pagination.pageable.pageNumber > 2" class="page-item"><a class="page-link">3</a></li>
                <li v-if="pagination.pageable.pageNumber > 3" class="page-item"><a class="page-link">...</a></li>

                <li @click="gotoPage(pagination.pageable.pageNumber - 1)" v-if="pagination.pageable.pageNumber - 1 > 2" class="page-item"><a class="page-link">{{ pagination.pageable.pageNumber }}</a></li>
                <li class="page-item active">
                    <a class="page-link">{{ pagination.pageable.pageNumber + 1 }} <span class="sr-only">(current)</span></a>
                </li>
                <li @click="gotoPage(pagination.pageable.pageNumber + 1)" v-if="pagination.pageable.pageNumber + 1 < pagination.totalPages - 3" class="page-item"><a class="page-link">{{ pagination.pageable.pageNumber + 2 }}</a></li>
                <li v-if="pagination.pageable.pageNumber + 1 < pagination.totalPages - 3" class="page-item"><a class="page-link">...</a></li>

                <li @click="gotoPage(pagination.totalPages - 3)" v-if="pagination.pageable.pageNumber + 1 < pagination.totalPages - 2" class="page-item"><a class="page-link">{{ pagination.totalPages - 2 }}</a></li>
                <li @click="gotoPage(pagination.totalPages - 2)" v-if="pagination.pageable.pageNumber + 1 < pagination.totalPages - 1 " class="page-item"><a class="page-link">{{ pagination.totalPages - 1 }}</a></li>
                <li @click="gotoPage(pagination.totalPages - 1)" v-if="pagination.pageable.pageNumber + 1 < pagination.totalPages " class="page-item"><a class="page-link">{{ pagination.totalPages }}</a></li>
                <li class="page-item">
                    <a @click="gotoPage(pagination.pageable.pageNumber + 1)" v-if="!pagination.last" class="page-link">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ['pagination', 'gotoPage'],
    /*
    pagination: {
          totalElements: 0
          numberOfElements:
          size: 0
          empty: true/false
          totalPages: 0
          last: false,
          first: true,
          pageable: {
            pageNumber: 0,
            pageSize: 0
          }
    }
    */
}
</script>

<style scoped>

</style>