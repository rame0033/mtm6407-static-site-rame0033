<template>
    <div class="card">
      <img :src="image" class="card-img-top" :alt="alt" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }}</p>
        <a :href="link" class="btn btn-primary">Learn More</a>
      </div>
    </div>
</template>
  
  <script>
  export default {
    props: {
      image: { type: String, required: true },
      alt: { type: String, default: 'Card Image' },
      title: { type: String, required: true },
      text: { type: String, required: true },
      link: { type: String, required: true }
    }
  };
  </script>
  
  <style>
  .card {
    margin-bottom: 20px;
  }
  </style>