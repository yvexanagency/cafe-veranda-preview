# Café Veranda website concept

A mobile-first pitch website for Café Veranda in Meknès, available in French, English, and Arabic. This is a local preview, not a production deployment.

## Run

Use Node.js 20.19+ or 22.12+.

```sh
pnpm install
pnpm dev
```

Build with `pnpm build`. Preview the build with `pnpm preview`.

## Publish with GitHub Pages

1. Create a GitHub repository and put the contents of this folder at its root.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the source.
3. Push to the `main` branch. The included workflow builds and publishes the site.

The Vite build uses relative asset paths, so it works at a repository URL such as `https://USERNAME.github.io/REPOSITORY/`. GitHub Pages is public hosting. Check the menu prices, contact details, and photo permissions with the restaurant before sharing a public link.

## Edit content

- Menu categories and dishes: `src/menu.js`
- Contact details, Google Maps link, and embedded map: constants at the top of `src/main.js`
- Page copy and gallery: `src/main.js`
- Visual styles: `src/style.css`
- SEO metadata and structured data: `index.html`

The menu contains 209 priced items transcribed from the 14 Instagram Highlight screenshots supplied by the user. The Highlight says “128w”, so these prices may be old. Confirm prices and availability with the restaurant before launch. Generated concept photographs are stored in `public/images` and labelled as concept imagery on the page. Replace these with approved photos of the restaurant before a production launch.

## Evidence checked on 21 October 2026

- [Instagram profile](https://www.instagram.com/cafe_veranda_restaurant/): the user supplied 14 screenshots from its Menu Highlight. These are the source for the displayed menu items and prices. Copies are included in the source package's `evidence/instagram-menu` folder.
- [Restaurant Guru listing](https://fr.restaurantguru.com/Veranda-Meknes-2): source for the `+212 5354-01961` contact number.
- [Moroccool listing](https://moroccool.com/cafes-restaurants/cafe-veranda): corroborates the Al Mountazah Zahwa location and a WhatsApp link using `0535401961`.
- [Tripadvisor listing](https://www.tripadvisor.fr/Restaurant_Review-g293735-d12386502-Reviews-Cafe_Veranda-Meknes_Fez_Meknes.html): corroborates Villa 21, Lotis Mountazah, Meknès 50000.
- [Moroccool Café Veranda listing](https://moroccool.com/cafes-restaurants/cafe-veranda): supplied the embeddable Google map for the Café Veranda location. The live map needs an internet connection.

Some older public pages show a different phone number. Confirm the selected number, current address wording, menu, opening hours, and approved imagery with the restaurant before production deployment.
