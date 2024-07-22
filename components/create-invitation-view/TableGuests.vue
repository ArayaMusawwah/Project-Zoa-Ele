<script setup lang="ts"></script>

<template>
  <div class="mt-7 overflow-x-auto rounded-md">
    <table class="table-pin-rows table">
      <!-- head -->
      <thead>
        <tr class="!bg-gray-400 text-center text-black">
          <th>
            <label>
              <input type="checkbox" className="checkbox checkbox-info bg-zinc-300" />
            </label>
          </th>
          <th>Nama</th>
          <th>Link</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <!-- row 1 -->
        <tr class="bg-white text-center text-black">
          <th>
            <label>
              <input type="checkbox" class="checkbox checkbox-info bg-zinc-300" />
            </label>
          </th>
          <td :class="{ capitalize: true }">Ganto</td>
          <td><a href="https://zoa-ele.com" target="_blank">https://zoa-ele.com</a></td>
          <td class="flex justify-center">
            <div class="join">
              <button class="btn btn-primary join-item">edit</button>
              <button class="btn btn-success join-item">Share</button>
              <button class="btn btn-error join-item">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
