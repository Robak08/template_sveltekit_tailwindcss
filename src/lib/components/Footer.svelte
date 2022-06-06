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

	const currentYear = dayjs().year();
</script>

<footer>
	<div class="footer-wrap">
		<div class="col">
			<div class="logo-wrap">
				<Logo size="70" />
				<div class="title-wrap">
					<h5 />
					<h6 />
				</div>
			</div>
			<p />
		</div>
		<div class="col">
			<h6>Informacje</h6>
			<ul>
				<li>
					<InfoOutlineIcon size="16" class="inline mr-1" />
				</li>
				<li>
					<a href="!#" alt="Jesteśmy tutaj" target="_blank">
						<PinOutlineIcon size="16" class="inline mr-1" />
					</a>
				</li>
				<li>
					<ClipboardOutlineIcon size="16" class="inline mr-1" />
				</li>
				<li>
					<FileTextOutlineIcon size="16" class="inline mr-1" />
				</li>
			</ul>
		</div>
		<div class="col">
			<h6 />
			<ul />
		</div>
		<div class="col">
			<h6 />
			<ul />
		</div>
	</div>
	<hr />
	<div class="footer-copy">©{currentYear}</div>
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
