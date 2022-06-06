<section id="error">
	<div class="container">
		<main>
			<h1>404</h1>
		</main>
		<aside>
			<div class="title-decorated">Strona nie została znaleziona</div>
			<p class="subtitle">Możliwe, że adres nie jest poprawny lub strona została przeniesiona.</p>
			<p class="btn-wrap">
				<button>
					<a href="/" alt="Strona główna">Strona główna</a>
				</button>
			</p>
		</aside>
	</div>
</section>

<style lang="postcss">
	section {
		@apply w-screen h-screen relative overflow-hidden;
		@apply py-24;
		.container {
			@apply mx-auto px-8 h-full;
			@apply flex flex-col sm:flex-row gap-y-6 md:gap-y-0 md:gap-x-20 justify-start md:justify-center items-start md:items-center;
		}
		main,
		aside {
			@apply z-[1] select-none;
		}
		main {
			@apply self-center md:self-auto;
			h1 {
				@apply font-black leading-none text-center md:text-right;
				@apply text-4xl sm:text-8xl lg:text-[8rem] font-black leading-none;
			}
		}
		.btn-wrap {
			@apply mt-8 md:mt-12 flex flex-row items-center;
			button {
				@apply w-fit  px-2.5 py-1.5;
			}
		}

		.title-decorated {
			@apply relative text-left text-3xl md:text-5xl;
		}
		.subtitle {
			@apply text-lg md:text-xl font-light mt-6;
		}
	}
</style>
