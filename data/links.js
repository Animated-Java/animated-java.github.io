export const LINKS = {
    patreon:"https://www.patreon.com/animatedjava"
}
export const navItems = [
    {
      title: "About",
      id: "about",
      href: "/about",
      selected() {
        return true;
      },
    },
    {
      title: "Docs",
      id: "docs",
      href: "/docs",
      selected() {
        return false;
      },
    },
    {
      title: "Tutorial",
      id: "tutorial",
      href: "/tutorial",
      selected() {
        return false;
      },
    },
    {
      title: "Downloads",
      id: "downloads",
      href: "/downloads",
      selected() {
        return false;
      },
    },
    {
      title: "Plugins",
      id: "plugins",
      href: "/plugins",
      selected() {
        return false;
      },
    },
  ];