<template>
    <section class="container mx-auto" id="contact">
        <SectionHeading>Get In Touch</SectionHeading>
        <!--  -->
        <div
            class="flex flex-col md:flex-row max-w-[800px] mx-auto justify-center md:space-x-10"
        >
            <div
                class="flex md:flex-col space-x-4 md:space-x-0 text-sm justify-between md:justify-start md:space-y-4 text-center contact-link"
            >
                <a
                    class="py-6 w-32 space-y-1 rounded-md flex items-center flex-col"
                    href="mailto:fayalahmed.ctg146@outlook.com"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style="fill: currentColor; transform: ; msfilter: "
                        class="inline-block"
                    >
                        <path
                            d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"
                        ></path>
                    </svg>
                    <span> Email </span>
                </a>

                <a
                    href="https://www.linkedin.com/in/faysalahmedhridoy"
                    target="_blank"
                    class="py-6 w-32 space-y-2 rounded-md flex items-center flex-col"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style="fill: currentColor; transform: ; msfilter: "
                        class="inline-block"
                    >
                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                        <path
                            d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                        ></path>
                    </svg>
                    <span>LinkinDin</span>
                </a>
                <a
                    href="https://wa.me/+8801997261058"
                    target="_blank"
                    class="py-6 w-32 space-y-2 rounded-md flex items-center flex-col"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style="fill: currentColor; transform: ; msfilter: "
                        class="inline-block"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                        ></path>
                    </svg>
                    <span>WhatsApp</span>
                </a>
            </div>
            <!--  p-6 -->
            <form
                class="flex flex-col space-y-4 rounded-md mt-10 md:mt-0"
                action=""
            >
                <label for="name">
                    Name:
                    <!-- w-96 -->
                    <input
                        class="block py-2 px-4 rounded-md w-full md:w-96"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Deo"
                    />
                </label>
                <label for="email">
                    Email:
                    <input
                        type="text"
                        class="block py-2 px-4 rounded-md w-full md:w-96"
                        id="email"
                        name="email"
                        placeholder="user@example.com"
                    />
                </label>
                <label for="message">
                    Message:
                    <textarea
                        class="block rounded-md py-2 px-4 w-full"
                        id="message"
                        rows="6"
                        placeholder="Your Message here..."
                    ></textarea>
                </label>
                <button class="rounded-md py-2 bg-primary">Send Message</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
label input,
label textarea {
    @apply mt-2;
}
.contact-link a {
    background: rgba(7, 3, 53, 1);
    background-image: radial-gradient(
        circle 610px at 5.2% 51.6%,
        rgba(5, 8, 114, 1) 0%,
        rgba(7, 3, 53, 1) 97.5%
    );
}

form input,
form textarea {
    background: rgba(67, 52, 87, 0.932);
}
form input:focus,
form textarea:focus {
    outline: 2px solid rgb(139, 115, 167);
    border: none;
}
</style>
