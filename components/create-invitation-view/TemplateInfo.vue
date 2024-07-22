<script setup lang="ts"></script>

<template>
  <div class="mt-4 flex justify-start">
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-circle btn-ghost btn-sm text-primary">
        <svg
          tabindex="0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-4 w-4 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div
        tabindex="0"
        class="card compact dropdown-content bg-base-100 rounded-box z-[100] w-64 shadow"
      >
        <div tabindex="0" class="card-body">
          <div class="space-y-2 text-xs md:text-sm">
            <p>
              Fitur ini digunakan untuk membuat template pesan yang dinamis untuk langsung di-share.
            </p>
            <p>
              jika anda ingin menyisipkan link yang dinamis di tengah-tengah pesan, maka tambahkan
              kata &quot; <span class="text-red-500">&#123;link_tamu&#125;</span> &quot;
              <span class="font-light italic">(tanpa tanda kutip).</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
