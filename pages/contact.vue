<script setup>
// fetch post

const mail = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const mailsent = ref(false);
const body = computed(() => {
  return JSON.stringify(mail);
});
const sendMail = async () => {
  if (
    mail.name === "" ||
    mail.email === "" ||
    mail.subject === "" ||
    mail.message === ""
  ) {
    alert("Please fill all the fields");
  } else {
    mailsent.value = true;
    await useFetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
  }
};

const btnContent = computed(() =>
  mailsent.value === true ? "Mail Sent" : "Send Mail"
);

useSeoMeta({
  title: "Quentin Heinis || Contact",
  ogTitle: "Quentin Heinis || Contact",
  description: "Send me a message",
  ogDescription: "Send me a message",
  ogImage: "/favicon.ico",
});
</script>

<template>
  <div class="p-contact">
    <h1>Contact</h1>
    <form>
      <label>
        Name :
        <input type="text" placeholder="Name" v-model="mail.name" required />
      </label>
      <label>
        Subject :
        <input
          type="text"
          placeholder="Subject"
          v-model="mail.subject"
          required
        />
      </label>
      <label>
        Email :
        <input type="email" placeholder="Email" v-model="mail.email" required />
      </label>
      <div>
        <p>Message :</p>
        <textarea
          placeholder="Message"
          v-model="mail.message"
          required
        ></textarea>
      </div>
      <button @click.prevent="sendMail()" ref="btn" :disabled="mailsent">
        {{ btnContent }}
      </button>
    </form>
  </div>
</template>

<style lang="scss">
.p-contact {
  form {
    padding: rem(20) rem(50);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: rem(20);
  }
  label,
  p {
    margin: 0;
    gap: rem(5);
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: rem(24);
  }
  div {
    gap: rem(5);
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    &:focus {
      outline-width: 2px;
    }
    padding: rem(10);
    border: none;
    border-bottom: 1px solid rgb(128, 128, 128);
    background: transparent;
    color: $black;
    font-size: rem(18);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
    &::placeholder {
      color: rgb(128, 128, 128);
    }
  }
  button {
    cursor: pointer;
    padding: rem(10);
    border: 2px solid black;
    background: transparent;
    color: $black;
    font-size: rem(18);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
  }
}
</style>
