<template>
  <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#task">
      <i class="fas fa-pen"></i>
    </button>
    <div class="modal fade" id="task" tabindex="-1" role="dialog" aria-labelledby="Task-Description" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="TaskTitle">Task Name</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-10">
                  task title
                </div>
                <div class="col-1">
                  <i class="fas fa-pen"></i>
                </div>
                <div class="col-1">
                  <i class="fas fa-minus-circle"></i>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="row">
                    <div class="col-10">comment</div>
                    <div class="col-2"><i class="fas fa-minus-circle"></i></div>
                  </div>
                  <div class="row">
                    <div class="col-10 align-self-end">add</div>
                    <div class="col-2 align-self-end"><i class="fas fa-plus-circle"></i></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-12">
                      description of task
                    </div>
                  </div>
                  <div class="row justify-content-center m-3">
                    <div class="col-4">
                      sloth img
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Template"
  }
</script>

<style scoped>

</style>