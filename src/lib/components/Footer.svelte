<script>
	import { page } from '$app/stores';
	import {
		InfoOutlineIcon,
		PinOutlineIcon,
		ClipboardOutlineIcon,
		FileTextOutlineIcon,
		FacebookOutlineIcon,
		EmailOutlineIcon,
		PhoneCallOutlineIcon,
		ExternalLinkOutlineIcon
	} from '@robakk08/svelte-evaicons';

	import dayjs from 'dayjs';
	import Logo from '$components/Logo.svelte';

	import { mainMenuItems, contactMenuItems } from '$data/navigation';
	import { tippy } from '$utils/tooltip';

	// const lista = [
	// 	{ name: "Plany lekcji", link: "/plany-lekcji" },
	// 	{
	// 		name: "Podręczniki, kryteria i programy",
	// 		link: "/podreczniki-kryteria-programy",
	// 	},
	// 	{
	// 		name: "Organizacja roku szkolnego",
	// 		link: "/organizacja-roku-szkolnego",
	// 	},
	// 	{ name: "Świetlica", link: "/swietlica" },
	// 	{ name: "Sukcesy uczniów", link: "/sukcesy" },
	// 	{ name: "Egzaminy", link: "/egzaminy" },
	// 	{ name: "Aktualności", link: "/aktualnosci" },
	// 	{ name: "Kalejdoskop", link: "/kalejdoskop" },
	// 	{ name: "Galeria", link: "/galeria" },
	// 	{ name: "Fundacja", link: "/fundacja" },
	// 	{ name: "Kontakt", link: "/kontakt" },
	// 	{ name: "O szkołach", link: "/o-szkolach" },
	// 	{ name: "Działamy na rzecz", link: "/dzialamy-na-rzecz" },
	// 	{ name: "Kółka zainteresowań", link: "/kolka-zainteresowan" },
	// 	{ name: "Uczymy Aktywnie", link: "/uczymy-aktywnie" },
	// ];

	const currentYear = dayjs().year();
</script>

<footer>
	<div class="footer-wrap">
		<div class="col">
			<div class="logo-wrap">
				<Logo size="70" />
				<div class="title-wrap">
					<h5>Dona</h5>
					<h6>Prywatna Szkoła Podstawowa nr 1</h6>
				</div>
			</div>
			<p>
				Miejsce gdzie dzieci mogą rozwijać skrzydła dzięki sprzyjającym warunkom. Bezpieczna
				przestrzeń, umożliwiająca wszystkim dzieciom odkrywanie i budowanie swojego potencjału.
				Rozwój kompetencji - nie tylko związanych z edukacją, ale także kształtujących charakter
				dzieci. Szkoła otwarta na różnorodność
			</p>
		</div>
		<div class="col">
			<h6>Informacje</h6>
			<ul>
				<li>
					<InfoOutlineIcon size="16" class="inline mr-1" />
					<b>Fundacja Szkolna Dona</b>
					<br /> Prywatna Szkoła Podstawowa nr 1
				</li>
				<li>
					<a href="https://goo.gl/maps/a5ojvJRmgLhztcuo6" alt="Jesteśmy tutaj" target="_blank">
						<PinOutlineIcon size="16" class="inline mr-1" />
						ul. Stroma 5, 30-521 Kraków
						<span use:tippy={{ content: 'Link wychodzący' }}>
							<ExternalLinkOutlineIcon size="13" class="inline ml-1 -mt-0.5" />
						</span>
					</a>
				</li>
				<li>
					<ClipboardOutlineIcon size="16" class="inline mr-1" />
					KRS: <b>0000083960</b>
				</li>
				<li>
					<FileTextOutlineIcon size="16" class="inline mr-1" />
					Konto bankowe: <br />
					Santander Bank Polska S.A.<br />
					<b>47 1500 1142 1211 4003 2622 0000</b>
				</li>
			</ul>
		</div>
		<div class="col">
			<h6>Przydatne linki</h6>
			<ul>
				{#each mainMenuItems as { href, label }}
					<li class="nav-item">
						<a
							sveltekit:prefetch
							{href}
							alt={label}
							class:active={$page.url.pathname.includes(href)}
						>
							{label}
						</a>
					</li>
				{/each}
				<li class="nav-item">
					<a
						href="https://dona.krakow.pl/pdf/2018/klauzula_rodo.pdf"
						target="_blank"
						alt="Polityka Prywatności"
						rel="noreferrer nofollower noopener external"
						>Polityka Prywatności
					</a>
				</li>
			</ul>
		</div>
		<div class="col">
			<h6>Skontaktuj się</h6>
			<ul>
				{#each contactMenuItems as { href, label, alt, type, target }}
					<li class="nav-item">
						<a
							sveltekit:prefetch
							{href}
							{alt}
							class:active={$page.url.pathname.includes(href)}
							{target}
						>
							{#if type === 'mail'}
								<EmailOutlineIcon size="16" class="inline mr-1" />
							{:else if type === 'phone'}
								<PhoneCallOutlineIcon size="16" class="inline mr-1" />
							{:else if type === 'facebook'}
								<FacebookOutlineIcon size="16" class="inline mr-1" />
							{/if}
							{label}
							{#if type === 'facebook'}
								<span use:tippy={{ content: 'Link wychodzący' }}>
									<ExternalLinkOutlineIcon size="13" class="inline ml-1 -mt-0.5" />
								</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<hr />
	<div class="footer-copy">©{currentYear} Fundacja Szkolna Dona</div>
</footer>

<style type="postcss">
	footer {
		@apply dark:bg-neutral-900  bg-neutral-50 select-none;
		.footer-wrap {
			@apply container mx-auto px-2;
			@apply my-3 p-1 md:p-2 relative;
			@apply grid grid-cols-2 md:grid-cols-4 items-center md:items-start justify-center;
			@apply gap-3 md:gap-6 lg:gap-8 xl:gap-10;
			.col {
				@apply flex flex-col justify-start;
				@apply w-fit mx-auto;
				.logo-wrap {
					@apply flex flex-row items-end gap-x-2 md:gap-x-4;
					.title-wrap {
						@apply flex flex-col items-start justify-center;
						@apply opacity-75;
						h5 {
							@apply text-base md:text-lg xl:text-xl font-medium mb-0;
						}
						h6 {
							@apply text-[0.625rem] mb-0;
						}
					}
				}
				h6 {
					@apply mb-1 md:mb-2 text-xs uppercase opacity-75;
				}
				p {
					@apply text-xxs mt-4 text-justify max-w-[320px];
				}
				ul {
					@apply ml-0.5;
					li {
						@apply list-none;
						@apply text-xxs 2xl:text-xs;
					}
				}
			}
		}
		.footer-copy {
			@apply text-xxs text-center py-4 opacity-75;
		}
	}
</style>
