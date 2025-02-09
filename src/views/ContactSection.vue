<script setup lang="ts">
import { reactive } from 'vue';
import emailjs from '@emailjs/browser';
import RevealOnScroll from '@/layout/RevealOnScroll.vue';

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

function handleSubmit(e: Event) {
  e.preventDefault();

  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    )
    .then(() => {
      alert('Mensaje enviado con éxito');
      formData.name = '';
      formData.email = '';
      formData.message = '';
    })
    .catch(() => alert('Ocurrió un error al enviar el mensaje, por favor intenta de nuevo'));
}
</script>

<template>
  <section id="contact" class="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div class="w-full min-w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto">
        <h2
          class="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Contacto
        </h2>
        <form class="space-y-6" @submit="handleSubmit">
          <div class="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              v-model="formData.name"
              class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div class="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              v-model="formData.email"
              class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Ingresa tu correo"
            />
          </div>

          <div class="relative">
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              v-model="formData.message"
              class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Escribe tu mensaje..."
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:bg-blue-600 cursor-pointer"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </RevealOnScroll>
  </section>
</template>
