import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as __exportAll } from "./server-CWI9uh0h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BeFC89fY.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CrD-ehZT.css";
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
		name: "Venkat Mandarapu",
		shortName: "Venkat",
		role: "Full Stack Developer",
		tagline: "REACT · TYPESCRIPT · NODE.JS",
		location: "Texas, United States",
		bio: "Full Stack Developer focused on building responsive web applications, scalable APIs, and reliable end-to-end user experiences.",
		about: "Software developer with 3+ years of experience designing and building modern, scalable full-stack web applications using React, Next.js, TypeScript, JavaScript, Node.js, Python, and SQL. Experienced in creating responsive and reusable user interfaces, developing and integrating REST APIs, implementing authentication, managing database-driven applications, and deploying solutions to the cloud. Strong focus on **clean code, application performance, responsive design, and practical problem-solving**, with a growing interest in AI and intelligent application development.",
		avatar: "/images/logo.png",
		email: "venkat77797@gmail.com",
		yearsOfExperience: 3,
		available: true,
		availabilityLabel: "Open to opportunities",
		resume: "/resume.pdf"
	},
	social: {
		github: "https://github.com/VenkatM77797",
		linkedin: "https://www.linkedin.com/in/venkat-mandarapu/",
		website: "https://example.com"
	},
	skills: [
		{
			label: "Languages",
			items: [
				"TypeScript",
				"JavaScript",
				"Python",
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
		username: "VenkatM77797",
		repos: 37,
		followers: 10,
		contributionsLastYear: 917,
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
			slug: "insightai",
			title: "InsightAI",
			description: "AI-powered document analysis and productivity workspace with document uploads, AI chat, summaries, insights, risks, opportunities, trends, and action items.",
			image: "/images/insight.png",
			tech: [
				"React",
				"TypeScript",
				"AI"
			],
			github: "https://github.com/VenkatM77797/insightai",
			demo: "https://insightai-3rpm.vercel.app/",
			featured: true,
			year: "2026"
		},
		{
			slug: "rag-pdf-chat",
			title: "RAG PDF Chat",
			description: "Full-stack RAG application for chatting with PDF documents using FastAPI, NestJS, ChromaDB, Sentence Transformers, and a locally running Llama 3 model through Ollama.",
			image: "/images/project-rag.jpg",
			tech: [
				"Python",
				"FastAPI",
				"NestJS",
				"RAG"
			],
			github: "https://github.com/VenkatM77797/rag-pdf-chat",
			featured: true,
			year: "2026"
		},
		{
			slug: "llm-data-analyst-assistant",
			title: "LLM Data Analyst Assistant",
			description: "AI-powered data analyst assistant that converts natural-language questions into SQL, analyzes CSV and Excel datasets, and generates real-time insights using a local LLM with Ollama.",
			image: "/images/project-data-analyst.jpg",
			tech: [
				"Python",
				"SQL",
				"LLM",
				"Ollama"
			],
			github: "https://github.com/VenkatM77797/LLM-Data-Analyst-Assistant",
			featured: true,
			year: "2026"
		},
		{
			slug: "velora-ecommerce",
			title: "Velora E-Commerce",
			description: "Premium editorial-style e-commerce web application built with React, TypeScript, Tailwind CSS, and Redux Toolkit.",
			image: "/images/commerce.png",
			tech: [
				"React",
				"TypeScript",
				"Tailwind CSS",
				"Redux"
			],
			github: "https://github.com/VenkatM77797/velora-ecommerce",
			demo: "https://velora-ecommerce-six.vercel.app/",
			year: "2026"
		},
		{
			slug: "taskflow",
			title: "TaskFlow",
			description: "Task management application inspired by Todoist, built with NestJS, React, Express, PostgreSQL, Prisma, and JWT authentication.",
			image: "/images/project-taskflow.jpg",
			tech: [
				"React",
				"NestJS",
				"PostgreSQL",
				"Prisma"
			],
			github: "https://github.com/VenkatM77797/taskflow",
			year: "2026"
		}
	],
	experience: [
		{
			company: "ECHO IT Solutions",
			role: "Software Developer",
			location: "",
			start: "2026",
			end: "Present",
			description: "I build modern full-stack applications with responsive React interfaces, scalable Node.js/TypeScript/Python APIs, and SQL/PostgreSQL databases. I focus on clean user experiences, reliable backend systems, and cloud deployment with AWS.",
			tech: [
				"TypeScript",
				"Next.js",
				"NestJS"
			]
		},
		{
			company: "ElevanceSkills",
			role: "Full Stack Web Developer",
			location: "Remote",
			start: "2026",
			end: "2026",
			description: "Developed full-stack web applications using React.js, Tailwind CSS, Node.js, Express, MongoDB, and Firebase, including REST APIs and JWT-based authentication. Participated in end-to-end development, testing, debugging, and deployment through project-based internship programs.",
			tech: [
				"React",
				"Node.js",
				"PostgreSQL"
			]
		},
		{
			company: "Pittsburg State University",
			role: "Teaching Assistant ",
			location: "Pittsburg, United States",
			start: "2023",
			end: "2024",
			description: "Tutored students in DSA, OOP, DBMS, OS, Python, Java, and C++, simplifying complex computer science concepts and problem-solving approaches. Provided hands-on guidance with coding projects, assignments, Git, Linux, and exam preparation.",
			tech: ["DSA", "Python"]
		},
		{
			company: "Kaamkashi Multi-Resources Pvt. Ltd",
			role: "Frontend Developer",
			location: "Pittsburg, United States",
			start: "2021",
			end: "2022",
			description: "Developed responsive frontend applications using React.js, Next.js, and Redux, translating Figma designs into polished, mobile-first interfaces. Integrated REST APIs, optimized application performance, and collaborated in an agile startup environment.",
			tech: ["ReactJS", "Next.js"]
		}
	],
	education: [{
		school: "Pittsburg State University",
		degree: "Master of Science",
		field: "Information Technology",
		location: "Pittsburg, Kansas, United States",
		year: "2024",
		coursework: [
			"Advanced Database Systems",
			"Software Engineering",
			"Web Development",
			"Cloud Computing",
			"Data Analytics",
			"Information Security"
		]
	}, {
		school: "Andhra University",
		degree: "Bachelor of Technology",
		field: "Computer Science and Engineering",
		location: "Visakhapatnam, Andhra Pradesh, India",
		year: "2022",
		coursework: [
			"Data Structures & Algorithms",
			"Object-Oriented Programming",
			"Database Management Systems",
			"Operating Systems",
			"Computer Networks",
			"Software Engineering"
		]
	}],
	certifications: [
		{
			name: "Claude Academy: Introduction to Model Context Protocol",
			issuer: "Anthropic",
			year: "2026",
			url: "https://academy.claude.com/verify/3f6447fca94123d80e55bf159d1aec57"
		},
		{
			name: "Claude Academy: AI Fluency: Framework and foundations",
			issuer: "Anthropic",
			year: "2026",
			url: "https://academy.claude.com/verify/917a75ca43453314f403554d29ec769c"
		},
		{
			name: "Databricks Fundamentals Accreditation",
			issuer: "Databricks",
			year: "2026",
			url: "https://credentials.databricks.com/af17bc8b-d28c-4723-859b-b18f85246d4c#acc.fOip6GAC"
		},
		{
			name: "Oracle Fusion AI Agent Studio Certified Foundations Associate",
			issuer: "Oracle",
			year: "2026",
			url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=526B07ECE8F15AD00702B0C0C7D5A1335A0737D0530706B78EDCC3480F39A3BF"
		},
		{
			name: "Get Started with Python",
			issuer: "Google",
			year: "2025",
			url: "https://www.coursera.org/account/accomplishments/records/0X9RTVO2VZ33"
		},
		{
			name: "Decisions, Decisions: Dashboards and Reports",
			issuer: "Google",
			year: "2025",
			url: "https://www.coursera.org/account/accomplishments/records/J461FAIAJR0B"
		},
		{
			name: "What is Data Science?",
			issuer: "Google",
			year: "2025",
			url: "https://www.coursera.org/account/accomplishments/records/YQ5PKGC5C2AB"
		},
		{
			name: "Preparing  Data for Analysis with Microsoft Excel",
			issuer: "Microsoft",
			year: "2025",
			url: "https://www.coursera.org/account/accomplishments/records/QY5IMJ0REY5V"
		},
		{
			name: " Learn DevOps: Docker, Kubernetes, Terraform and Azure DevOps",
			issuer: "Udemy",
			year: "2021",
			url: "https://udemy-certificate.s3.amazonaws.com/image/UC-9926f56d-0703-4ee2-967c-d3aeb02be91e.jpg"
		}
	],
	openSource: {
		message: "I maintain a handful of small libraries and review PRs most weekends. Issues and first-time contributors welcome.",
		repos: [
			{
				name: "skillgraph",
				description: "An interactive career and skill roadmap web application.",
				url: "https://github.com/VenkatM77797/skillgraph",
				language: "TypeScript",
				stars: 0
			},
			{
				name: "roamwise",
				description: "A premium, editorial-style travel planning application.",
				url: "https://github.com/VenkatM77797/roamwise",
				language: "TypeScript",
				stars: 0
			},
			{
				name: "velora-ecommerce",
				description: "A premium editorial-style e-commerce web application built with React, TypeScript, Tailwind CSS, and Redux Toolkit.",
				url: "https://github.com/VenkatM77797/velora-ecommerce",
				language: "TypeScript",
				stars: 0
			}
		]
	}
};
/** Tech filters used by the Projects section. "All" is added automatically. */
var projectFilters = [
	"React",
	"RAG",
	"TypeScript",
	"LLM",
	"Python"
];
var navLinks = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Education",
		href: "#education"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var $$splitComponentImporter = () => import("./routes-Ci6ATYk-.mjs");
var title = `${portfolio.personal.name}`;
var description = portfolio.personal.bio;
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "icon",
			type: "image/png",
			href: "/images/icon.png"
		}]
	}),
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
