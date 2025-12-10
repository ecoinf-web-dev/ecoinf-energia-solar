<template>
	<section
		class="py-16 lg:py-24 bg-linear-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden">
		<div class="max-w-7xl mx-auto px-6">
			<!-- Título da Seção -->
			<div class="text-center mb-16">
				<h2
					class="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
					Veja o Que Nossos
					<span
						class="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-400 font-extrabold">
						Clientes
					</span>
					<br />e
					<span
						class="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-400 font-extrabold">
						Parceiros
					</span>
					Falam Sobre Nós.
				</h2>
			</div>

			<!-- Grid de Avaliações -->
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
				<a
					v-for="(testimonial, index) in testimonials"
					:key="index"
					:href="testimonial.link"
					target="_blank"
					rel="noopener noreferrer"
					class="relative group block">
					<div
						class="absolute -inset-1 bg-linear-to-r from-orange-400 to-amber-400 rounded-xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
					<img
						:src="testimonial.image"
						:alt="`Avaliação ${index + 1}`"
						class="relative block w-full h-auto rounded-lg shadow-2xl transform transition duration-500 group-hover:scale-[1.02]"
						loading="lazy" />
				</a>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const testimonials = [
		{
			image: "/avaliacao1.png",
			link: "https://www.google.com/maps/place/Ecoinf+Energia+Solar/@-15.9036097,-48.0649324,17z/data=!4m14!1m5!8m4!1e1!2s108733212841338830955!3m1!1e1!3m7!1s0x935a33f85f1e1bf7:0x7148680c7ba9fdd1!8m2!3d-15.9036149!4d-48.0623575!9m1!1b1!16s%2Fg%2F11vk7fsstm?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D",
		},
		{
			image: "/avaliacao2.png",
			link: "https://www.google.com/maps/place/Ecoinf+Energia+Solar/@-15.9036097,-48.0649324,17z/data=!4m14!1m5!8m4!1e1!2s108733212841338830955!3m1!1e1!3m7!1s0x935a33f85f1e1bf7:0x7148680c7ba9fdd1!8m2!3d-15.9036149!4d-48.0623575!9m1!1b1!16s%2Fg%2F11vk7fsstm?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D",
		},
		{
			image: "/avaliacao3.png",
			link: "https://www.google.com/maps/place/Ecoinf+Energia+Solar/@-15.9036097,-48.0649324,17z/data=!4m14!1m5!8m4!1e1!2s108733212841338830955!3m1!1e1!3m7!1s0x935a33f85f1e1bf7:0x7148680c7ba9fdd1!8m2!3d-15.9036149!4d-48.0623575!9m1!1b1!16s%2Fg%2F11vk7fsstm?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D",
		},
		{
			image: "/avaliacao4.png",
			link: "https://www.google.com/maps/place/Ecoinf+Energia+Solar/@-15.9036097,-48.0649324,17z/data=!4m14!1m5!8m4!1e1!2s108733212841338830955!3m1!1e1!3m7!1s0x935a33f85f1e1bf7:0x7148680c7ba9fdd1!8m2!3d-15.9036149!4d-48.0623575!9m1!1b1!16s%2Fg%2F11vk7fsstm?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D",
		},
	];
</script>
