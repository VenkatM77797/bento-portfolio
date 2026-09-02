import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as projectFilters, n as navLinks, r as portfolio } from "./router-DUbaYG2U.mjs";
import { a as Menu, c as Linkedin, d as Github, f as GitFork, g as ArrowUpRight, h as Briefcase, i as Moon, l as Hammer, m as Download, n as Sun, o as MapPin, p as FileText, r as Star, s as Mail, t as X, u as GraduationCap } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-KUGgmlah.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-3 px-4 sm:flex sm:items-center sm:justify-between sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"© ",
						year,
						" ",
						portfolio.personal.name
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-muted-foreground",
					children: "Built with React + TypeScript"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: portfolio.template.repo,
					target: "_blank",
					rel: "noreferrer noopener",
					className: "inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true"
						}),
						portfolio.template.name,
						" template"
					]
				})
			]
		})
	});
}
var STORAGE_KEY = "bento-portfolio-theme";
function apply(theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
}
function ThemeToggle({ className }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const initial = localStorage.getItem(STORAGE_KEY) ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setTheme(initial);
		apply(initial);
		setMounted(true);
	}, []);
	function toggle() {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		apply(next);
		localStorage.setItem(STORAGE_KEY, next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
		className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none " + (className ?? ""),
		children: mounted && theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		})
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { personal, social } = portfolio;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex min-w-0 items-center gap-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground",
					children: personal.name.charAt(0)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate font-display text-base font-semibold",
					children: personal.name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 sm:gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Main",
						className: "hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex items-center gap-1",
							children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: "rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
								children: link.label
							}) }, link.href))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-1 hidden h-5 w-px bg-border md:block",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: social.github,
						target: "_blank",
						rel: "noreferrer noopener",
						"aria-label": "GitHub profile",
						className: "hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: social.linkedin,
						target: "_blank",
						rel: "noreferrer noopener",
						"aria-label": "LinkedIn profile",
						className: "hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						"aria-label": open ? "Close menu" : "Open menu",
						className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-nav",
			"aria-label": "Mobile",
			className: "border-t border-border bg-card/95 px-4 py-3 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col",
				children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "block rounded-lg px-2 py-3 text-sm font-medium transition-colors hover:bg-muted",
					children: link.label
				}) }, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "mt-2 flex gap-2 border-t border-border pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: social.github,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), " GitHub"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: social.linkedin,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), " LinkedIn"]
					})]
				})]
			})
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BentoCard({ children, className, index = 0, as: Tag = "div", interactive = true, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		...rest,
		style: { animationDelay: `${Math.min(index, 12) * 60}ms` },
		className: cn("animate-bento-in bento-surface relative flex h-full flex-col overflow-hidden rounded-2xl border border-border p-6", interactive && "bento-hover", className),
		children
	});
}
function CardLabel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("label-mono", className),
		children
	});
}
var LIMIT = 240;
function AboutCard({ index = 0 }) {
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const text = portfolio.personal.about;
	const isLong = text.length > LIMIT;
	const visible = expanded || !isLong ? text : `${text.slice(0, LIMIT).trimEnd()}…`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		id: "about",
		"aria-labelledby": "about-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "About" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "about-heading",
				className: "mt-3 text-xl font-semibold",
				children: "A bit about me"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: visible
			}),
			isLong && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setExpanded((v) => !v),
				"aria-expanded": expanded,
				className: "mt-auto pt-4 text-left font-mono text-xs text-brand underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
				children: expanded ? "Read less" : "Read more"
			})
		]
	});
}
function ContactCard({ index = 0 }) {
	const { personal, social } = portfolio;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		id: "contact",
		"aria-labelledby": "contact-heading",
		className: "p-7 sm:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid-dots pointer-events-none absolute -bottom-12 -left-8 h-48 w-56 opacity-[0.16]",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "contact-heading",
					className: "mt-3 text-3xl font-semibold sm:text-4xl",
					children: "Let's build something together."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: "Have an interesting project or opportunity? I read every message and usually reply within a day."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${personal.email}?subject=Hello%20${encodeURIComponent(personal.shortName)}`,
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Get in touch"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: social.linkedin,
						target: "_blank",
						rel: "noreferrer noopener",
						"aria-label": "LinkedIn profile",
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-3 text-sm font-medium transition-colors hover:border-border-strong",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}),
							"LinkedIn",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "h-3.5 w-3.5 text-muted-foreground",
								"aria-hidden": "true"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: social.github,
						target: "_blank",
						rel: "noreferrer noopener",
						"aria-label": "GitHub profile",
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-3 text-sm font-medium transition-colors hover:border-border-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "GitHub"]
					})
				]
			})]
		})]
	});
}
function TechBadge({ children, tone = "neutral", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none", tone === "neutral" && "border-border bg-muted text-muted-foreground", tone === "brand" && "border-brand/30 bg-brand-soft text-foreground", tone === "cool" && "border-cool/30 bg-cool-soft text-foreground", className),
		children
	});
}
function CurrentlyBuildingCard({ index = 0 }) {
	const project = portfolio.currentlyBuilding;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		"aria-labelledby": "building-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hammer, {
					className: "h-3.5 w-3.5 text-brand",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "Currently building" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "building-heading",
				className: "mt-3 text-xl font-semibold",
				children: project.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: project.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: project.tech.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechBadge, {
					tone: "brand",
					children: tech
				}) }, tech))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 text-xs font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-1.5 w-1.5",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-status-pulse absolute inline-flex h-full w-full rounded-full bg-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" })]
						}), project.status]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs text-muted-foreground",
						children: [project.progress, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted",
					role: "progressbar",
					"aria-valuenow": project.progress,
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					"aria-label": `${project.name} progress`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-brand transition-[width] duration-700",
						style: { width: `${project.progress}%` }
					})
				})]
			})
		]
	});
}
function EducationCard({ index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		"aria-labelledby": "education-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
					className: "h-3.5 w-3.5 text-cool",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "Education" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "education-heading",
				className: "sr-only",
				children: "Education"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-4",
				children: portfolio.education.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-b border-border pb-4 last:border-0 last:pb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "truncate text-sm font-semibold",
							children: entry.school
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-muted-foreground",
							children: entry.year
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [
							entry.degree,
							" · ",
							entry.field
						]
					})]
				}, `${entry.school}-${entry.year}`))
			})
		]
	});
}
function ExperienceCard({ index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		id: "experience",
		"aria-labelledby": "experience-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "Experience" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "experience-heading",
				className: "mt-3 text-xl font-semibold",
				children: "Where I've worked"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 space-y-5",
				children: portfolio.experience.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-1.5 left-0 h-2 w-2 rounded-full bg-brand ring-4 ring-brand-soft",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-5 bottom-[-1.25rem] left-[3.5px] w-px bg-border last:hidden",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "truncate text-sm font-semibold",
								children: job.role
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] text-muted-foreground",
								children: [
									job.start,
									" — ",
									job.end
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm text-brand",
							children: job.company
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-mono mt-1",
							children: job.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: job.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 flex flex-wrap gap-1.5",
							children: job.tech.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechBadge, { children: tech }) }, tech))
						})
					]
				}, `${job.company}-${job.start}`))
			})
		]
	});
}
var LEVELS = [
	"bg-muted",
	"bg-brand/25",
	"bg-brand/45",
	"bg-brand/70",
	"bg-brand"
];
function GithubCard({ index = 0 }) {
	const { github, social } = portfolio;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		"aria-labelledby": "github-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "GitHub" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "github-heading",
						className: "mt-2 truncate font-mono text-base",
						children: ["@", github.username]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
					className: "h-5 w-5 shrink-0 text-muted-foreground",
					"aria-hidden": "true"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-5 grid grid-cols-3 gap-2 text-center",
				children: [
					{
						label: "Repos",
						value: github.repos
					},
					{
						label: "Followers",
						value: github.followers
					},
					{
						label: "Commits",
						value: github.contributionsLastYear
					}
				].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card-elevated py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "label-mono text-[10px]",
						children: stat.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-display text-lg font-semibold",
						children: stat.value.toLocaleString()
					})]
				}, stat.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, {
					className: "mb-2",
					children: "Activity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-flow-col grid-rows-4 gap-1",
					"aria-label": "Illustrative contribution activity",
					children: github.activity.map((level, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: `h-2.5 w-full rounded-[3px] ${LEVELS[Math.min(level, 4)]}`,
						"aria-hidden": "true"
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto pt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: social.github,
					target: "_blank",
					rel: "noreferrer noopener",
					className: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-2.5 text-sm font-medium transition-colors hover:border-border-strong",
					children: ["View GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "h-3.5 w-3.5",
						"aria-hidden": "true"
					})]
				})
			})
		]
	});
}
function HeroCard({ index = 0 }) {
	const { personal, social } = portfolio;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		"aria-labelledby": "hero-heading",
		className: "flex flex-col justify-between gap-8 p-7 sm:p-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid-dots pointer-events-none absolute -top-16 -right-10 h-48 w-48 opacity-[0.18]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: personal.tagline }), personal.available && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-positive/30 bg-positive/10 px-2.5 py-1 text-[11px] font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-1.5 w-1.5",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-status-pulse absolute inline-flex h-full w-full rounded-full bg-positive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-positive" })]
						}), personal.availabilityLabel]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					id: "hero-heading",
					className: "mt-5 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl",
					children: [personal.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-brand-gradient",
						children: personal.role
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: personal.bio
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${personal.email}`,
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), personal.email]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: social.github,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-2.5 text-sm font-medium transition-colors hover:border-border-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), " GitHub"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: social.linkedin,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-2.5 text-sm font-medium transition-colors hover:border-border-strong",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}),
							" LinkedIn",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "h-3.5 w-3.5 text-muted-foreground",
								"aria-hidden": "true"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true"
						}), personal.location]
					})
				]
			})
		]
	});
}
function OpenSourceCard({ index = 0 }) {
	const { openSource, social } = portfolio;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		"aria-labelledby": "oss-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitFork, {
					className: "h-3.5 w-3.5 text-brand",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "Open source" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "oss-heading",
				className: "mt-3 text-xl font-semibold",
				children: "Things I maintain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: openSource.message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: openSource.repos.map((repo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: repo.url,
					target: "_blank",
					rel: "noreferrer noopener",
					className: "group block rounded-xl border border-border bg-card-elevated p-3 transition-colors hover:border-border-strong",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-mono text-sm",
								children: repo.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "h-3 w-3",
									"aria-hidden": "true"
								}), repo.stars.toLocaleString()]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted-foreground",
							children: repo.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "label-mono mt-2 inline-flex items-center gap-1",
							children: [repo.language, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "h-3 w-3 transition-transform group-hover:translate-x-0.5",
								"aria-hidden": "true"
							})]
						})
					]
				}) }, repo.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: social.github,
				target: "_blank",
				rel: "noreferrer noopener",
				className: "mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-brand hover:underline",
				children: ["See all repositories", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					className: "h-3 w-3",
					"aria-hidden": "true"
				})]
			})
		]
	});
}
function ProfileCard({ index = 0 }) {
	const { personal } = portfolio;
	const [failed, setFailed] = (0, import_react.useState)(false);
	const initials = personal.name.split(" ").map((part) => part.charAt(0)).slice(0, 2).join("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-muted",
				children: personal.avatar && !failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: personal.avatar,
					alt: `Portrait of ${personal.name}`,
					width: 640,
					height: 640,
					loading: "lazy",
					onError: () => setFailed(true),
					className: "h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-full w-full place-items-center font-display text-4xl font-bold text-muted-foreground",
					children: initials
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold",
				children: personal.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-muted-foreground",
				children: personal.bio
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-auto space-y-2 border-t border-border pt-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
								className: "h-3.5 w-3.5 shrink-0 text-muted-foreground",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Current role"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "min-w-0 truncate",
								children: personal.role
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "h-3.5 w-3.5 shrink-0 text-muted-foreground",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "min-w-0 truncate",
								children: personal.location
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "label-mono",
							children: "Experience"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "font-mono text-sm",
							children: [personal.yearsOfExperience, " yrs"]
						})]
					})
				]
			})
		]
	});
}
function ProjectImage({ project, className }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden rounded-xl border border-border bg-muted", className),
		children: project.image && !failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: project.image,
			alt: `${project.title} interface preview`,
			width: 1280,
			height: 800,
			loading: "lazy",
			onError: () => setFailed(true),
			className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid-dots grid h-full w-full place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "label-mono",
				children: project.title
			})
		})
	});
}
function ProjectLinks({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [project.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: project.demo,
			target: "_blank",
			rel: "noreferrer noopener",
			className: "inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5",
			children: ["Live demo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "h-3.5 w-3.5",
				"aria-hidden": "true"
			})]
		}), project.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: project.github,
			target: "_blank",
			rel: "noreferrer noopener",
			className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card-elevated px-3.5 py-2 text-xs font-medium transition-colors hover:border-border-strong",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
				className: "h-3.5 w-3.5",
				"aria-hidden": "true"
			}), "Source"]
		})]
	});
}
function FeaturedProjectCard({ project, index = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "article",
		className: cn("group flex flex-col gap-5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectImage, {
			project,
			className: "aspect-16/9 w-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "Featured project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-muted-foreground",
						children: project.year
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-xl font-semibold",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: project.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-wrap gap-1.5",
					children: project.tech.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechBadge, { children: tech }) }, tech))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 pt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectLinks, { project })
				})
			]
		})]
	});
}
function ProjectCard({ project, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "article",
		className: "group flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectImage, {
			project,
			className: "aspect-16/10 w-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: project.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-mono text-xs text-muted-foreground",
						children: project.year
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: project.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-wrap gap-1.5",
					children: project.tech.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechBadge, { children: tech }) }, tech))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectLinks, { project })
				})
			]
		})]
	});
}
function ResumeCard({ index = 0 }) {
	const { resume, name } = portfolio.personal;
	if (!resume) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		"aria-labelledby": "resume-heading",
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
					className: "h-3.5 w-3.5 text-cool",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "Resume" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "resume-heading",
				className: "mt-3 text-lg font-semibold",
				children: "The one-page version"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: "Full history, skills and references in a single PDF."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: resume,
				download: true,
				className: "mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-2.5 pt-2.5 text-sm font-medium transition-colors hover:border-border-strong",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}),
					"Download résumé",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sr-only",
						children: [
							" of ",
							name,
							" (PDF)"
						]
					})
				]
			})
		]
	});
}
function SkillsCard({ index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
		index,
		as: "section",
		"aria-labelledby": "skills-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLabel, { children: "Stack" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "skills-heading",
				className: "mt-3 text-xl font-semibold",
				children: "Skills & tooling"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 space-y-4",
				children: portfolio.skills.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "label-mono",
					children: group.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 flex flex-wrap gap-1.5",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechBadge, { children: item }) }, item))
				})] }, group.label))
			})
		]
	});
}
/** Grid cell: controls how much space a card takes at each breakpoint. */
function Cell({ span, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("min-w-0", span),
		children
	});
}
function BentoGrid() {
	const featured = portfolio.projects.filter((p) => p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 pt-10 pb-4 sm:px-6 sm:pt-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "md:col-span-2 lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCard, { index: 0 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { index: 1 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubCard, { index: 2 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsCard, { index: 3 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "md:col-span-2 lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrentlyBuildingCard, { index: 4 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "md:col-span-2 lg:col-span-3",
					children: featured[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjectCard, {
						project: featured[0],
						index: 5
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "md:col-span-2 lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, { index: 6 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "md:col-span-2 lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutCard, { index: 7 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenSourceCard, { index: 8 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationCard, { index: 9 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					span: "lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeCard, { index: 10 })
				})
			]
		})
	});
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, { index: 0 })
	});
}
var FILTERS = ["All", ...projectFilters];
function ProjectsSection() {
	const [active, setActive] = (0, import_react.useState)("All");
	const visible = (0, import_react.useMemo)(() => active === "All" ? portfolio.projects : portfolio.projects.filter((project) => project.tech.includes(active)), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		"aria-labelledby": "projects-heading",
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:flex sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-mono",
				children: "Selected work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "projects-heading",
				className: "mt-2 text-2xl font-semibold sm:text-3xl",
				children: "Projects"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "group",
				"aria-label": "Filter projects by technology",
				className: "flex flex-wrap gap-1.5",
				children: FILTERS.map((filter) => {
					const isActive = filter === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(filter),
						"aria-pressed": isActive,
						className: cn("rounded-full border px-3.5 py-2 font-mono text-xs transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none", isActive ? "border-transparent bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-border-strong hover:text-foreground"),
						children: filter
					}, filter);
				})
			})]
		}), visible.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: visible.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "min-w-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					project,
					index: i
				})
			}, project.slug))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground",
			children: [
				"No projects match ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono",
					children: active
				}),
				" yet."
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoGrid, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
