<script lang="ts" setup>
import { getUsers, updateUser, deleteUser } from "@/api/user.api";
import { onMounted, ref } from "vue";

const usersList = ref([] as any);
const params = ref({
  page: 1,
  limit: 10,
});
const getUsersList = async () => {
  const res = await getUsers(params.value);
  usersList.value = res.map((user: any) => {
    return {
      ...user,
      ...user.profile,
    };
  });
};

const handleEdit = async (id: number) => {
  const res = await updateUser(id, usersList.value.find((user: any) => user.id === id));
  console.log(res);
  await getUsersList();
};

const handleDelete = async (id: number) => {
  const res = await deleteUser(id);
  console.log(res);
  await getUsersList();
};


onMounted(async () => {
  await getUsersList();
});

</script>

<template>
  <div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">gender</th>
          <th scope="col">address</th>
          <th scope="col">description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usersList" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.description }}</td>
          <td class="d-flex justify-content-center" >
            <button class="btn btn-primary mr-2 btn-sm" @click="handleEdit(user.id)">Edit</button>
            <button class="btn btn-danger mr-2 btn-sm" @click="handleDelete(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>
