<script>
  import { ref } from "vue";
  import messages from "../data/messages.json";
  
  export default {
    name: "MessageGenerator",
    setup() {
      const message = ref({
        phrase: "",
        advice: "",
        complement: "",
      });
  
      const generateMessage = () => {
        const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
        message.value = {
          phrase: random(messages.phrases),
          advice: random(messages.advice),
          complement: random(messages.complements),
        };
      };
  
      const shareMessage = () => {
        const fullMessage = `${message.value.phrase} ${message.value.advice} "${message.value.complement}"`;
  
        if (navigator.share) {
          navigator
            .share({
              title: "Sua Mensagem do Dia 🌟",
              text: fullMessage,
            })
            .catch((err) => console.error("Erro ao compartilhar:", err));
        } else {
          alert("Compartilhar não é suportado neste dispositivo!");
        }
      };
  
      // Gera uma mensagem inicial
      generateMessage();
  
      return { message, generateMessage, shareMessage };
    },
  };
  </script>
  
<template>
    <v-container class="message-generator" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="6">
          <v-card
            class="pa-5 text-center gradient-card"
            elevation="10"
            rounded="lg"
          >
            <v-avatar
              size="80"
              class="mx-auto mb-4"
              color="deep-purple accent-4"
              tile
            >
              <v-icon size="50" class="white--text">mdi-message-bulleted</v-icon>
            </v-avatar>
  
            <v-card-title class="text-h5 font-weight-bold">
              🌟 Descubra Sua Mensagem
            </v-card-title>
  
            <v-divider></v-divider>
  
            <v-card-text>
              <p class="text-h6 font-weight-bold mt-3 fade-in">{{ message.phrase }}</p>
              <p class="text-subtitle-1 mt-2 fade-in delay">{{ message.advice }}</p>
              <p class="text-body-2 text-success mt-3 fade-in delay-2">
                "{{ message.complement }}"
              </p>
            </v-card-text>
  
            <v-card-actions class="justify-center mt-4">
              <v-btn
                color="success"
                elevation="3"
                class="grow-hover"
                block
                @click="generateMessage"
              >
                Nova Mensagem ✨
              </v-btn>
            </v-card-actions>
  
            <v-card-actions class="justify-center mt-2">
              <v-btn
                color="primary"
                elevation="2"
                class="grow-hover"
                block
                @click="shareMessage"
              >
                Compartilhar 💬
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
  .message-generator {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    padding: 20px;
  }
  
  .gradient-card {
    background: linear-gradient(135deg, #ffffff, #f9f9f9);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    animation: slideIn 0.5s ease-out;
  }
  
  .grow-hover {
    transition: transform 0.2s ease-in-out;
  }
  
  .grow-hover:hover {
    transform: scale(1.05);
  }
  
  .fade-in {
    animation: fadeIn 0.8s ease-out;
  }
  
  .fade-in.delay {
    animation-delay: 0.3s;
  }
  
  .fade-in.delay-2 {
    animation-delay: 0.6s;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>