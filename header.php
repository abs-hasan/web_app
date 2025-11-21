<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Navbar - This will appear on all pages -->
<nav class="navbar" id="navbar">
    <div class="navbar-container">
        <!-- Logo Left -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="navbar-logo">
            <?php
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                echo 'TopPageAI';
            }
            ?>
        </a>

        <!-- Center Navigation Menu -->
        <div class="navbar-center">
            <ul class="navbar-menu" id="navbarMenu">
                <!-- Services with Dropdown -->
                <li class="has-dropdown" id="servicesDropdown">
                    <a href="#services">
                        Services
                        <span class="dropdown-arrow">▼</span>
                    </a>
                    <ul class="dropdown-menu">
                        <?php
                        // Check if Services menu exists
                        if (has_nav_menu('services')) {
                            wp_nav_menu(array(
                                'theme_location' => 'services',
                                'container'      => false,
                                'items_wrap'     => '%3$s',
                                'depth'          => 1,
                            ));
                        } else {
                            // Default services menu items
                            ?>
                            <li>
                                <a href="#seo">
                                    <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.35-4.35"></path>
                                    </svg>
                                    SEO Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#google-ads">
                                    <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 16v-4M12 8h.01"></path>
                                    </svg>
                                    Google Ads (PPC)
                                </a>
                            </li>
                            <li>
                                <a href="#social-media">
                                    <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z"></path>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    </svg>
                                    Social Media Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#content">
                                    <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                    </svg>
                                    Content Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#web-design">
                                    <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                    </svg>
                                    Web Design & Development
                                </a>
                            </li>
                            <li>
                                <a href="#analytics">
                                    <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="18" y1="20" x2="18" y2="10"></line>
                                        <line x1="12" y1="20" x2="12" y2="4"></line>
                                        <line x1="6" y1="20" x2="6" y2="14"></line>
                                    </svg>
                                    Analytics & Reporting
                                </a>
                            </li>
                            <?php
                        }
                        ?>
                    </ul>
                </li>

                <!-- Other Menu Links -->
                <?php
                // Check if Primary menu exists
                if (has_nav_menu('primary')) {
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container'      => false,
                        'items_wrap'     => '%3$s',
                        'depth'          => 1,
                    ));
                } else {
                    // Default menu items
                    ?>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#why-us">Why Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <?php
                }
                ?>
            </ul>
        </div>

        <!-- Right CTA Button -->
        <div class="navbar-right">
            <a href="#book-call" class="navbar-cta">Book Free Call</a>
        </div>

        <!-- Mobile Toggle -->
        <div class="mobile-toggle" id="mobileToggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>
