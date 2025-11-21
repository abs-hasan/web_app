# TopPage WordPress Theme

Professional WordPress theme with modern animated navbar for hosting and domain reselling business.

## Installation

1. Download the `toppage-theme` folder
2. Upload it to `wp-content/themes/` in your WordPress installation
3. Go to WordPress Admin > Appearance > Themes
4. Activate "TopPage Theme"

## Theme Structure

```
toppage-theme/
├── assets/
│   ├── css/
│   │   ├── main.css         # Global styles for entire site
│   │   └── navbar.css       # Navbar-specific styles
│   └── js/
│       └── navbar.js        # Navbar JavaScript functionality
├── style.css                # Required WordPress theme file
├── functions.php            # Theme functions and setup
├── header.php              # Header with navbar (loads on all pages)
├── footer.php              # Footer template
├── index.php               # Main template file
└── front-page.php          # Homepage template
```

## Features

✅ **Modern Animated Navbar**
- Fixed top navbar with light blue background
- Responsive mobile menu
- Dropdown services menu
- Hover animations and effects
- CTA button with phone icon

✅ **Professional CSS Architecture**
- `main.css` - Global styles used across all pages
- `navbar.css` - Navbar-specific styles
- Separate, organized, maintainable code

✅ **WordPress Integration**
- Proper theme structure
- Menu management via WordPress admin
- Custom logo support
- Mobile responsive
- Works on all pages automatically

## Customization

### Change Logo
1. Go to Appearance > Customize > Site Identity
2. Upload your logo
3. Or edit the text "TopPageAI" in `header.php`

### Edit Menu Items
1. Go to Appearance > Menus
2. Create/edit "Primary Menu" (About Us, Why Us, Contact)
3. Create/edit "Services Dropdown Menu" (SEO, Google Ads, etc.)

### Modify Colors
Edit these files:
- `assets/css/navbar.css` - Navbar colors
- `assets/css/main.css` - Site-wide colors

### Brand Colors
- Primary Blue: `#1E5EFF`
- Dark Navy: `#0D1B2A`
- Light Blue: `#EAF1FF`

## Usage

The navbar will automatically appear on **all pages** because it's in `header.php`.

To use the header on any page template:
```php
<?php get_header(); ?>
<!-- Your page content here -->
<?php get_footer(); ?>
```

## Support

For customization help, refer to WordPress documentation or hire a WordPress developer.
