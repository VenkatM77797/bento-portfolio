import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as __exportAll } from "./server-DhPWp0zh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DUbaYG2U.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-bA-fLRXD.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Bento Portfolio — Developer Portfolio Template" },
			{
				name: "description",
				content: "A modern, responsive bento grid developer portfolio template built with React, TypeScript and Tailwind CSS."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400..600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){try{var t=localStorage.getItem("bento-portfolio-theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var portfolio = {
	personal: {
		name: "Ada Marlowe",
		shortName: "Ada",
		role: "Full Stack Developer",
		tagline: "React · TypeScript · Node",
		location: "Lisbon, Portugal",
		bio: "I build thoughtful, scalable web applications and enjoy turning complex problems into simple experiences.",
		about: "I'm a full stack developer with a soft spot for design systems and developer experience. Most of my work lives at the seam between a well-modelled backend and an interface that feels obvious to use. Lately I've been building AI-assisted document tooling, shipping design systems used by multiple product teams, and writing about the boring engineering that makes products feel fast. Outside of work you'll find me running along the Tejo, restoring mechanical keyboards, and reviewing far too many pull requests for fun.",
		avatar: "/images/avatar.jpg",
		email: "hello@example.com",
		yearsOfExperience: 7,
		available: true,
		availabilityLabel: "Available for opportunities",
		resume: "/resume.pdf"
	},
	social: {
		github: "https://github.com/github",
		linkedin: "https://www.linkedin.com/in/linkedin",
		website: "https://example.com"
	},
	skills: [
		{
			label: "Languages",
			items: [
				"TypeScript",
				"JavaScript",
				"Python",
				"Java",
				"SQL"
			]
		},
		{
			label: "Frontend",
			items: [
				"React",
				"Next.js",
				"Tailwind CSS",
				"Vite",
				"Framer Motion"
			]
		},
		{
			label: "Backend",
			items: [
				"Node.js",
				"NestJS",
				"PostgreSQL",
				"Redis",
				"tRPC"
			]
		},
		{
			label: "Tools",
			items: [
				"Docker",
				"GitHub Actions",
				"Playwright",
				"Figma",
				"Vitest"
			]
		}
	],
	github: {
		username: "github",
		repos: 48,
		followers: 612,
		contributionsLastYear: 1284,
		activity: [
			1,
			0,
			2,
			3,
			1,
			2,
			4,
			2,
			0,
			1,
			3,
			4,
			2,
			1,
			0,
			2,
			3,
			3,
			4,
			1,
			0,
			1,
			2,
			4,
			3,
			2,
			1,
			0,
			2,
			3,
			4,
			4,
			2,
			1,
			0,
			1,
			3,
			2,
			4,
			3,
			1,
			0,
			2,
			3,
			4,
			2,
			1,
			3,
			2,
			4,
			1,
			0
		]
	},
	currentlyBuilding: {
		name: "Atlas",
		description: "An AI-powered document management platform that turns messy company knowledge into answerable questions.",
		tech: [
			"Next.js",
			"PostgreSQL",
			"pgvector"
		],
		status: "Private beta",
		progress: 68
	},
	projects: [
		{
			slug: "atlas",
			title: "Atlas — Document Intelligence",
			description: "Semantic search and summarisation across thousands of internal documents, with per-team access control and streaming answers.",
			image: "/images/project-atlas.jpg",
			tech: [
				"Next.js",
				"TypeScript",
				"Node.js",
				"PostgreSQL"
			],
			github: "https://github.com/github",
			demo: "https://example.com",
			featured: true,
			year: "2026"
		},
		{
			slug: "pulse",
			title: "Pulse Analytics",
			description: "A privacy-first product analytics dashboard with cohort funnels, live event streams and sub-second queries.",
			image: "/images/project-pulse.jpg",
			tech: [
				"React",
				"TypeScript",
				"Node.js"
			],
			github: "https://github.com/github",
			demo: "https://example.com",
			featured: true,
			year: "2025"
		},
		{
			slug: "forge",
			title: "Forge CLI",
			description: "A zero-config scaffolding CLI that generates typed API clients, tests and CI pipelines from an OpenAPI schema.",
			image: "/images/project-forge.jpg",
			tech: ["TypeScript", "Node.js"],
			github: "https://github.com/github",
			year: "2025"
		},
		{
			slug: "tempo",
			title: "Tempo Habits",
			description: "An offline-first habit tracker with local-first sync, streak analytics and a calm, minimal interface.",
			image: "/images/project-tempo.jpg",
			tech: ["React", "TypeScript"],
			github: "https://github.com/github",
			demo: "https://example.com",
			year: "2024"
		},
		{
			slug: "signal",
			title: "Signal Digest",
			description: "A Python service that clusters release notes from 200+ dependencies into a weekly digest for engineering teams.",
			image: "/images/project-forge.jpg",
			tech: ["Python", "PostgreSQL"],
			github: "https://github.com/github",
			year: "2024"
		}
	],
	experience: [
		{
			company: "Northwind Labs",
			role: "Senior Full Stack Engineer",
			location: "Lisbon, Portugal",
			start: "2023",
			end: "Present",
			description: "Lead the platform team building the design system and API layer powering four customer-facing products.",
			tech: [
				"TypeScript",
				"Next.js",
				"NestJS"
			]
		},
		{
			company: "Kestrel Digital",
			role: "Full Stack Engineer",
			location: "Remote",
			start: "2021",
			end: "2023",
			description: "Shipped a multi-tenant billing platform and cut median API latency by 60% through query and cache work.",
			tech: [
				"React",
				"Node.js",
				"PostgreSQL"
			]
		},
		{
			company: "Fieldstone",
			role: "Frontend Engineer",
			location: "Porto, Portugal",
			start: "2019",
			end: "2021",
			description: "Rebuilt the customer portal as a component-driven React app with a full accessibility pass.",
			tech: ["React", "Tailwind CSS"]
		}
	],
	education: [{
		school: "University of Porto",
		degree: "MSc",
		field: "Software Engineering",
		year: "2019"
	}, {
		school: "University of Porto",
		degree: "BSc",
		field: "Computer Science",
		year: "2017"
	}],
	openSource: {
		message: "I maintain a handful of small libraries and review PRs most weekends. Issues and first-time contributors welcome.",
		repos: [
			{
				name: "bento-portfolio",
				description: "The open-source template this site is built on.",
				url: "https://github.com/github",
				language: "TypeScript",
				stars: 1240
			},
			{
				name: "use-persisted-state",
				description: "A 1kb typed hook for storage-backed React state.",
				url: "https://github.com/github",
				language: "TypeScript",
				stars: 386
			},
			{
				name: "pgvector-recipes",
				description: "Practical patterns for vector search in Postgres.",
				url: "https://github.com/github",
				language: "Python",
				stars: 214
			}
		]
	},
	template: {
		repo: "https://github.com/github",
		name: "Bento Portfolio"
	}
};
/** Tech filters used by the Projects section. "All" is added automatically. */
var projectFilters = [
	"React",
	"TypeScript",
	"Node.js",
	"Python"
];
var navLinks = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var $$splitComponentImporter = () => import("./routes-KUGgmlah.mjs");
var title = `${portfolio.personal.name} — ${portfolio.personal.role}`;
var description = portfolio.personal.bio;
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { projectFilters as i, navLinks as n, portfolio as r, router_exports as t };
