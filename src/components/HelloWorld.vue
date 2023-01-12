<script setup>
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="group bg-transparent ">
      <div
        class=" flex border-t border-solid bg-white text-center text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 md:rounded-b-lg">
        <div
          class="flex flex-1 items-center justify-center cursor-pointer leading-10 hover:text-current md:hover:text-blue-500 active:!text-gray-400">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mr-1"
            height="16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z">
            </path>
          </svg>点赞
        </div>
        <div
          class="flex flex-1 items-center justify-center cursor-pointer leading-10 hover:text-current md:hover:text-blue-500 active:!text-gray-400">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mr-1"
            height="16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z">
            </path>
          </svg>收藏
        </div>
        <div
          class="flex flex-1 items-center justify-center cursor-pointer leading-10 hover:text-current md:hover:text-blue-500 active:!text-gray-400">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" class="mr-1" height="16"
            width="16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z">
            </path>
          </svg>分享
        </div><a target="_blank"
          class="flex flex-1 items-center justify-center cursor-pointer leading-10 hover:text-current md:hover:text-blue-500 active:!text-gray-400"
          rel="noopener noreferrer" href="https://github.com/illacloud/illa-builder"><svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mr-1" height="16" width="16"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z">
            </path>
          </svg>访问</a>
      </div>
      <div class="hidden group-hover:block w-72 absolute left-[46.25rem]">
        <!-- 不同的屏幕 需要不同的  定位值 所以可以考虑 使用 媒体查询 优化下 比如  sm:left-5 lg:left-20 -->
        <div className='z-10 mt-2 w-72 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'
          role='menu'>
          <div className='p-2'>
            <a href='#'
              className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              role='menuitem'>
              View on Storefront
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
