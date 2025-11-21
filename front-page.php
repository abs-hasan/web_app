<?php
/**
 * Front Page Template
 * 
 * @package TopPage
 */

get_header(); ?>

<main id="main-content">
    
    <!-- Services Section: The Value We Provide -->
    <?php get_template_part('template-parts/services-section'); ?>
    
    <!-- Work Process Section: The Steps We Follow -->
    <?php get_template_part('template-parts/work-process-section'); ?>
    
    <!-- CTA Section -->
    <?php get_template_part('template-parts/cta-section'); ?>
    
</main>

<?php get_footer(); ?>
