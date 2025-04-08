const style={
  "theme": {
    "colors": {
      "primary": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "secondary": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "success": "#10b981",
      "warning": "#f59e0b",
      "error": "#ef4444",
      "info": "#3b82f6"
    },
    "typography": {
      "fontFamily": {
        "sans": "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
        "serif": "Georgia, Cambria, 'Times New Roman', Times, serif"
      },
      "fontSize": {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem"
      },
      "fontWeight": {
        "light": "300",
        "normal": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700"
      },
      "lineHeight": {
        "none": "1",
        "tight": "1.25",
        "snug": "1.375",
        "normal": "1.5",
        "relaxed": "1.625",
        "loose": "2"
      }
    },
    "spacing": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem"
    },
    "borderRadius": {
      "none": "0px",
      "sm": "0.125rem",
      "default": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "full": "9999px"
    },
    "boxShadow": {
      "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "default": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      "none": "none"
    },
    "transitions": {
      "default": "all 0.3s ease",
      "fast": "all 0.15s ease",
      "slow": "all 0.5s ease"
    }
  },
  "components": {
    "navbar": {
      "desktop": {
        "container": "bg-white shadow-md py-4 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50",
        "logo": "h-8 w-auto",
        "nav": "hidden md:flex space-x-6",
        "navItem": "text-neutral-600 hover:text-primary-600 font-medium transition-colors",
        "navItemActive": "text-primary-600 font-semibold",
        "searchContainer": "hidden md:flex relative w-64 mx-4",
        "searchInput": "w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
        "searchIcon": "absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400",
        "iconGroup": "flex items-center space-x-4",
        "icon": "text-neutral-600 hover:text-primary-600 transition-colors cursor-pointer"
      },
      "mobile": {
        "container": "bg-white shadow-md py-3 px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50",
        "logo": "h-6 w-auto",
        "menuButton": "md:hidden text-neutral-800 focus:outline-none",
        "menuIcon": "w-6 h-6",
        "mobileMenu": "fixed inset-0 bg-white z-50 md:hidden flex flex-col",
        "mobileMenuHeader": "flex items-center justify-between p-4 border-b border-neutral-200",
        "closeIcon": "w-6 h-6 text-neutral-800",
        "mobileNav": "flex flex-col p-4 space-y-4",
        "mobileNavItem": "text-neutral-800 text-lg font-medium py-2",
        "mobileNavItemActive": "text-primary-600 font-semibold",
        "mobileSearchContainer": "px-4 py-3",
        "mobileSearchInput": "w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
        "mobileIconGroup": "flex items-center justify-around py-4 border-t border-neutral-200"
      }
    },
    "sidebar": {
      "desktop": {
        "container": "hidden md:block w-64 bg-white h-screen fixed top-16 left-0 overflow-y-auto shadow-md",
        "section": "py-4 px-4",
        "sectionTitle": "text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3",
        "list": "space-y-1",
        "item": "text-neutral-600 hover:bg-neutral-100 hover:text-primary-600 px-3 py-2 rounded-md transition-colors cursor-pointer flex items-center",
        "itemActive": "bg-primary-50 text-primary-600 font-medium",
        "itemIcon": "mr-3 text-neutral-400 group-hover:text-primary-500",
        "itemCount": "ml-auto text-xs text-neutral-500 bg-neutral-100 rounded-full px-2 py-0.5"
      },
      "mobile": {
        "toggleButton": "md:hidden fixed bottom-4 right-4 bg-primary-600 text-white p-3 rounded-full shadow-lg z-30",
        "drawer": "fixed inset-y-0 right-0 w-72 bg-white shadow-lg transform translate-x-full transition-transform ease-in-out duration-300 z-40",
        "drawerOpen": "transform translate-x-0",
        "drawerHeader": "px-4 py-3 border-b border-neutral-200 flex items-center justify-between",
        "drawerTitle": "font-medium text-lg",
        "drawerClose": "text-neutral-500 hover:text-neutral-700",
        "drawerContent": "p-4 overflow-y-auto h-[calc(100%-60px)]"
      }
    },
    "buttons": {
      "base": "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
      "sizes": {
        "xs": "px-2.5 py-1.5 text-xs",
        "sm": "px-3 py-2 text-sm",
        "md": "px-4 py-2 text-sm",
        "lg": "px-5 py-2.5 text-base",
        "xl": "px-6 py-3 text-base"
      },
      "primary": {
        "default": "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
        "disabled": "bg-primary-300 text-white cursor-not-allowed"
      },
      "secondary": {
        "default": "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-500",
        "disabled": "bg-neutral-100 text-neutral-400 cursor-not-allowed"
      },
      "outline": {
        "default": "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50 focus:ring-primary-500",
        "disabled": "bg-white text-neutral-300 border border-neutral-200 cursor-not-allowed"
      },
      "text": {
        "default": "text-primary-600 hover:text-primary-700 hover:bg-primary-50 focus:ring-primary-500",
        "disabled": "text-neutral-300 cursor-not-allowed"
      }
    },
    "typography": {
      "h1": "text-4xl md:text-5xl font-bold text-neutral-900",
      "h2": "text-3xl md:text-4xl font-bold text-neutral-900",
      "h3": "text-2xl md:text-3xl font-semibold text-neutral-900",
      "h4": "text-xl md:text-2xl font-semibold text-neutral-900",
      "h5": "text-lg md:text-xl font-semibold text-neutral-900",
      "h6": "text-base md:text-lg font-medium text-neutral-900",
      "subtitle1": "text-lg font-medium text-neutral-800",
      "subtitle2": "text-base font-medium text-neutral-700",
      "body1": "text-base text-neutral-700 leading-relaxed",
      "body2": "text-sm text-neutral-600 leading-relaxed",
      "caption": "text-xs text-neutral-500",
      "overline": "text-xs font-medium text-neutral-500 uppercase tracking-wider"
    },
    "forms": {
      "label": "block text-sm font-medium text-neutral-700 mb-1",
      "input": {
        "base": "block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-neutral-300",
        "sizes": {
          "sm": "py-1.5 px-2.5 text-xs",
          "md": "py-2 px-3 text-sm",
          "lg": "py-2.5 px-4 text-base"
        },
        "states": {
          "default": "border-neutral-300",
          "focus": "ring-2 ring-primary-500 border-primary-500",
          "error": "border-error text-error focus:ring-error focus:border-error",
          "disabled": "bg-neutral-100 text-neutral-500 cursor-not-allowed"
        }
      },
      "select": {
        "base": "block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-neutral-300",
        "icon": "absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-2 pointer-events-none",
        "container": "relative"
      },
      "checkbox": {
        "base": "h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded",
        "disabled": "opacity-50 cursor-not-allowed"
      },
      "radio": {
        "base": "h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300",
        "disabled": "opacity-50 cursor-not-allowed"
      },
      "formGroup": "mb-4",
      "helpText": "mt-1 text-sm text-neutral-500",
      "errorText": "mt-1 text-sm text-error"
    },
    "cards": {
      "base": "bg-white rounded-lg shadow-md overflow-hidden",
      "hover": "transform transition-transform hover:-translate-y-1 hover:shadow-lg",
      "product": {
        "container": "group relative",
        "imageContainer": "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-neutral-200",
        "image": "h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity",
        "badge": "absolute top-2 right-2 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded",
        "content": "p-4",
        "title": "text-base font-medium text-neutral-900 truncate group-hover:text-primary-600",
        "price": "mt-1 text-lg font-semibold text-neutral-900",
        "oldPrice": "line-through text-neutral-500 text-sm",
        "rating": "flex items-center mt-1",
        "footer": "flex items-center justify-between pt-2 mt-2 border-t border-neutral-100"
      },
      "blog": {
        "container": "flex flex-col",
        "imageContainer": "relative h-48 w-full overflow-hidden rounded-t-lg",
        "image": "h-full w-full object-cover",
        "content": "flex-1 p-6",
        "title": "text-xl font-semibold text-neutral-900",
        "excerpt": "mt-2 text-sm text-neutral-600 line-clamp-3",
        "footer": "flex items-center pt-4 mt-4 border-t border-neutral-100"
      }
    },
    "modals": {
      "overlay": "fixed inset-0 bg-neutral-900 bg-opacity-50 z-50 flex items-center justify-center p-4",
      "container": "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden",
      "header": "px-6 py-4 border-b border-neutral-200 flex items-center justify-between",
      "title": "text-lg font-medium text-neutral-900",
      "closeButton": "text-neutral-400 hover:text-neutral-500",
      "body": "px-6 py-4 overflow-y-auto max-h-[60vh]",
      "footer": "px-6 py-4 border-t border-neutral-200 flex justify-end space-x-3"
    },
    "footer": {
      "container": "bg-neutral-800 text-neutral-200",
      "top": {
        "container": "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",
        "grid": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      },
      "bottom": {
        "container": "bg-neutral-900 py-6",
        "content": "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between"
      },
      "title": "text-lg font-semibold text-white mb-4",
      "link": "text-neutral-300 hover:text-white transition-colors",
      "linkList": "space-y-3",
      "newsletter": {
        "container": "mt-4",
        "input": "bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full",
        "button": "bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors"
      },
      "socialIcons": "flex space-x-4 mt-4",
      "socialIcon": "text-neutral-300 hover:text-white transition-colors",
      "copyright": "text-neutral-400 text-sm"
    },
    "hero": {
      "container": "relative bg-neutral-900",
      "backgroundImage": "absolute inset-0 w-full h-full object-cover object-center opacity-40",
      "content": "relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center md:text-left",
      "title": "text-4xl md:text-5xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl",
      "subtitle": "mt-6 text-xl max-w-3xl text-neutral-200",
      "cta": {
        "container": "mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start",
        "primaryButton": "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        "secondaryButton": "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-neutral-900 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      }
    },
    "icons": {
      "sizes": {
        "xs": "h-3 w-3",
        "sm": "h-4 w-4",
        "md": "h-5 w-5",
        "lg": "h-6 w-6",
        "xl": "h-8 w-8"
      },
      "colors": {
        "primary": "text-primary-500",
        "secondary": "text-neutral-400",
        "white": "text-white",
        "black": "text-neutral-900",
        "success": "text-success",
        "warning": "text-warning",
        "error": "text-error",
        "info": "text-info"
      },
      "hover": {
        "primary": "hover:text-primary-600",
        "secondary": "hover:text-neutral-600",
        "success": "hover:text-green-600",
        "warning": "hover:text-amber-600",
        "error": "hover:text-red-600",
        "info": "hover:text-blue-600"
      }
    },
    "products": {
      "grid": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
      "list": "space-y-6",
      "filters": {
        "container": "bg-white p-4 rounded-lg shadow-sm border border-neutral-200",
        "title": "font-medium text-lg mb-4",
        "group": "mb-6",
        "groupTitle": "font-medium text-sm mb-2",
        "checkboxGroup": "space-y-2",
        "slider": "mt-2"
      },
      "sortBar": {
        "container": "bg-white p-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6",
        "results": "text-sm text-neutral-500",
        "controls": "flex items-center space-x-4 mt-3 sm:mt-0"
      },
      "pagination": {
        "container": "mt-8 flex justify-center",
        "button": "px-3 py-1 rounded-md text-sm",
        "buttonActive": "bg-primary-600 text-white",
        "buttonInactive": "bg-white text-neutral-700 hover:bg-neutral-100"
      }
    }
  },
  "utilities": {
    "container": {
      "default": "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      "sm": "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
      "md": "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
      "lg": "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    },
    "display": {
      "hidden": "hidden",
      "block": "block",
      "flex": "flex",
      "grid": "grid",
      "inline": "inline",
      "inlineBlock": "inline-block",
      "inlineFlex": "inline-flex"
    },
    "responsive": {
      "sm": "sm:",
      "md": "md:",
      "lg": "lg:",
      "xl": "xl:",
      "2xl": "2xl:"
    },
    "spacing": {
      "section": "py-12 md:py-16 lg:py-20"
    }
  }
}
