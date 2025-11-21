<?php
/**
 * TopPage Theme Functions
 * 
 * @package TopPage
 * @since 1.0.0
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue Styles and Scripts
 */
function toppage_enqueue_assets() {
    // this is the hero
    wp_enqueue_style('toppage-hero', get_template_directory_uri() . '/assets/css/hero-section.css', array(), '1.0.0');

    // Main theme stylesheet (required by WordPress)
    wp_enqueue_style('toppage-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Main global styles
    wp_enqueue_style('toppage-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0');
    
    // Navbar styles
    wp_enqueue_style('toppage-navbar', get_template_directory_uri() . '/assets/css/navbar.css', array(), '1.0.0');
    
    // Services Section styles ← NEW
    wp_enqueue_style('toppage-services', get_template_directory_uri() . '/assets/css/services-section.css', array(), '1.0.0');
    
    // Why Choose Section styles
    wp_enqueue_style('toppage-why-choose', get_template_directory_uri() . '/assets/css/why-choose.css', array(), '1.0.0');
    
    // Work Process Section styles
    wp_enqueue_style('toppage-work-process', get_template_directory_uri() . '/assets/css/work-process.css', array(), '1.0.0');
    
    // CTA Section styles
    wp_enqueue_style('toppage-cta', get_template_directory_uri() . '/assets/css/cta.css', array(), '1.0.0');
    
    // Footer styles
    wp_enqueue_style('toppage-footer', get_template_directory_uri() . '/assets/css/footer.css', array(), '1.0.0');
    
    // Navbar JavaScript
    wp_enqueue_script('toppage-navbar-js', get_template_directory_uri() . '/assets/js/navbar.js', array(), '1.0.0', true);
    
    // Services JavaScript ← NEW
    wp_enqueue_script('toppage-services-js', get_template_directory_uri() . '/assets/js/services-section.js', array(), '1.0.0', true);
    
    // Why Choose JavaScript
    wp_enqueue_script('toppage-why-choose-js', get_template_directory_uri() . '/assets/js/why-choose.js', array(), '1.0.0', true);
    
    // Work Process JavaScript
    wp_enqueue_script('toppage-work-process-js', get_template_directory_uri() . '/assets/js/work-process.js', array(), '1.0.0', true);
    
    // CTA JavaScript
    wp_enqueue_script('toppage-cta-js', get_template_directory_uri() . '/assets/js/cta.js', array(), '1.0.0', true);

    // Footer JavaScript
    wp_enqueue_script('toppage-footer-js', get_template_directory_uri() . '/assets/js/footer.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'toppage_enqueue_assets');

/**
 * Register Navigation Menus
 */
function toppage_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'toppage'),
        'services' => __('Services Dropdown Menu', 'toppage'),
    ));
}
add_action('init', 'toppage_register_menus');

/**
 * Theme Support
 */
function toppage_theme_support() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');
    
    // Let WordPress manage the document title
    add_theme_support('title-tag');
    
    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');
    
    // Enable HTML5 markup
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Add theme support for custom background
    add_theme_support('custom-background', array(
        'default-color' => 'f8f9fa',
    ));
}
add_action('after_setup_theme', 'toppage_theme_support');

/**
 * Set content width
 */
if (!isset($content_width)) {
    $content_width = 1800;
}
?>
